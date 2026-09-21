# -*- coding: utf-8 -*-
"""
QGIS 在线底图服务配置中枢 (QGIS Basemap Hub) - 后端服务
纯标准库实现，零外部重依赖，内置 SQLite 统计与持久化。
"""

import os
import sys
import json
import sqlite3
import datetime
import time
import hashlib
import threading
from collections import deque, defaultdict
from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn
import urllib.parse
import urllib.request
import ssl
import re

# =====================================================================
# 内存级 IP 滑动窗口限流器 (IP 仅在内存短暂驻留，不入库、不写盘，重启即空)
# =====================================================================
class MemoryRateLimiter:
    def __init__(self):
        self._lock = threading.Lock()
        # {endpoint: {ip: deque([timestamps])}}
        self._records = defaultdict(lambda: defaultdict(deque))

    def is_allowed(self, endpoint: str, ip: str, limit: int, window: int = 60) -> bool:
        if not ip:
            return True
        now = time.time()
        with self._lock:
            q = self._records[endpoint][ip]
            # 清除窗口外的过期时间戳
            while q and q[0] <= now - window:
                q.popleft()
            if len(q) >= limit:
                return False
            q.append(now)
            return True

rate_limiter = MemoryRateLimiter()

# 频控限值常量（次/分钟/IP）
RATE_LIMIT_VISIT = 30
RATE_LIMIT_LIKE = 10
RATE_LIMIT_EXPORT = 10

# POST 请求体大小上限（业务 JSON 远小于 1MB），超限直接拒绝读取，防内存耗尽 DoS
MAX_BODY_BYTES = 1_000_000
# 单次导出允许携带的最大图层数（与站点真实图层总量同量级），防 layer_ids 数组膨胀刷库
MAX_EXPORT_LAYERS = 60


def hash_visitor_id(visitor_id: str) -> str:
    """对客户端 visitor_id 进行单向 SHA-256 哈希，彻底消除明文标识"""
    raw = (visitor_id or "anonymous").strip()
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
GEOJSON_DIR = os.path.join(BASE_DIR, "public", "geojson")
DB_PATH = os.path.join(DATA_DIR, "stats.db")
LAYERS_JSON_PATH = os.path.join(DATA_DIR, "layers.json")
RESOURCES_DIR = os.path.join(BASE_DIR, "resources")
LAYERS_MD_PATH = os.path.join(RESOURCES_DIR, "layers.md")
BACKUP_DIR = os.path.join(DATA_DIR, "backups")
BACKUP_RETENTION_DAYS = 15

os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(GEOJSON_DIR, exist_ok=True)
os.makedirs(RESOURCES_DIR, exist_ok=True)
os.makedirs(BACKUP_DIR, exist_ok=True)


def parse_layers_md(file_path):
    """从 resources/layers.md 中动态解析所有在线底图及标签属性"""
    if not os.path.exists(file_path):
        return []

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    layers = []
    lines = content.splitlines()
    curr_layer = None
    in_code_block = False
    url_lines = []

    for line in lines:
        stripped = line.strip()
        
        m_head = re.match(r"^###\s*\[([^\]]+)\]\s*(.*)$", stripped)
        if m_head:
            if curr_layer:
                if url_lines:
                    curr_layer["url"] = "\n".join(url_lines).strip()
                layers.append(curr_layer)
                url_lines = []
                in_code_block = False
            
            lid = m_head.group(1).strip()
            lname = m_head.group(2).strip()
            curr_layer = {
                "id": lid,
                "name": lname,
                "format": "XYZ Tiles",
                "categories": [],
                "description": "",
                "notes": "",
                "url": "",
                "needs_vpn": False,
                "vpn_raw": "否",
                "has_boundary_issue": False,
                "has_coordinate_drift": False,
                "thumbnail": "",
                "row_index": 0
            }
            continue

        if curr_layer is None:
            continue

        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue

        if in_code_block:
            url_lines.append(line)
            continue

        m_fmt = re.match(r"^-\s*\*\*格式\*\*\s*:\s*`?([^`]+)`?", stripped)
        if m_fmt:
            curr_layer["format"] = m_fmt.group(1).strip()
            continue

        m_cat = re.match(r"^-\s*\*\*分类\*\*\s*:\s*(.*)$", stripped)
        if m_cat:
            cats = [c.strip() for c in m_cat.group(1).split(",") if c.strip() and c.strip() != "无"]
            curr_layer["categories"] = cats
            continue

        m_tags = re.match(r"^-\s*\*\*标签\*\*\s*:\s*(.*)$", stripped)
        if m_tags:
            tag_str = m_tags.group(1)
            curr_layer["needs_vpn"] = ("需VPN" in tag_str or "VPN" in tag_str) and ("国内直连" not in tag_str and "无需VPN" not in tag_str)
            curr_layer["vpn_raw"] = "需要" if curr_layer["needs_vpn"] else "否"
            curr_layer["has_boundary_issue"] = "边界问题" in tag_str and "无边界问题" not in tag_str
            curr_layer["has_coordinate_drift"] = "火星坐标偏移" in tag_str or ("坐标偏移" in tag_str and "无坐标偏移" not in tag_str)
            continue

        m_row = re.match(r"^-\s*\*\*序号\*\*\s*:\s*(\d+)", stripped)
        if m_row:
            curr_layer["row_index"] = int(m_row.group(1))
            continue

        m_desc = re.match(r"^-\s*\*\*描述\*\*\s*:\s*(.*)$", stripped)
        if m_desc:
            curr_layer["description"] = m_desc.group(1).strip()
            continue

        m_notes = re.match(r"^-\s*\*\*备注\*\*\s*:\s*(.*)$", stripped)
        if m_notes:
            curr_layer["notes"] = m_notes.group(1).strip()
            continue

        m_thumb = re.match(r"^-\s*\*\*缩略图\*\*\s*:\s*`?([^`]+)`?", stripped)
        if m_thumb:
            curr_layer["thumbnail"] = m_thumb.group(1).strip()
            continue

    if curr_layer:
        if url_lines:
            curr_layer["url"] = "\n".join(url_lines).strip()
        layers.append(curr_layer)

    return layers


