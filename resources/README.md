# QGIS 在线底图独立资源库管理指南

本项目已将底图资源链接与元数据从底层硬编码及旧 JSON 中**彻底脱离解耦**，集中存放在当前目录的 layers.md 文件中。

## 目录文件说明
- [layers.md](layers.md): **核心资源数据源**。网站启动或请求时直接动态解析该 Markdown 文件。任何修改（URL变更、标签调整、添加新图层）均会实时在网站中生效。

## 格式与标签规范 (Markdown Schema)

每个底图在 layers.md 中为一个独立的 \### [图层ID] 图层名称\ 块，格式如下：

\\markdown
### [layer_88] 我的自定义高清卫星影像
- **格式**: \XYZ Tiles- **分类**: 影像图, 电子地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 88
- **服务链接**:
\\\	ext
https://my-map-server.example.com/tiles/{z}/{x}/{y}.png
\\\
- **描述**: 这是一个高分辨率卫星底图
- **备注**: 无需账号即可访问
- **缩略图**: /thumbnails/thumb_default.png
\
### 1. 协议格式 (\**格式**\)
- `XYZ Tiles`: 标准栅格切片（Web Mercator 或 WGS84 经纬度），URL 包含 `{z}/{x}/{y}`。
- `WMS/WMTS`: OGC 空间地理信息服务，URL 包含 `WMTSCapabilities.xml` 或 `GetCapabilities`。
- `VEC` / `VEC-A`: 矢量切片（Vector Tiles / MVT / PBF / ArcGIS VectorTileServer），在代码块中首行为切片服务 URL，次行为可选的 Mapbox GL Style JSON 链接。其中 VEC 为标准通用切片，VEC-A 为 ArcGIS 专用矢量切片服务，两者均归属于矢量切片大类。
- `插件类`: 需配合本地 QGIS 插件使用的工具源。

### 2. 分类标签 (\**分类**\)
可配置一个或多个（英文逗号隔开）：
- \电子地图\、\地形图\、\影像图\、\标注图\、\铁路地图\、\土地利用图\、\海床图
### 3. 合规与状态标签 (\**标签**\)
- **网络访问**: \国内直连\ 或 \需VPN- **国界线合规**: \无边界问题\ 或 \边界问题\（涉密/未审定/阿克赛钦/藏南/南海诸岛/黑瞎子岛/黄岩岛）
- **坐标系统**: \无坐标偏移\（WGS84 / CGCS2000）或 \火星坐标偏移\（GCJ-02）