def get_raw_layers():
    """优先从 resources/layers.md 解耦文件中解析加载所有底图，降级支持 data/layers.json"""
    if os.path.exists(LAYERS_MD_PATH):
        try:
            layers = parse_layers_md(LAYERS_MD_PATH)
            if layers:
                return layers
        except Exception as e:
            print(f"Error parsing {LAYERS_MD_PATH}: {e}")
    if os.path.exists(LAYERS_JSON_PATH):
        try:
            with open(LAYERS_JSON_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []


def init_db():
    """初始化 SQLite 统计数据库（无 IP 隐私合规架构，从真实零统计起步）"""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    # 1. 检测旧 site_visits 结构是否包含 ip/user_agent 列，若存在则彻底 DROP 重建清除明文 PII
    cur.execute("PRAGMA table_info(site_visits)")
    columns = [row[1] for row in cur.fetchall()]
    if "ip" in columns or "user_agent" in columns:
        cur.execute("DROP TABLE IF EXISTS site_visits")

    # 2. 访问记录表 (PV / UV)，仅存储匿名哈希与日期
    cur.execute("""
        CREATE TABLE IF NOT EXISTS site_visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            visitor_hash TEXT NOT NULL,
            visit_date DATE DEFAULT (DATE('now','localtime'))
        )
    """)
    
    # 3. 新增 layer_likes 表（一人一票点赞防刷约束）
    cur.execute("""
        CREATE TABLE IF NOT EXISTS layer_likes (
            visitor_hash TEXT NOT NULL,
            layer_id TEXT NOT NULL,
            created_at DATE DEFAULT (DATE('now','localtime')),
            PRIMARY KEY(visitor_hash, layer_id)
        )
    """)
    cur.execute("CREATE INDEX IF NOT EXISTS idx_layer_likes_layer_id ON layer_likes(layer_id)")

    # 4. 新增 layer_export_daily 表（单日重复导出防刷热度去重）
    cur.execute("""
        CREATE TABLE IF NOT EXISTS layer_export_daily (
            visitor_hash TEXT NOT NULL,
            layer_id TEXT NOT NULL,
            export_date DATE DEFAULT (DATE('now','localtime')),
            PRIMARY KEY(visitor_hash, layer_id, export_date)
        )
    """)

    # 5. 图层统计表 (点赞与导出/下载频次汇总)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS layer_stats (
            layer_id TEXT PRIMARY KEY,
            likes INTEGER DEFAULT 0,
            downloads INTEGER DEFAULT 0,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    conn.commit()
    conn.close()


def perform_db_backup():
    """使用 sqlite3 原生在线热备接口备份数据库，并自动滚动清理保留最近 15 天"""
    if not os.path.exists(DB_PATH):
        return
    try:
        os.makedirs(BACKUP_DIR, exist_ok=True)
        today_str = datetime.datetime.now().strftime("%Y-%m-%d")
        backup_filename = f"stats_{today_str}.db"
        backup_path = os.path.join(BACKUP_DIR, backup_filename)

        # 1. 当日若未备份，执行原子热备（即使有并发写入也不会损坏数据）
        if not os.path.exists(backup_path):
            src = sqlite3.connect(DB_PATH)
            dst = sqlite3.connect(backup_path)
            src.backup(dst)
            dst.close()
            src.close()
            print(f"[DB Backup] 今日数据库自动备份完成: {backup_filename}")

        # 2. 自动滚动清理超过 15 天的旧快照
        cutoff = datetime.datetime.now() - datetime.timedelta(days=BACKUP_RETENTION_DAYS)
        for fname in os.listdir(BACKUP_DIR):
            if fname.startswith("stats_") and fname.endswith(".db"):
                try:
                    date_part = fname.replace("stats_", "").replace(".db", "")
                    f_date = datetime.datetime.strptime(date_part, "%Y-%m-%d")
                    if f_date < cutoff:
                        os.remove(os.path.join(BACKUP_DIR, fname))
                        print(f"[DB Backup] 自动清理超过 {BACKUP_RETENTION_DAYS} 天的旧备份: {fname}")
                except Exception:
                    pass
    except Exception as e:
        print(f"[DB Backup Error] 备份或清理异常: {e}")


def start_backup_scheduler():
    """启动轻量后台守护线程：服务启动时检查并执行备份，随后每小时巡检一次跨天自动备份"""
    def _worker():
        while True:
            perform_db_backup()
            time.sleep(3600)  # 每小时检测一次日期是否跨天

    t = threading.Thread(target=_worker, daemon=True)
    t.start()


def get_all_layers_with_stats():
    """获取所有底图并合并实时点赞、下载和热度得分（从 resources/layers.md 动态读取，排除纯插件类）"""
    layers = get_raw_layers()
    if not layers:
        return []

    # 暂时排除纯插件类，只展示可直接在线加载（含标准网络协议）的底图
    layers = [l for l in layers if l.get("format") != "插件类" and l.get("url", "").strip().startswith("http")]
        
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("SELECT layer_id, likes, downloads FROM layer_stats")
    stats_map = {row[0]: {"likes": row[1], "downloads": row[2]} for row in cur.fetchall()}
    conn.close()
    
    for l in layers:
        lid = l["id"]
        st = stats_map.get(lid, {"likes": 0, "downloads": 0})
        l["likes"] = st["likes"]
        l["downloads"] = st["downloads"]
        # 热度综合分算法: 点赞*2 + 下载*3
        l["heat"] = l["likes"] * 2 + l["downloads"] * 3
        
    return layers


def _py_sq(s: str) -> str:
    """转义为 QGIS 脚本中的单引号字符串字面量：先处理反斜杠防逃逸，再转义单引号"""
    return s.replace("\\", "\\\\").replace("'", "\\'")


def generate_qgis_script(selected_layers, add_to_canvas=False):
    """
    生成在 QGIS Python Console 中一键运行的专业导入脚本。
    严格精准区分 XYZ Tiles、WMS/WMTS 与 VEC (Vector Tiles) 矢量切片三大协议。
    包含 OpenQGIS 团队维护信息、图源核验基准日期及图层元数据说明。
    """
    check_time = get_check_time()
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    script_lines = [
        "# -*- coding: utf-8 -*-",
        "# ====================================================================",
        "# 【OpenQGIS】在线底图多协议自动化注册脚本",
        f"# 项目维护: OpenQGIS 团队 (https://github.com/OpenQGIS/maps)",
        f"# 图源核验基准日期: {check_time}",
        f"# 脚本导出时间: {timestamp}",
        f"# 本次选定底图: 共 {len(selected_layers)} 款",
        "# 协议覆盖: XYZ Tiles 标准切片、WMS/WMTS 空间数据服务、VEC / VEC-A 矢量切片 (Vector Tiles)",
        "# 兼容特性: 深度兼容 QGIS 4.x (现代数据连接架构) 与 QGIS 3.x 全版本",
        "# 使用方法:",
        "# 1. 在 QGIS 菜单栏快捷键 Ctrl+Alt+P 打开 Python 控制台",
        "# 2. 将本脚本全部代码粘贴到控制台命令行并回车执行",
        "# 3. 底图将自动注册到左侧【浏览器】对应层级下，永久可用！",
        "# ====================================================================",
        "",
        "import urllib.parse",
        "import urllib.request",
        "import json",
        "import ssl",
        "from qgis.core import QgsSettings, QgsRasterLayer, QgsProject",
        "try:",
        "    from qgis.core import QgsVectorTileLayer, QgsMapBoxGlStyleConverter",
        "except ImportError:",
        "    QgsVectorTileLayer = None",
        "    QgsMapBoxGlStyleConverter = None",
        "from qgis.utils import iface",
        "",
        "settings = QgsSettings()",
        "xyz_count = 0",
        "wms_count = 0",
        "vec_count = 0",
        "loaded_layers = 0",
        "print('=== 【OpenQGIS】开始批量导入底图配置 ===')",
        f"print('  [i] 图源核验基准: {check_time}')",
        ""
    ]


    for layer in selected_layers:
        name = _py_sq(layer.get("name", "未命名图层"))
        fmt = layer.get("format", "XYZ Tiles").strip()
        raw_url = layer.get("url", "").strip()
        desc = layer.get("description", "").strip()
        cats = " / ".join(layer.get("categories", [])) if layer.get("categories") else ""
        has_boundary = layer.get("has_boundary_issue", False)
        has_drift = layer.get("has_coordinate_drift", False)
        needs_vpn = layer.get("needs_vpn", False)

        if not raw_url:
            continue

        # -------------------------------------------------------------
        # 1. 矢量切片 VEC / VEC-A (Vector Tiles / MVT / PBF / ArcGIS)
        # -------------------------------------------------------------
        if fmt in ("VEC", "VEC-A"):
            lines = [u.strip() for u in raw_url.split("\n") if u.strip()]
            is_arcgis_vec = fmt == "VEC-A" or "arcgis.com" in raw_url or "VectorTileServer" in raw_url or "root.json" in raw_url

            script_lines.append(f"# >>> [{'VEC-A 矢量切片 - ArcGIS服务' if is_arcgis_vec else 'VEC 矢量切片'}] {name}")
            if cats:
                script_lines.append(f"#     分类: {cats}")
            if desc:
                script_lines.append(f"#     说明: {desc}")
            if has_boundary:
                script_lines.append("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考")
            if has_drift:
                script_lines.append("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准")
            if needs_vpn:
                script_lines.append("#     🌐 标注: 境外服务器源，加载需网络代理")

            script_lines.append("try:")
            script_lines.append(f"    layer_name = '{name}'")
            if is_arcgis_vec:
                style_url = next((u for u in lines if "root.json" in u or "VectorTileServer" in u), lines[0] if lines else "")
                style_url = _py_sq(style_url)
                script_lines.append(f"    style_url = '{style_url}'")
                script_lines.append("    zmin = 0")
                script_lines.append("    zmax = 14")
                script_lines.append("    # Modern QGIS 3.28+ / 4.x (ArcGIS 专用矢量切片服务架构)")
                script_lines.append("    base_key = f'connections/vector-tile/items/{layer_name}'")
                script_lines.append("    settings.setValue(f'{base_key}/service-type', 'arcgis')")
                script_lines.append("    settings.setValue(f'{base_key}/type', 'xyz')")
                script_lines.append("    settings.setValue(f'{base_key}/url', style_url)")
                script_lines.append("    settings.setValue(f'{base_key}/styleUrl', style_url)")
                script_lines.append("    settings.setValue(f'{base_key}/zmin', zmin)")
                script_lines.append("    settings.setValue(f'{base_key}/zmax', zmax)")
                script_lines.append("    settings.setValue(f'{base_key}/http-header/referer', '')")
                script_lines.append("    # Legacy QGIS 3.x compatibility keys")
                script_lines.append("    for legacy_prefix in [f'connections-vector-tiles/{layer_name}', f'qgis/connections-vectortiles/{layer_name}']:")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/service-type', 'arcgis')")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/type', 'xyz')")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/url', style_url)")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/styleUrl', style_url)")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/zmin', zmin)")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/zmax', zmax)")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/http-header/referer', '')")
            else:
                service_url = _py_sq(lines[0]) if lines else ""
                style_url = _py_sq(lines[1]) if len(lines) > 1 else ""
                script_lines.append(f"    tile_url = '{service_url}'")
                script_lines.append(f"    style_url = '{style_url}'")
                script_lines.append("    settings.setValue(f'connections/vector-tile/items/{layer_name}/url', tile_url)")
                if style_url:
                    script_lines.append("    settings.setValue(f'connections/vector-tile/items/{layer_name}/styleUrl', style_url)")
                script_lines.append("    settings.setValue(f'connections/vector-tile/items/{layer_name}/zmin', 0)")
                script_lines.append("    settings.setValue(f'connections/vector-tile/items/{layer_name}/zmax', 14)")
                script_lines.append("    for legacy_prefix in [f'connections-vector-tiles/{layer_name}', f'qgis/connections-vectortiles/{layer_name}']:")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/url', tile_url)")
                if style_url:
                    script_lines.append("        settings.setValue(f'{legacy_prefix}/styleUrl', style_url)")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/zmin', 0)")
                script_lines.append("        settings.setValue(f'{legacy_prefix}/zmax', 14)")

            script_lines.append("    vec_count += 1")
            if add_to_canvas:
                script_lines.append("    # 实例化 QgsVectorTileLayer 载入当前画布")
                script_lines.append("    if QgsVectorTileLayer is not None:")
                if is_arcgis_vec:
                    script_lines.append("        vec_uri = f'serviceType=arcgis&type=xyz&url={style_url}&zmax=14&zmin=0&http-header:referer='")
                else:
                    script_lines.append("        vec_uri = f'type=xyz&url={tile_url}&zmin=0&zmax=14'")
                    if style_url:
                        script_lines.append("        if style_url: vec_uri = f'styleUrl={style_url}&' + vec_uri")
                script_lines.append("        vl = QgsVectorTileLayer(vec_uri, layer_name)")
                script_lines.append("        if vl.isValid():")
                if is_arcgis_vec:
                    script_lines.append("            try:")
                    script_lines.append("                vl.loadDefaultStyle()")
                    script_lines.append("            except Exception:")
                    script_lines.append("                pass")
                else:
                    script_lines.append("            if style_url and QgsMapBoxGlStyleConverter is not None and (not hasattr(vl.renderer(), 'styles') or not vl.renderer().styles()):")
                    script_lines.append("                try:")
                    script_lines.append("                    ctx = ssl.create_default_context()")
                    script_lines.append("                    ctx.check_hostname = False")
                    script_lines.append("                    ctx.verify_mode = ssl.CERT_NONE")
                    script_lines.append("                    req = urllib.request.Request(style_url, headers={'User-Agent': 'Mozilla/5.0 QGIS/3.x'})")
                    script_lines.append("                    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:")
                    script_lines.append("                        s_data = json.loads(resp.read().decode('utf-8'))")
                    script_lines.append("                        conv = QgsMapBoxGlStyleConverter()")
                    script_lines.append("                        if conv.convert(s_data) == QgsMapBoxGlStyleConverter.Success:")
                    script_lines.append("                            vl.setRenderer(conv.renderer())")
                    script_lines.append("                            if conv.labeling(): vl.setLabeling(conv.labeling())")
                    script_lines.append("                except Exception:")
                    script_lines.append("                    pass")
                script_lines.append("            QgsProject.instance().addMapLayer(vl)")
                script_lines.append("            loaded_layers += 1")
                script_lines.append("            print(f'  [√] 成功添加矢量切片至画布: {layer_name}')")
                script_lines.append("        else:")
                script_lines.append("            print(f'  [+] 已注册 Vector Tiles 连接（画布初始化受限）: {layer_name}')")
            else:
                script_lines.append("    print(f'  [√] 成功注册 Vector Tiles 矢量切片: {layer_name}')")
            script_lines.append("except Exception as err:")
            script_lines.append("    print(f'  [×] 注册矢量切片失败: {layer_name}, 错误: {err}')")
            script_lines.append("")

        # -------------------------------------------------------------
        # 2. OGC 标准空间服务 WMS / WMTS
        # -------------------------------------------------------------
        elif fmt == "WMS/WMTS":
            clean_url = _py_sq(raw_url.split("\n")[0].strip())
            script_lines.append(f"# >>> [WMS/WMTS 空间服务] {name}")
            if cats:
                script_lines.append(f"#     分类: {cats}")
            if desc:
                script_lines.append(f"#     说明: {desc}")
            if has_boundary:
                script_lines.append("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考")
            if has_drift:
                script_lines.append("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准")
            if needs_vpn:
                script_lines.append("#     🌐 标注: 境外服务器源，加载需网络代理")

            script_lines.append("try:")
            script_lines.append(f"    layer_name = '{name}'")
            script_lines.append(f"    wms_url = '{clean_url}'")
            script_lines.append("    # 写入 QGIS 浏览器 WMS/WMTS 专属连接分支 (QGIS 4 & QGIS 3 双写兼容)")
            script_lines.append("    # 1) QGIS 4 现代统一 OWS 架构路径")
            script_lines.append("    settings.setValue(f'connections/ows/items/wms/connections/items/{layer_name}/url', wms_url)")
            script_lines.append("    settings.setValue(f'connections/ows/items/wms/connections/items/{layer_name}/dpi-mode', 7)")
            script_lines.append("    settings.setValue(f'connections/ows/items/wms/connections/items/{layer_name}/feature-count', 10)")
            script_lines.append("    # 2) QGIS 3 兼容路径")
            script_lines.append("    settings.setValue(f'qgis/connections-wms/{layer_name}/url', wms_url)")
            script_lines.append("    wms_count += 1")
            if add_to_canvas:
                script_lines.append("    # 实例化 QgsRasterLayer (WMS 驱动) 载入画布")
                script_lines.append("    safe_wms = urllib.parse.quote(wms_url, safe=':/?=&')")
                script_lines.append("    if 'capabilities' in wms_url.lower():")
                script_lines.append("        wms_uri = f'crs=EPSG:3857&format=image/png&url={safe_wms}'")
                script_lines.append("    else:")
                script_lines.append("        wms_uri = f'url={safe_wms}'")
                script_lines.append("    wms_layer = QgsRasterLayer(wms_uri, layer_name, 'wms')")
                script_lines.append("    if wms_layer.isValid():")
                script_lines.append("        QgsProject.instance().addMapLayer(wms_layer)")
                script_lines.append("        loaded_layers += 1")
                script_lines.append("        print(f'  [√] 成功添加 WMS/WMTS 图层至画布: {layer_name}')")
                script_lines.append("    else:")
                script_lines.append("        print(f'  [+] 已注册 WMS/WMTS 连接（请从左侧浏览器面板直接展开加载）: {layer_name}')")
            else:
                script_lines.append("    print(f'  [√] 成功注册 WMS/WMTS 连接: {layer_name}')")
            script_lines.append("except Exception as err:")
            script_lines.append("    print(f'  [×] 注册 WMS/WMTS 失败: {layer_name}, 错误: {err}')")
            script_lines.append("")

        # -------------------------------------------------------------
        # 3. 标准栅格瓦片 XYZ Tiles
        # -------------------------------------------------------------
        else:
            clean_url = _py_sq(raw_url.split("\n")[0].strip())
            zmin = layer.get("zmin", 0) if isinstance(layer.get("zmin"), int) else 0
            zmax = layer.get("zmax", 19) if isinstance(layer.get("zmax"), int) else 19
            interp = _py_sq(layer.get("interpretation", "default"))
            script_lines.append(f"# >>> [XYZ Tiles 标准瓦片] {name}")
            if cats:
                script_lines.append(f"#     分类: {cats}")
            if desc:
                script_lines.append(f"#     说明: {desc}")
            if layer.get("interpretation"):
                script_lines.append(f"#     ⚙️ 高程解码: interpretation={layer['interpretation']}")
            if has_boundary:
                script_lines.append("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考")
            if has_drift:
                script_lines.append("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准")
            if needs_vpn:
                script_lines.append("#     🌐 标注: 境外服务器源，加载需网络代理")

            script_lines.append("try:")
            script_lines.append(f"    layer_name = '{name}'")
            script_lines.append(f"    layer_url = '{clean_url}'")
            script_lines.append(f"    zmin = {zmin}")
            script_lines.append(f"    zmax = {zmax}")
            script_lines.append(f"    interp = '{interp}'")
            script_lines.append("    # 写入 QGIS 浏览器 XYZ Tiles 连接分支 (QGIS 4 & QGIS 3 双写兼容)")
            script_lines.append("    # 1) QGIS 4 现代统一连接路径")
            script_lines.append("    settings.setValue(f'connections/xyz/items/{layer_name}/url', layer_url)")
            script_lines.append("    settings.setValue(f'connections/xyz/items/{layer_name}/zmin', zmin)")
            script_lines.append("    settings.setValue(f'connections/xyz/items/{layer_name}/zmax', zmax)")
            script_lines.append("    settings.setValue(f'connections/xyz/items/{layer_name}/interpretation', interp)")
            script_lines.append("    settings.setValue(f'connections/xyz/items/{layer_name}/http-header/referer', '')")
            script_lines.append("    # 2) QGIS 3 兼容路径")
            script_lines.append("    settings.setValue(f'qgis/connections-xyz/{layer_name}/url', layer_url)")
            script_lines.append("    settings.setValue(f'qgis/connections-xyz/{layer_name}/zmin', zmin)")
            script_lines.append("    settings.setValue(f'qgis/connections-xyz/{layer_name}/zmax', zmax)")
            script_lines.append("    xyz_count += 1")
            if add_to_canvas:
                script_lines.append("    # 载入项目画布 (XYZ 栅格驱动)")
                script_lines.append("    safe_xyz = urllib.parse.quote(layer_url, safe=':/?=&{}')")
                script_lines.append("    if interp != 'default':")
                script_lines.append("        raster_uri = f'interpretation={interp}&type=xyz&url={safe_xyz}&zmax={zmax}&zmin={zmin}&http-header:referer='")
                script_lines.append("    else:")
                script_lines.append("        raster_uri = f'type=xyz&url={safe_xyz}&zmax={zmax}&zmin={zmin}&http-header:referer='")
                script_lines.append("    map_layer = QgsRasterLayer(raster_uri, layer_name, 'wms')")
                script_lines.append("    if map_layer.isValid():")
                script_lines.append("        QgsProject.instance().addMapLayer(map_layer)")
                script_lines.append("        loaded_layers += 1")
                script_lines.append("        print(f'  [√] 成功添加 XYZ 切片至画布: {layer_name}')")
                script_lines.append("    else:")
                script_lines.append("        print(f'  [+] 已注册 XYZ 连接（画布需翻墙或网络受限）: {layer_name}')")
            else:
                script_lines.append("    print(f'  [√] 成功注册 XYZ 连接: {layer_name}')")
            script_lines.append("except Exception as err:")
            script_lines.append("    print(f'  [×] 注册 XYZ 失败: {layer_name}, 错误: {err}')")
            script_lines.append("")

    # 持久化与刷新 QGIS 浏览器面板目录树
    script_lines.append("# 同步持久化设置并刷新 QGIS 浏览器面板目录树")
    script_lines.append("settings.sync()")
    script_lines.append("try:")
    script_lines.append("    if hasattr(iface, 'browserModel') and iface.browserModel():")
    script_lines.append("        iface.browserModel().reload()")
    script_lines.append("        iface.browserModel().refresh()")
    script_lines.append("except Exception:")
    script_lines.append("    pass")
    script_lines.append("")
    script_lines.append("print('=' * 60)")
    script_lines.append("print('【OpenQGIS】底图自动化导入完成！')")
    script_lines.append(f"print('  - 图源核验基准: {check_time}')")
    script_lines.append("print(f'  - XYZ Tiles 注册: {xyz_count} 项')")
    script_lines.append("print(f'  - WMS/WMTS 注册: {wms_count} 项')")
    script_lines.append("print(f'  - Vector Tiles 矢量切片注册: {vec_count} 项')")
    script_lines.append("print(f'  - 直接加载到画布: {loaded_layers} 项')")
    script_lines.append("print('请在 QGIS 左侧【浏览器】面板对应分类中直接查看与调用！')")
    script_lines.append("print('=' * 60)")

    return "\n".join(script_lines)


def get_check_time():
    """读取核验时间记录 (优先读取 CHECK_TIME.md)"""
    for p in [os.path.join(BASE_DIR, "CHECK_TIME.md"), os.path.join(DATA_DIR, "CHECK_TIME.md")]:
        if os.path.exists(p):
            try:
                with open(p, "r", encoding="utf-8") as mf:
                    for mline in mf:
                        m = re.search(r"(\d{4}[^\d\r\n]{1,2}\d{1,2}[^\d\r\n]{1,2}\d{1,2}[日号]?)", mline)
                        if m:
                            return m.group(1).strip()
            except Exception:
                pass
    return "2026年5月26日"



class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


class RequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def log_message(self, format, *args):
        # 简化日志，减少控制台噪音
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        # 基础安全响应头（全站生效）；CSP 因内联 onclick 保留 'unsafe-inline'，仍限定脚本/连接来源
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        # 不能用 no-referrer：OSM 瓦片政策要求网页端携带 Referer 标识站点，
        # 否则可能被 tile.openstreetmap.org 以"App is not following the tile usage policy"403 拦截；
        # strict-origin-when-cross-origin 跨域只发送源（不含路径与查询串），隐私代价极小
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self' https://unpkg.com 'unsafe-inline'; "
            "style-src 'self' 'unsafe-inline' https://unpkg.com; "
            "img-src 'self' https: data: blob:; "
            "connect-src 'self' https:; "
            "worker-src blob:; "
            "font-src 'self' data:; "
            "object-src 'none'; "
            "base-uri 'self'; "
            "frame-ancestors 'none'"
        )
        super().end_headers()

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/layers":
            layers = get_all_layers_with_stats()
            self.send_json({"code": 0, "data": layers, "total": len(layers)})
            return

        elif path == "/api/stats":
            conn = sqlite3.connect(DB_PATH)
            cur = conn.cursor()
            cur.execute("SELECT COUNT(*), COUNT(DISTINCT visitor_hash) FROM site_visits")
            row = cur.fetchone()
            pv = row[0] if row else 0
            uv = row[1] if row else 0
            
            cur.execute("SELECT SUM(likes), SUM(downloads) FROM layer_stats")
            sum_likes, sum_downloads = cur.fetchone()
            sum_likes = sum_likes or 0
            sum_downloads = sum_downloads or 0
            
            cur.execute("""
                SELECT layer_id, likes, downloads, (likes*2 + downloads*3) as heat 
                FROM layer_stats ORDER BY heat DESC LIMIT 5
            """)
            top_ids = cur.fetchall()
            conn.close()

            check_time_str = get_check_time()

            self.send_json({
                "code": 0,
                "data": {
                    "pv": pv,
                    "uv": uv,
                    "total_likes": sum_likes,
                    "total_downloads": sum_downloads,
                    "top_layers": top_ids,
                    "check_time": check_time_str
                }
            })
            return

        elif path == "/api/geojsons":
            # 返回可用的 GeoJSON 标注列表
            geojson_files = []
            if os.path.exists(GEOJSON_DIR):
                for fn in os.listdir(GEOJSON_DIR):
                    if fn.endswith(".geojson") or fn.endswith(".json"):
                        geojson_files.append({
                            "filename": fn,
                            "url": f"/geojson/{fn}",
                            "name": os.path.splitext(fn)[0]
                        })
            self.send_json({"code": 0, "data": geojson_files})
            return

        elif path == "/api/wms-capabilities":
            # 返回本地持久缓存的 WMS/WMTS 子图层能力清单
            wms_cap_path = os.path.join(DATA_DIR, "wms_capabilities.json")
            if os.path.exists(wms_cap_path):
                try:
                    with open(wms_cap_path, "r", encoding="utf-8") as f:
                        caps = json.load(f)
                    self.send_json({"code": 0, "data": caps})
                    return
                except Exception as e:
                    self.send_json({"code": 1, "message": str(e)}, 500)
                    return
            self.send_json({"code": 0, "data": {}})
            return

        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        # 限流前置：在读取请求体之前判断，超限请求不消耗任何 body 读取资源
        endpoint_rate_limits = {
            "/api/visit": RATE_LIMIT_VISIT,
            "/api/like": RATE_LIMIT_LIKE,
            "/api/export": RATE_LIMIT_EXPORT,
        }
        rate_limit = endpoint_rate_limits.get(path)
        if rate_limit is not None and not rate_limiter.is_allowed(path, self.client_address[0], rate_limit):
            self.send_json({"code": 429, "message": "操作过于频繁，请稍后再试"}, status=429)
            return

        # 请求体大小上限：超限直接拒绝且不读取，防内存耗尽 DoS
        try:
            content_length = int(self.headers.get("Content-Length", 0))
        except (TypeError, ValueError):
            self.send_json({"code": 400, "message": "Invalid Content-Length"}, status=400)
            return
        if content_length < 0 or content_length > MAX_BODY_BYTES:
            self.send_json({"code": 413, "message": "Request body too large"}, status=413)
            return
        post_data = self.rfile.read(min(content_length, MAX_BODY_BYTES)).decode("utf-8", errors="replace") if content_length > 0 else "{}"
        try:
            body = json.loads(post_data)
        except Exception:
            body = {}

        if path == "/api/visit":
            visitor_id = body.get("visitor_id", "anonymous")
            v_hash = hash_visitor_id(visitor_id)

            conn = sqlite3.connect(DB_PATH)
            cur = conn.cursor()
            cur.execute(
                "INSERT INTO site_visits (visitor_hash) VALUES (?)",
                (v_hash,)
            )
            conn.commit()
            conn.close()
            self.send_json({"code": 0, "message": "Visit logged"})
            return

        elif path == "/api/like":
            layer_id = body.get("layer_id")
            if not layer_id or not isinstance(layer_id, str):
                self.send_json({"code": 1, "message": "Missing layer_id"}, status=400)
                return

            # 仅接受真实存在的图层 id，防止编造 id 刷 layer_stats 计数
            valid_layer_ids = {l["id"] for l in get_all_layers_with_stats()}
            if layer_id not in valid_layer_ids:
                self.send_json({"code": 1, "message": "Unknown layer_id"}, status=400)
                return

            # action: "like" 点赞 / "unlike" 取消点赞（客户端按当前显示状态显式声明意图，
            # 服务端幂等执行并返回最终状态，客户端以返回值为准同步，避免状态错乱）
            action = body.get("action", "like")
            if action not in ("like", "unlike"):
                action = "like"

            visitor_id = body.get("visitor_id", "anonymous")
            v_hash = hash_visitor_id(visitor_id)

            conn = sqlite3.connect(DB_PATH)
            cur = conn.cursor()

            if action == "unlike":
                # 取消点赞：删除一人一票记录，仅当真正删除时回减计数（MAX 防负数）
                cur.execute(
                    "DELETE FROM layer_likes WHERE visitor_hash = ? AND layer_id = ?",
                    (v_hash, layer_id)
                )
                removed = (cur.rowcount == 1)
                if removed:
                    cur.execute("""
                        UPDATE layer_stats SET likes = MAX(0, likes - 1), updated_at = CURRENT_TIMESTAMP
                        WHERE layer_id = ?
                    """, (layer_id,))
                liked = False
            else:
                # 点赞：利用主键 (visitor_hash, layer_id) 约束实现原子一人一票防刷
                cur.execute(
                    "INSERT OR IGNORE INTO layer_likes (visitor_hash, layer_id) VALUES (?, ?)",
                    (v_hash, layer_id)
                )
                newly_liked = (cur.rowcount == 1)
                if newly_liked:
                    cur.execute("""
                        INSERT INTO layer_stats (layer_id, likes, downloads)
                        VALUES (?, 1, 0)
                        ON CONFLICT(layer_id) DO UPDATE SET likes = likes + 1, updated_at = CURRENT_TIMESTAMP
                    """, (layer_id,))
                liked = True

            cur.execute("SELECT likes FROM layer_stats WHERE layer_id = ?", (layer_id,))
            res_row = cur.fetchone()
            current_likes = res_row[0] if res_row else (1 if liked else 0)

            conn.commit()
            conn.close()

            self.send_json({
                "code": 0,
                "data": {
                    "layer_id": layer_id,
                    "likes": current_likes,
                    "liked": liked
                }
            })
            return

        elif path == "/api/export":
            layer_ids = body.get("layer_ids", [])
            add_to_canvas = body.get("add_to_canvas", False)
            visitor_id = body.get("visitor_id", "anonymous")
            v_hash = hash_visitor_id(visitor_id)

            if not isinstance(layer_ids, list) or not layer_ids:
                self.send_json({"code": 1, "message": "No layers selected"}, status=400)
                return

            all_layers = get_all_layers_with_stats()
            id_map = {l["id"]: l for l in all_layers}
            # 只接受真实图层 id 并截断数量上限：防编造 id 刷计数、防超大数组膨胀数据库
            layer_ids = [lid for lid in layer_ids if lid in id_map][:MAX_EXPORT_LAYERS]
            selected_layers = [id_map[lid] for lid in layer_ids]
            if not selected_layers:
                self.send_json({"code": 1, "message": "No valid layers selected"}, status=400)
                return

            conn = sqlite3.connect(DB_PATH)
            cur = conn.cursor()
            for lid in layer_ids:
                # 记录当日导出，同一访客当天内重复导出同一图层只计 1 次下载热度
                cur.execute("""
                    INSERT OR IGNORE INTO layer_export_daily (visitor_hash, layer_id, export_date)
                    VALUES (?, ?, DATE('now','localtime'))
                """, (v_hash, lid))
                if cur.rowcount == 1:
                    cur.execute("""
                        INSERT INTO layer_stats (layer_id, likes, downloads) 
                        VALUES (?, 0, 1)
                        ON CONFLICT(layer_id) DO UPDATE SET downloads = downloads + 1, updated_at = CURRENT_TIMESTAMP
                    """, (lid,))
            conn.commit()

            # 查询选中图层的实时数据库统计（点赞、下载与综合热度），用于前端即时同步
            cur.execute("SELECT layer_id, likes, downloads FROM layer_stats WHERE layer_id IN ({})".format(
                ','.join('?' for _ in layer_ids)
            ), layer_ids)
            stats_rows = cur.fetchall()
            conn.close()

            layer_stats = {
                row[0]: {
                    "likes": row[1],
                    "downloads": row[2],
                    "heat": row[1] * 2 + row[2] * 3
                }
                for row in stats_rows
            }

            script = generate_qgis_script(selected_layers, add_to_canvas=add_to_canvas)

            self.send_json({
                "code": 0,
                "data": {
                    "count": len(selected_layers),
                    "script": script,
                    "filename": f"qgis_basemaps_import_{len(selected_layers)}.py",
                    "layer_stats": layer_stats
                }
            })
            return

        self.send_json({"code": 404, "message": "Endpoint not found"}, status=404)


def run_server(port=8080):
    init_db()
    start_backup_scheduler()
    server_address = ("127.0.0.1", port)
    httpd = ThreadedHTTPServer(server_address, RequestHandler)
    print(f"=== QGIS Basemap Hub 服务已就绪 ===")
    print(f"访问地址: http://127.0.0.1:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务已停止")
        httpd.server_close()


if __name__ == "__main__":
    port = 8080
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    run_server(port)
