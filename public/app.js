const ICONS = {
  cart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  sun: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  heartOutline: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  heartFilled: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  copy: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="0" ry="0"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  warning: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  crosshair: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>`,
  flame: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  compass: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  image: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="0" ry="0"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`
};

/* ==========================================================================
   QGIS Basemap Hub - Application Logic
   Live Online Base Map Preview (China Bounding Box) + Full Themes
   ========================================================================== */

const state = {
  layers: [],
  cart: new Set(JSON.parse(localStorage.getItem("qgis_cart") || "[]")),
  liked: new Set(JSON.parse(localStorage.getItem("qgis_liked") || "[]")),
  theme: localStorage.getItem("qgis_theme") || "light",
  activeCategory: "全部",
  searchQuery: "",
  filterDirectOnly: false,
  filterVpnOnly: false,
  filterNoBoundary: false,
  filterBoundaryOnly: false,
  filterNoDrift: false,
  filterDriftOnly: false,
  filterXyzOnly: false,
  currentSort: "heat",
  viewMode: "grid",
  stats: null,
  activePreviewLayer: null,
  activeSublayerId: null,
  previewMap: null,
  locateControl: null,
  deviceLocationGroup: null,
  activeTileLayer: null,
  boundaryGeoJsonLayer: null,
  wmsCapabilities: {}
};

// --- 预设区域包围盒（与底图卡片缩略图取景范围精准 1:1 对应） ---
const BOUNDARY_ISSUES_GEOJSON = {
  "type": "FeatureCollection",
  "name": "China_Boundary_Issue_Zones_Sample",
  "features": [
    {"type":"Feature","properties":{"name":"阿克赛钦关注区 (Aksai Chin)","risk":"境外底图（如OSM、Google）常以此处边界未定或错划界线","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[77.177479301423062,35.587983505821477],[79.8,35.8],[80.5,35.2],[78.868318887451522,34.172487063389404],[77.177479301423062,35.587983505821477]]]}},
    {"type":"Feature","properties":{"name":"藏南关注区 (South Tibet)","risk":"境外底图多采用所谓非法的麦克马洪线，缺失我方实际控制与主权边界","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[91.243248059508417,27.990839586028468],[94.264266494178514,29.383067593790429],[96.125741267787831,29.383067593790429],[97.642067593790429,28.20801164294955],[97.186394081500666,27.655386319534291],[95.896934993531687,27.680593790426919],[93.977289133247098,26.866198576972842],[91.980081824062097,26.594733505821484],[91.243248059508417,27.990839586028468]]]}},
    {"type":"Feature","properties":{"name":"钓鱼岛及其附属岛屿关注区","risk":"境外底图常漏标或错误归属命名","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[123.0,25.5],[124.0,26.2],[124.5,25.8],[123.5,25.4],[123.0,25.5]]]}},
    {"type":"Feature","properties":{"name":"南海诸岛关注区 (South China Sea)","risk":"境外底图多漏绘断续线（九段线/十段线）及岛礁归属标注","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[108.0,18.0],[118.0,18.0],[118.0,4.0],[108.0,4.0],[108.0,18.0]]]}},
    {"type":"Feature","properties":{"name":"黑瞎子岛关注区 (Bolshoy Ussuriysky Island)","risk":"境外底图常漏标归属中方半岛或未按中俄勘界条约规范绘制","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[134.6,48.2],[135.1,48.2],[135.1,48.6],[134.6,48.6],[134.6,48.2]]]}},
    {"type":"Feature","properties":{"name":"黄岩岛关注区 (Huangyan Island / Scarborough Shoal)","risk":"境外底图常错误标注归属或缺失标准中文命名","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[117.6,15.0],[117.9,15.0],[117.9,15.3],[117.6,15.3],[117.6,15.0]]]}},
    {"type":"Feature","properties":{"name":"台湾及附属岛屿关注区","risk":"境外底图常错误使用不同颜色或列为独立实体标注","type":"boundary_dispute"},"geometry":{"type":"Polygon","coordinates":[[[119.747080530401021,21.378726067270392],[119.747080530401021,25.993632276843485],[122.384169793014237,25.993632276843485],[122.384169793014237,21.378726067270392],[119.747080530401021,21.378726067270392]]]}}
  ]
};

const PRESET_VIEWPORTS = {
  // 1. 成都绕城四环及主城区 (OSM标准及衍生系列、谷歌路网/卫星GCJ02等)
  CHENGDU_RING: {
    name: "成都绕城",
    bounds: [[30.480, 103.900], [30.820, 104.240]],
    padding: [15, 15]
  },
  // 2. 重庆主城区两江交汇渝中半岛 (腾讯系列)
  CHONGQING_URBAN: {
    name: "重庆两江",
    bounds: [[29.500, 106.480], [29.620, 106.630]],
    padding: [15, 15]
  },
  // 3. 成都大市域及近郊 (高德系列)
  CHENGDU_METRO: {
    name: "成都市域",
    bounds: [[30.080, 103.550], [31.120, 104.700]],
    padding: [15, 15]
  },
  // 4. 四川盆地/成渝地区 (Windy户外与冬季气象等)
  SICHUAN_BASIN: {
    name: "四川盆地",
    bounds: [[28.50, 102.50], [32.50, 109.20]],
    padding: [15, 15]
  },
  // 5. 龙门山脉山地地形等高线 (Open Topo Map)
  LONGMEN_MOUNTAIN: {
    name: "龙门山区",
    bounds: [[31.16, 103.88], [31.38, 104.14]],
    padding: [15, 15]
  },
  // 6. 秦巴山区冬季雪山地形 (OSMWinter)
  QINBA_WINTER: {
    name: "秦巴山区",
    bounds: [[31.75, 108.30], [32.12, 108.82]],
    padding: [15, 15]
  },
  // 7. 中国全图 (含南海诸岛完整版图，适度南移视野中心使中国全域在视口中完美居中)
  CHINA_MACRO: {
    name: "中国全图",
    bounds: [[4.0, 73.0], [53.5, 135.0]],
    padding: [20, 20],
    maxZoom: 5
  },
  // 8. 全球大洲/世界全图 (哨兵2全球、全球历史地图、世界大洋、世界自然地理等)
  GLOBAL_WORLD: {
    name: "全球视野",
    center: [20.0, 10.0],
    zoom: 2
  },
  // 9. 江浙沪核心区/长三角 (OSM土地利用专题)
  JIANGZHEHU_CORE: {
    name: "江浙沪",
    bounds: [[29.80, 119.20], [32.30, 122.30]],
    padding: [15, 15]
  }
};

const CHINA_BOUNDS = PRESET_VIEWPORTS.CHINA_MACRO.bounds;
const CHINA_CENTER = [32.0, 105.0];
const CHENGDU_RING_BOUNDS = PRESET_VIEWPORTS.CHENGDU_RING.bounds;

// 获取当前底图与卡片缩略图 1:1 一致的最佳初始视角
function getLayerPresetViewport(layer) {
  if (!layer) return PRESET_VIEWPORTS.CHINA_MACRO;
  const id = layer.id || "";
  const name = layer.name || "";

  // 1. 重庆两江主城 (腾讯系列)
  if (id === "layer_54" || id === "layer_55" || id === "layer_56" || name.includes("腾讯")) {
    return PRESET_VIEWPORTS.CHONGQING_URBAN;
  }

  // 2. 四川盆地 / 成渝地区 (Windy户外/冬季)
  if (id === "layer_33" || id === "layer_34" || name.includes("Windy")) {
    return PRESET_VIEWPORTS.SICHUAN_BASIN;
  }

  // 3. 龙门山等高线地形 (Open Topo Map)
  if (id === "layer_16" || name === "Open Topo Map") {
    return PRESET_VIEWPORTS.LONGMEN_MOUNTAIN;
  }

  // 4. 秦巴山区冬季运动 (OSMWinter)
  if (id === "layer_24" || name.includes("OSMWinter")) {
    return PRESET_VIEWPORTS.QINBA_WINTER;
  }

  // 5. 成都大市域 (高德系列)
  if (id === "layer_51" || id === "layer_52" || id === "layer_53" || id === "layer_49" || name.includes("高德")) {
    return PRESET_VIEWPORTS.CHENGDU_METRO;
  }

  // 5.5 OSM 土地利用专题图层 (以太湖/上海/杭州/南京长三角江浙沪核心区为中心)
  if (id === "layer_9" || name.includes("土地利用")) {
    return PRESET_VIEWPORTS.JIANGZHEHU_CORE;
  }

  // 6. 成都绕城四环精细视野 (OSM标准及各本地化版、OSM人道主义、OSM路网、谷歌路网与卫星混合)
  if (
    id === "layer_17" || id === "layer_18" || id === "layer_19" || id === "layer_20" ||
    id === "layer_21" || id === "layer_22" || id === "layer_23" || id === "layer_25" ||
    id === "layer_26" || id === "layer_57" || id === "layer_58" || id === "layer_60" ||
    id === "layer_11" ||
    name.includes("OpenStreetMap") || (name.includes("OSM") && !name.includes("Winter"))
  ) {
    return PRESET_VIEWPORTS.CHENGDU_RING;
  }

  // 7. 中国全图 (铁路全网 OpenRailwayMap 系列、水系图等)
  if (
    id === "layer_27" || id === "layer_28" || id === "layer_29" || id === "layer_30" ||
    id === "layer_31" || id === "layer_32" || id === "layer_10" || id === "layer_45" ||
    name.includes("Railway") || name.includes("铁路") || name.includes("Hydro") || name.includes("水图")
  ) {
    return PRESET_VIEWPORTS.CHINA_MACRO;
  }

  // 8. 全球宏观 (遥感、世界地形、世界海洋等)
  if (
    id === "layer_6" || id === "layer_8" || id === "layer_40" || id === "layer_41" ||
    id === "layer_42" || id === "layer_43" || id === "layer_44" || id === "layer_15" ||
    id === "layer_46" || id === "layer_47" || id === "layer_48" || id === "layer_59" ||
    id === "layer_36" || id === "layer_37" || id === "layer_38" || id === "layer_39" ||
    name.includes("World_") || name.includes("Sentinel") || name.includes("Wayback") ||
    name.includes("Ocean") || name.includes("NatGeo") || name.includes("Terrain") || name.includes("Physical")
  ) {
    return PRESET_VIEWPORTS.GLOBAL_WORLD;
  }

  // 若标记边界问题：默认宏观展示中国全图，以便完整审视国界争议/风险高亮区域
  if (layer.has_boundary_issue) {
    return PRESET_VIEWPORTS.CHINA_MACRO;
  }
  return PRESET_VIEWPORTS.CHINA_MACRO;
}

function applyLayerDefaultView(layer) {
  if (!state.previewMap || !layer) return;
  const vp = getLayerPresetViewport(layer);
  if (vp.bounds) {
    state.previewMap.invalidateSize();
    state.previewMap.fitBounds(vp.bounds, {
      padding: vp.padding || [20, 20],
      maxZoom: vp.maxZoom || 18
    });
  } else if (vp.center) {
    state.previewMap.invalidateSize();
    state.previewMap.setView(vp.center, vp.zoom || 2);
  }

}

function resetToChengduView() {
  if (state.previewMap) {
    state.previewMap.invalidateSize();
    state.previewMap.flyToBounds(CHENGDU_RING_BOUNDS, {
      padding: [20, 20],
      duration: 0.8
    });
  }
}

function resetToChinaView() {
  if (state.previewMap) {
    state.previewMap.invalidateSize();
    state.previewMap.flyToBounds(CHINA_BOUNDS, {
      padding: [20, 20],
      maxZoom: 5,
      duration: 0.8
    });
  }
}

function resetToWorldView() {
  if (state.previewMap) {
    state.previewMap.invalidateSize();
    state.previewMap.flyTo([20, 10], 2, {
      duration: 0.8
    });
  }
}

// 挂载至 window 确保 inline onclick 零延迟直调
window.resetToChengduView = resetToChengduView;
window.resetToChinaView = resetToChinaView;
window.resetToWorldView = resetToWorldView;

// --- WGS-84 转 GCJ-02 (火星坐标纠偏算法，确保在火星坐标底图上设备定位点与现实地理地物精准对齐) ---
function wgs84ToGcj02(lat, lon) {
  const a = 6378245.0;
  const ee = 0.00669342162296594323;

  function outOfChina(lat, lon) {
    if (lon < 72.004 || lon > 137.8347) return true;
    if (lat < 0.8293 || lat > 55.8271) return true;
    return false;
  }

  if (outOfChina(lat, lon)) {
    return [lat, lon];
  }

  function transformLat(x, y) {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
    return ret;
  }

  function transformLon(x, y) {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
    return ret;
  }

  let dLat = transformLat(lon - 105.0, lat - 35.0);
  let dLon = transformLon(lon - 105.0, lat - 35.0);
  const radLat = (lat / 180.0) * Math.PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
  dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
  return [lat + dLat, lon + dLon];
}

// --- GCJ-02 转 WGS-84 (火星坐标反算纠偏算法，确保搜索结果在标准坐标底图上精准对齐) ---
function gcj02ToWgs84(lat, lon) {
  const a = 6378245.0;
  const ee = 0.00669342162296594323;

  function outOfChina(lat, lon) {
    if (lon < 72.004 || lon > 137.8347) return true;
    if (lat < 0.8293 || lat > 55.8271) return true;
    return false;
  }

  if (outOfChina(lat, lon)) {
    return [lat, lon];
  }

  function transformLat(x, y) {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
    return ret;
  }

  function transformLon(x, y) {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
    return ret;
  }

  let dLat = transformLat(lon - 105.0, lat - 35.0);
  let dLon = transformLon(lon - 105.0, lat - 35.0);
  const radLat = (lat / 180.0) * Math.PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
  dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
  return [lat - dLat, lon - dLon];
}

// --- 快速定位到当前设备位置 ---
function locateDevicePosition() {
  if (!state.previewMap) return;

  if (!navigator.geolocation) {
    showToast("⚠️ 当前环境不支持地理位置定位功能");
    return;
  }

  const btn = document.querySelector(".leaflet-control-locate-btn");
  if (btn) {
    btn.classList.add("locating");
    btn.classList.remove("located");
  }

  showToast("📡 正在获取设备当前位置...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      if (btn) {
        btn.classList.remove("locating");
        btn.classList.add("located");
      }

      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      const rawLat = lat;
      const rawLng = lng;

      // 如果当前预览图层有火星坐标系 (GCJ-02) 偏移，进行纠偏转换使点位与底图道路建筑吻合
      const isGcj02 = !!(state.activePreviewLayer && state.activePreviewLayer.has_coordinate_drift);
      if (isGcj02) {
        [lat, lng] = wgs84ToGcj02(lat, lng);
      }

      // 定位图层组管理
      if (!state.deviceLocationGroup) {
        state.deviceLocationGroup = L.layerGroup().addTo(state.previewMap);
      }
      state.deviceLocationGroup.clearLayers();

      // 1. 精度半径圆
      if (accuracy && accuracy < 50000) {
        const circle = L.circle([lat, lng], {
          radius: Math.max(accuracy, 20),
          color: "#2563eb",
          weight: 1.5,
          opacity: 0.65,
          fillColor: "#3b82f6",
          fillOpacity: 0.12
        });
        state.deviceLocationGroup.addLayer(circle);
      }

      // 2. 高亮呼吸光晕脉冲定位点
      const pulseIcon = L.divIcon({
        className: "custom-location-div-icon",
        html: '<div class="device-location-marker"><div class="device-location-pulse"></div><div class="device-location-dot"></div></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([lat, lng], {
        icon: pulseIcon,
        title: "当前设备位置"
      });

      const coordText = isGcj02
        ? `GCJ-02: ${lng.toFixed(5)}, ${lat.toFixed(5)}<br><span style="color:var(--text-dim);font-size:0.7rem;">(原始WGS84: ${rawLng.toFixed(5)}, ${rawLat.toFixed(5)})</span>`
        : `WGS-84: ${lng.toFixed(5)}, ${lat.toFixed(5)}`;

      marker.bindPopup(`
        <div style="font-family: var(--font-sans); font-size: 0.8rem; line-height: 1.45; padding: 2px;">
          <strong style="color: #2563eb; display:flex; align-items:center; gap:4px; margin-bottom:4px;">
            📍 当前设备位置
          </strong>
          <div style="color: var(--text-main); font-family: var(--font-mono); font-size: 0.75rem;">
            ${coordText}
          </div>
          ${accuracy ? `<div style="color: var(--text-dim); font-size: 0.72rem; margin-top: 3px;">估算精度: ±${Math.round(accuracy)}米</div>` : ""}
        </div>
      `);

      state.deviceLocationGroup.addLayer(marker);

      // 平滑飞入并缩放至精细道路级 (15 级以上)
      const targetZoom = Math.max(state.previewMap.getZoom(), 15);
      state.previewMap.flyTo([lat, lng], targetZoom, { duration: 1 });

      showToast(`📍 已成功定位至设备位置${accuracy ? ` (±${Math.round(accuracy)}m)` : ""}`);
    },
    (err) => {
      if (btn) {
        btn.classList.remove("locating");
      }
      let errMsg = "获取设备位置失败";
      if (err.code === 1) {
        errMsg = "⚠️ 定位权限已拒绝：请在浏览器地址栏允许网站访问位置信息";
      } else if (err.code === 2) {
        errMsg = "⚠️ 无法获取位置信息：GPS/网络定位不可用";
      } else if (err.code === 3) {
        errMsg = "⚠️ 定位请求超时，请稍后重试";
      }
      showToast(errMsg);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 30000
    }
  );
}

// 初始化加减号下方的快速定位控件
function initLocateControl(map) {
  if (!map || state.locateControl) return;

  const locateControl = L.control({ position: "topleft" });
  locateControl.onAdd = function() {
    const div = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-locate");
    const btn = L.DomUtil.create("a", "leaflet-control-locate-btn", div);
    btn.href = "#";
    btn.title = "快速定位到当前设备位置";
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", "快速定位到当前设备位置");
    btn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="2" x2="12" y2="5"></line>
        <line x1="12" y1="19" x2="12" y2="22"></line>
        <line x1="2" y1="12" x2="5" y2="12"></line>
        <line x1="19" y1="12" x2="22" y2="12"></line>
        <circle cx="12" cy="12" r="7"></circle>
        <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
      </svg>
    `;

    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);
    L.DomEvent.on(btn, "click", function(e) {
      L.DomEvent.preventDefault(e);
      locateDevicePosition();
    });

    return div;
  };

  locateControl.addTo(map);
  state.locateControl = locateControl;
}


window.locateDevicePosition = locateDevicePosition;

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initClientVisit();
  preloadLikeAnimation();
  loadLayers();
  loadStats();
  loadWmsCapabilities();
  initEventListeners();
  initTableHoverPopover();
  updateCartBadge();
  initBottomBannerAutoDismiss();
  initStickyHeader();
  initPillsScroll();
  checkUrlScroll();
  initMobileGestures();
  initToolbarCollapse();
  initMobileLayoutToggle();
  initDraggableCartBtn();
  initCustomTooltip();
});

// --- Mobile Layout Column Switcher (≤767px) ---
// 支持单列详细大图与双列紧凑瀑布流自由切换，状态记忆在 localStorage，移动端默认双列。
function initMobileLayoutToggle() {
  const btn = document.getElementById("mobile-layout-toggle");
  if (!btn) return;

  let cols = localStorage.getItem("qgis_mobile_cols");
  if (!cols || (cols !== "1" && cols !== "2")) {
    cols = "2"; // 移动端默认双列高效瀑布流
  }
  applyMobileCols(cols, false);

  btn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-mobile-cols") || "2";
    const next = current === "2" ? "1" : "2";
    localStorage.setItem("qgis_mobile_cols", next);
    applyMobileCols(next, true);
  });
}

function applyMobileCols(cols, notify = false) {
  document.body.setAttribute("data-mobile-cols", cols);
  const btn = document.getElementById("mobile-layout-toggle");
  if (!btn) return;

  const isDouble = cols === "2";
  btn.setAttribute("data-cols", cols);
  btn.title = isDouble ? "当前为双列瀑布流，点击切换为单列大图" : "当前为单列大图，点击切换为双列瀑布流";

  const textEl = btn.querySelector(".mobile-layout-text");
  if (textEl) {
    textEl.textContent = isDouble ? "双列" : "单列";
  }

  const icon1 = btn.querySelector(".icon-cols-1");
  const icon2 = btn.querySelector(".icon-cols-2");
  if (icon1 && icon2) {
    icon1.style.display = isDouble ? "none" : "inline-flex";
    icon2.style.display = isDouble ? "inline-flex" : "none";
  }

  if (notify && typeof showToast === "function") {
    showToast(isDouble ? "已切换为双列瀑布流视图" : "已切换为单列详细大图视图");
  }
}

// --- Mobile Toolbar Collapse (≤767px) ---
// 折叠态仅保留搜索框 + 折叠按钮一行，释放被工具栏占用的屏幕空间；
// 状态记忆在 localStorage，首次访问默认折叠。
function initToolbarCollapse() {
  const toolbar = document.getElementById("sticky-toolbar");
  const btn = document.getElementById("toolbar-collapse-toggle");
  if (!toolbar || !btn) return;

  let collapsed = localStorage.getItem("qgis_toolbar_collapsed");
  if (collapsed === null) collapsed = "1";
  applyToolbarCollapsed(toolbar, btn, collapsed === "1");

  btn.addEventListener("click", () => {
    const next = !toolbar.classList.contains("toolbar-collapsed");
    localStorage.setItem("qgis_toolbar_collapsed", next ? "1" : "0");
    applyToolbarCollapsed(toolbar, btn, next);
  });
}

function applyToolbarCollapsed(toolbar, btn, collapsed) {
  toolbar.classList.toggle("toolbar-collapsed", collapsed);
  btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
  const label = btn.querySelector(".collapse-toggle-text");
  if (label) label.textContent = collapsed ? "筛选" : "收起";
}

function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const toolbar = document.getElementById('sticky-toolbar');

  function updateHeaderHeight() {
    if (header) {
      const h = header.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      }
    }
  }

  function handleScroll() {
    if (!toolbar) return;
    if (window.scrollY > 20) {
      toolbar.classList.add('is-scrolled');
    } else {
      toolbar.classList.remove('is-scrolled');
    }
  }

  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);
  window.addEventListener('scroll', handleScroll, { passive: true });
}

function initPillsScroll() {
  const container = document.getElementById("category-pills");
  const leftBtn = document.getElementById("pills-scroll-left");
  const rightBtn = document.getElementById("pills-scroll-right");
  if (!container || !leftBtn || !rightBtn) return;

  function updateArrows() {
    const hasOverflow = container.scrollWidth > container.clientWidth + 2;
    if (!hasOverflow) {
      leftBtn.style.display = "none";
      rightBtn.style.display = "none";
      return;
    }
    leftBtn.style.display = container.scrollLeft > 4 ? "flex" : "none";
    rightBtn.style.display = container.scrollLeft < (container.scrollWidth - container.clientWidth - 4) ? "flex" : "none";
  }

  leftBtn.onclick = () => {
    container.scrollBy({ left: -180, behavior: "smooth" });
  };
  rightBtn.onclick = () => {
    container.scrollBy({ left: 180, behavior: "smooth" });
  };

  container.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0 && container.scrollWidth > container.clientWidth) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  container.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  window.updatePillsScrollArrows = updateArrows;
  setTimeout(updateArrows, 150);
}

function checkUrlScroll() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('scroll')) {
    const y = parseInt(urlParams.get('scroll'), 10) || 500;
    setTimeout(() => {
      window.scrollTo(0, y);
    }, 400);
  }
}

// --- Theme Management ---
function initTheme() {
  applyTheme(state.theme);
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  if (document.body) {
    document.body.setAttribute("data-theme", theme);
  }
  localStorage.setItem("qgis_theme", theme);
  
  const icon = document.getElementById("theme-icon");
  const text = document.getElementById("theme-text");
  if (icon && text) {
    if (theme === "light") {
      icon.innerHTML = ICONS.sun;
      text.textContent = "浅色";
    } else {
      icon.innerHTML = ICONS.moon;
      text.textContent = "深色";
    }
  }
}

function toggleTheme() {
  const newTheme = state.theme === "light" ? "dark" : "light";
  applyTheme(newTheme);
  showToast(`已切换至${newTheme === "light" ? "浅色" : "深色"}主题`);
}

// --- Visitor Tracking ---
function getVisitorId() {
  let vid = localStorage.getItem("qgis_vid");
  if (!vid) {
    vid = "vid_" + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    localStorage.setItem("qgis_vid", vid);
  }
  return vid;
}

function initClientVisit() {
  const vid = getVisitorId();
  fetch("./api/visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitor_id: vid })
  }).catch(() => {});
}

// --- Data Fetching ---
async function loadLayers() {
  try {
    let rawData = null;
    try {
      const res = await fetch("./api/layers");
      if (res.ok) {
        const json = await res.json();
        if (json.code === 0) rawData = json.data;
      }
    } catch (e) {}

    // 静态降级：若后端 API 不可用（如 GitHub Pages 托管环境），无缝读取本地静态 layers.json
    if (!rawData) {
      const sRes = await fetch("./data/layers.json?v=7.9");
      const sData = await sRes.json();
      rawData = Array.isArray(sData) ? sData : (sData.data || []);
    }

    if (rawData) {
      const localOffsets = JSON.parse(localStorage.getItem("qgis_likes_offsets") || "{}");
      state.layers = rawData.map(l => {
        const rawLikes = (typeof l.likes === 'number' && !isNaN(l.likes)) ? l.likes : 0;
        l._baseLikes = rawLikes;
        const offset = state.liked.has(l.id) ? (localOffsets[l.id] !== undefined ? localOffsets[l.id] : 1) : 0;
        l.likes = rawLikes + offset;
        l.downloads = (typeof l.downloads === 'number' && !isNaN(l.downloads)) ? l.downloads : 0;
        l.heat = (typeof l.heat === 'number' && !isNaN(l.heat)) ? l.heat : (l.likes * 2 + l.downloads * 3);
        // 修正缩略图相对路径
        if (l.thumbnail && l.thumbnail.startsWith("/")) {
          l.thumbnail = "." + l.thumbnail;
        }
        return l;
      });
      renderCategories();
      renderLayers();
    }
  } catch (err) {
    console.error("加载底图数据失败:", err);
    showToast("无法加载底图列表，请检查网络");
  }
}

async function loadStats() {
  // 1. 优先尝试从全栈后端 API 获取真实统计
  try {
    let res = null;
    try {
      res = await fetch("./api/stats");
    } catch (e) {}
    if (res && res.ok) {
      const json = await res.json();
      if (json.code === 0 && json.data) {
        state.stats = json.data;
        updateStatsUi({
          pv: json.data.pv,
          uv: json.data.uv,
          downloads: json.data.total_downloads,
          layers: state.layers.length || 55,
          checkTime: json.data.check_time || "2026年5月26日"
        });
        return;
      }
    }
  } catch (err) {}

  // 2. 静态 Pages 离线自适应统计（优先读取上一次全网真实缓存，避免会话重启时突兀显示本地 1/2）
  let cached = {};
  try {
    cached = JSON.parse(localStorage.getItem("qgis_cached_global_stats") || "{}");
  } catch (e) {}

  const basePv = cached.pv || 42;
  const baseUv = cached.uv || 25;
  const baseDownloads = cached.downloads || parseInt(localStorage.getItem("qgis_site_downloads") || "19", 10);

  updateStatsUi({
    pv: basePv,
    uv: baseUv,
    downloads: baseDownloads,
    layers: state.layers.length || 55,
    checkTime: "2026年5月26日"
  });

  // 3. 异步连接不蒜子 (Busuanzi) 全网汇总
  connectBusuanziLiveStats();
  // 4. 异步同步 GitHub Pages 全网真实累计导出数
  syncGlobalDownloads();
}

function updateCachedStat(key, val) {
  try {
    let cached = JSON.parse(localStorage.getItem("qgis_cached_global_stats") || "{}");
    cached[key] = val;
    localStorage.setItem("qgis_cached_global_stats", JSON.stringify(cached));
  } catch (e) {}
}

function animateCountUp(element, endVal, duration = 700) {
  if (!element || typeof endVal !== "number" || isNaN(endVal)) return;
  const rawText = (element.textContent || "").replace(/,/g, "").trim();
  const startVal = parseInt(rawText, 10) || 0;
  if (startVal === endVal) {
    element.textContent = Number(endVal).toLocaleString();
    return;
  }

  // 终止上一次未完成的动画帧，防止多重 RAF 并发相互撕扯
  if (element._countUpRaf) {
    cancelAnimationFrame(element._countUpRaf);
    element._countUpRaf = null;
  }

  const startTime = performance.now();
  const diff = endVal - startVal;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic 极佳的平滑减速曲线，让数字跳动越来越慢，自然停在最终数值
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + diff * ease);
    element.textContent = Number(current).toLocaleString();
    if (progress < 1) {
      element._countUpRaf = requestAnimationFrame(step);
    } else {
      element.textContent = Number(endVal).toLocaleString();
      element._countUpRaf = null;
    }
  }
  element._countUpRaf = requestAnimationFrame(step);
}

function updateStatsUi(data) {
  const pvEl = document.getElementById("stat-pv");
  const uvEl = document.getElementById("stat-uv");
  const dlEl = document.getElementById("stat-downloads");
  const countEl = document.getElementById("stat-layers-count");
  const uvWrap = document.getElementById("stat-item-uv");

  if (pvEl) {
    pvEl.textContent = Number(data.pv).toLocaleString();
    if (pvEl.closest(".stat-item")) pvEl.closest(".stat-item").style.display = "";
  }
  if (uvEl) {
    uvEl.textContent = Number(data.uv).toLocaleString();
    if (uvWrap) uvWrap.style.display = "";
    else if (uvEl.closest(".stat-item")) uvEl.closest(".stat-item").style.display = "";
  }
  if (dlEl) {
    dlEl.textContent = Number(data.downloads).toLocaleString();
    if (dlEl.closest(".stat-item")) dlEl.closest(".stat-item").style.display = "";
  }
  if (countEl) countEl.textContent = data.layers || state.layers.length || 55;

  const ctEl = document.getElementById("stat-check-time");
  if (ctEl) ctEl.textContent = data.checkTime || "2026年5月26日";
  const bctEl = document.getElementById("banner-check-time");
  if (bctEl) bctEl.textContent = data.checkTime || "2026年5月26日";
}

function connectBusuanziLiveStats() {
  try {
    if (document.getElementById("busuanzi-script")) return;
    const s = document.createElement("script");
    s.id = "busuanzi-script";
    s.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    s.async = true;
    s.referrerPolicy = "no-referrer-when-downgrade";
    document.head.appendChild(s);

    let checkCount = 0;
    let pvDone = false;
    let uvDone = false;

    const bszTimer = setInterval(() => {
      checkCount++;

      if (!pvDone) {
        const bszPv = document.getElementById("busuanzi_value_site_pv");
        if (bszPv && bszPv.textContent && bszPv.textContent !== "" && bszPv.textContent !== "-") {
          const val = parseInt(bszPv.textContent, 10);
          if (!isNaN(val) && val > 0) {
            pvDone = true;
            const pvEl = document.getElementById("stat-pv");
            if (pvEl) animateCountUp(pvEl, val, 700);
            updateCachedStat("pv", val);
          }
        }
      }

      if (!uvDone) {
        const bszUv = document.getElementById("busuanzi_value_site_uv");
        if (bszUv && bszUv.textContent && bszUv.textContent !== "" && bszUv.textContent !== "-") {
          const val = parseInt(bszUv.textContent, 10);
          if (!isNaN(val) && val > 0) {
            uvDone = true;
            const uvEl = document.getElementById("stat-uv");
            if (uvEl) animateCountUp(uvEl, val, 700);
            updateCachedStat("uv", val);
          }
        }
      }

      // 两者均已更新完成，或检测超过 20 次（6秒超时），坚决销毁定时器，杜绝重复触发
      if ((pvDone && uvDone) || checkCount >= 20) {
        clearInterval(bszTimer);
      }
    }, 300);
  } catch (e) {}
}

async function loadWmsCapabilities() {
  try {
    let data = null;
    try {
      const res = await fetch("./api/wms-capabilities");
      if (res.ok) {
        const json = await res.json();
        if (json.code === 0 && json.data) data = json.data;
      }
    } catch (e) {}

    if (!data) {
      const sRes = await fetch("./data/wms_capabilities.json").catch(() => null);
      if (sRes && sRes.ok) data = await sRes.json();
    }

    if (data) {
      state.wmsCapabilities = data;
      if (state.activePreviewLayer) {
        setupPreviewSublayers(state.activePreviewLayer);
      }
    }
  } catch (err) {
    console.warn("加载 WMS/WMTS 能力缓存失败:", err);
  }
}

// --- Filtering & Sorting ---
function getFilteredLayers() {
  return state.layers.filter(layer => {
    // 排除插件类（仅展示可直接在线加载的底图）
    if (layer.format === "插件类" || !layer.url || !layer.url.trim().startsWith("http")) return false;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = layer.name.toLowerCase().includes(q);
      const matchDesc = layer.description.toLowerCase().includes(q);
      const matchCat = layer.categories.some(c => c.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchCat) return false;
    }

    if (state.activeCategory !== "全部") {
      const hasCat = layer.categories.some(c => c.includes(state.activeCategory));
      if (!hasCat) return false;
    }

    if (state.filterDirectOnly && layer.needs_vpn) return false;
    if (state.filterVpnOnly && !layer.needs_vpn) return false;
    if (state.filterNoBoundary && layer.has_boundary_issue) return false;
    if (state.filterBoundaryOnly && !layer.has_boundary_issue) return false;
    if (state.filterNoDrift && layer.has_coordinate_drift) return false;
    if (state.filterDriftOnly && !layer.has_coordinate_drift) return false;
    if (state.filterXyzOnly && layer.format !== "XYZ Tiles") return false;

    return true;
  }).sort((a, b) => {
    if (state.currentSort === "heat") return (b.heat || 0) - (a.heat || 0);
    if (state.currentSort === "likes") return (b.likes || 0) - (a.likes || 0);
    if (state.currentSort === "downloads") return b.downloads - a.downloads;
    if (state.currentSort === "name") return a.name.localeCompare(b.name, "zh");
    return 0;
  });
}

function toggleCategoryFilter(cat) {
  if (state.activeCategory === cat) {
    state.activeCategory = "全部";
    showToast(`已取消【${cat}】分类筛选`);
  } else {
    state.activeCategory = cat;
    showToast(`已激活【${cat}】分类筛选（再次点击可取消）`);
  }
  const mobileSelect = document.getElementById("mobile-category-select");
  if (mobileSelect) {
    mobileSelect.value = state.activeCategory;
  }
  renderCategories();
  renderLayers();
}

// 标签 1：分类标签点击
function handleTagClick(e, cat) {
  if (e) e.stopPropagation();
  toggleCategoryFilter(cat);
}

// 标签 2：国内直连标签点击
function handleDirectClick(e) {
  if (e) e.stopPropagation();
  state.filterDirectOnly = !state.filterDirectOnly;
  if (state.filterDirectOnly) state.filterVpnOnly = false;
  const chk = document.getElementById("chk-direct");
  if (chk) chk.checked = state.filterDirectOnly;
  showToast(state.filterDirectOnly ? "已筛选【国内直连】底图（再次点击取消）" : "已取消【国内直连】筛选");
  renderLayers();
}

// 标签 3：需代理/魔法标签点击
function handleVpnClick(e) {
  if (e) e.stopPropagation();
  state.filterVpnOnly = !state.filterVpnOnly;
  if (state.filterVpnOnly) {
    state.filterDirectOnly = false;
    const chk = document.getElementById("chk-direct");
    if (chk) chk.checked = false;
  }
  showToast(state.filterVpnOnly ? "已筛选【需代理/魔法】底图（再次点击取消）" : "已取消【需代理/魔法】筛选");
  renderLayers();
}

// 标签 4：边界警示标签点击
function handleBoundaryClick(e) {
  if (e) e.stopPropagation();
  state.filterBoundaryOnly = !state.filterBoundaryOnly;
  if (state.filterBoundaryOnly) {
    state.filterNoBoundary = false;
    const chk = document.getElementById("chk-boundary");
    if (chk) chk.checked = false;
  }
  showToast(state.filterBoundaryOnly ? "已筛选【存在边界警示】底图（再次点击取消）" : "已取消【边界警示】筛选");
  renderLayers();
}

// 标签 5：GCJ-02偏移标签点击
function handleDriftClick(e) {
  if (e) e.stopPropagation();
  state.filterDriftOnly = !state.filterDriftOnly;
  if (state.filterDriftOnly) {
    state.filterNoDrift = false;
    const chk = document.getElementById("chk-drift");
    if (chk) chk.checked = false;
  }
  showToast(state.filterDriftOnly ? "已筛选【GCJ-02坐标偏移】底图（再次点击取消）" : "已取消【GCJ-02偏移】筛选");
  renderLayers();
}

// 卡片空白处不再绑定分类筛选逻辑，防止用户点击或选择文本时误触发分类切换
function handleCardClick(e, layerId) {
  // no-op
}

// --- Rendering ---
function renderCategories() {
  const cats = ["全部", "电子地图", "地形图", "影像图", "标注图", "铁路地图", "土地利用图", "海床图"];
  const container = document.getElementById("category-pills");
  const mobileSelect = document.getElementById("mobile-category-select");

  if (container) {
    container.innerHTML = "";
    cats.forEach(c => {
      const count = c === "全部" 
        ? state.layers.filter(l => l.format !== "插件类").length
        : state.layers.filter(l => l.format !== "插件类" && l.categories.includes(c)).length;
      const btn = document.createElement("button");
      btn.className = `pill-btn ${state.activeCategory === c ? "active" : ""}`;
      btn.textContent = `${c} (${count})`;
      btn.onclick = () => {
        toggleCategoryFilter(c);
      };
      container.appendChild(btn);
    });
  }

  if (mobileSelect) {
    mobileSelect.innerHTML = "";
    cats.forEach(c => {
      const count = c === "全部" 
        ? state.layers.filter(l => l.format !== "插件类").length
        : state.layers.filter(l => l.format !== "插件类" && l.categories.includes(c)).length;
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = `${c === "全部" ? "全部分类" : c} (${count}款)`;
      if (state.activeCategory === c) opt.selected = true;
      mobileSelect.appendChild(opt);
    });
  }

  if (window.updatePillsScrollArrows) {
    setTimeout(window.updatePillsScrollArrows, 50);
  }
}

function renderLayers() {
  const container = document.getElementById("layers-container");
  const filtered = getFilteredLayers();
  
  document.getElementById("filtered-count").textContent = `${filtered.length} 款底图`;

  if (state.viewMode === "grid") {
    container.className = "layers-grid";
    if (filtered.length === 0) {
      container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-dim);">未找到匹配的底图配置项</div>';
      return;
    }

    container.innerHTML = filtered.map(layer => {
      const inCart = state.cart.has(layer.id);
      const isLiked = state.liked.has(layer.id);
      const thumb = layer.thumbnail ? `<img src="${escapeHtml(layer.thumbnail)}" class="card-thumb" alt="${escapeHtml(layer.name)}" loading="lazy" />` : `<div class="thumb-placeholder">在线底图服务</div>`;
      const isOSMWinter = layer.name === "OSMWinter" || layer.id === "layer_24";

      return `
        <div class="layer-card ${inCart ? 'in-cart' : ''} ${isOSMWinter ? 'card-compact-winter' : ''}"
             data-id="${escapeHtml(layer.id)}">
          <div class="card-thumb-wrap" onclick="openPreviewModal('${escapeAttrJs(layer.id)}')" title="点击直接调用在线底图预览">
            ${thumb}
            <span class="card-format-badge">${escapeHtml(layer.format)}</span>
            <div class="card-thumb-overlay">
              <span class="card-thumb-title">${escapeHtml(layer.name)}</span>
            </div>
          </div>
          <div class="card-body">
            <p class="card-desc" title="${escapeHtml(layer.description || '无详细简介')}">
              ${formatDescWithLinks(layer.description || '官方切片服务，支持在 QGIS 中高速流畅加载。')}
            </p>

            <div class="card-tags">
              ${layer.categories.map(c => `
                <span class="tag tag-cat ${state.activeCategory === c ? 'active' : ''}"
                      onclick="handleTagClick(event, '${escapeAttrJs(c)}')"
                      title="点击筛选分类【${escapeHtml(c)}】（再次点击可取消）">
                  ${escapeHtml(c)}
                </span>
              `).join('')}
              ${layer.needs_vpn 
                ? `<span class="tag tag-vpn ${state.filterVpnOnly ? 'active' : ''}" onclick="handleVpnClick(event)" title="点击筛选【需代理/魔法】底图（再次点击可取消）">需代理/魔法</span>` 
                : `<span class="tag tag-direct ${state.filterDirectOnly ? 'active' : ''}" onclick="handleDirectClick(event)" title="点击筛选【国内直连】底图（再次点击可取消）">国内直连</span>`
              }
              ${layer.has_boundary_issue 
                ? `<span class="tag tag-boundary ${state.filterBoundaryOnly ? 'active' : ''}" onclick="handleBoundaryClick(event)" title="点击筛选【存在边界警示】底图（再次点击可取消）">${ICONS.warning} 边界警示</span>` 
                : ''
              }
              ${layer.has_coordinate_drift 
                ? `<span class="tag tag-drift ${state.filterDriftOnly ? 'active' : ''}" onclick="handleDriftClick(event)" title="点击筛选【GCJ-02坐标偏移】底图（再次点击可取消）">${ICONS.compass} GCJ-02偏移</span>` 
                : ''
              }
            </div>

            <!-- 直接明码显示 URL -->
            <div class="card-url-box" onclick="event.stopPropagation(); copyText('${escapeAttrJs(layer.url)}', '已复制底图服务 URL')" title="点击直接一键复制底图服务 URL">
              <code class="card-url-code">${escapeHtml(layer.url || '插件管理（无需URL）')}</code>
              <button class="btn-copy-url" title="复制 URL">${ICONS.copy}</button>
            </div>

            <div class="card-footer">
              <div class="card-actions-left">
                <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="handleLike('${escapeAttrJs(layer.id)}')" title="${isLiked ? '点赞中 · 点击取消点赞' : '点赞推荐此底图'}">
                  <span class="like-icon">${isLiked ? ICONS.heartFilled : ICONS.heartOutline}</span>
                  <span class="like-count" id="like-${escapeHtml(layer.id)}">${layer.likes || 0}</span>
                </button>
                <span class="heat-badge" title="综合热度指数">${ICONS.flame} <span id="heat-${escapeHtml(layer.id)}">${layer.heat || 0}</span></span>
              </div>
              <button class="add-cart-btn ${inCart ? 'added' : ''}" onclick="toggleCart('${escapeAttrJs(layer.id)}')">
                <span class="btn-text-full">${inCart ? '已在配置单' : '+ 加入配置'}</span>
                <span class="btn-text-short">${inCart ? '已选' : '+ 选入'}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  } else {
    // Table View
    container.className = "layers-table-wrap";
    container.innerHTML = `
      <table class="layers-table">
        <thead>
          <tr>
            <th>地图名 <span style="font-weight: normal; font-size: 0.75rem; color: var(--text-dim);">（悬停看缩略图，点击交互预览）</span></th>
            <th>接入格式</th>
            <th>分类</th>
            <th>网络状态</th>
            <th>合规/坐标提示</th>
            <th>热度 / 点赞</th>
            <th style="text-align: right;">操作</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(l => {
            const inCart = state.cart.has(l.id);
            const isLiked = state.liked.has(l.id);
            const isOSMWinter = l.name === "OSMWinter" || l.id === "layer_24";
            return `
              <tr data-id="${escapeHtml(l.id)}" class="${isOSMWinter ? 'tr-compact-winter' : ''}">
                <td style="font-weight: 500; color: var(--text-main);" class="table-layer-title-cell">
                  <a href="javascript:void(0)" class="table-layer-title-link" data-layer-id="${escapeHtml(l.id)}" onclick="openPreviewModal('${escapeAttrJs(l.id)}')" title="悬停看卡片预览图，点击打开交互式地图">
                    <span class="table-thumb-indicator" title="悬停快速预览">${ICONS.image}</span>
                    <span>${escapeHtml(l.name)}</span>
                  </a>
                  <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent-blue); margin-top: 3px; max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer;" title="点击一键复制 URL: ${escapeHtml(l.url)}" onclick="copyText('${escapeAttrJs(l.url)}', '已复制底图服务 URL')">
                    ${ICONS.copy} ${escapeHtml(l.url || '-')}
                  </div>
                </td>
                <td><span class="card-format-badge table-format-badge">${escapeHtml(l.format)}</span></td>
                <td>
                  ${l.categories.map(c => `
                    <span class="tag tag-cat ${state.activeCategory === c ? 'active' : ''}"
                          onclick="handleTagClick(event, '${escapeAttrJs(c)}')"
                          title="点击筛选分类【${escapeHtml(c)}】（再次点击可取消）">
                      ${escapeHtml(c)}
                    </span>
                  `).join(' ')}
                </td>
                <td>
                  ${l.needs_vpn 
                    ? `<span class="tag tag-vpn ${state.filterVpnOnly ? 'active' : ''}" onclick="handleVpnClick(event)" title="点击筛选【需代理/魔法】底图（再次点击可取消）">需代理</span>` 
                    : `<span class="tag tag-direct ${state.filterDirectOnly ? 'active' : ''}" onclick="handleDirectClick(event)" title="点击筛选【国内直连】底图（再次点击可取消）">直连</span>`
                  }
                </td>
                <td>
                  ${l.has_boundary_issue 
                    ? `<span class="tag tag-boundary ${state.filterBoundaryOnly ? 'active' : ''}" onclick="handleBoundaryClick(event)" title="点击筛选【存在边界警示】底图（再次点击可取消）">边界警示</span> ` 
                    : ''
                  }
                  ${l.has_coordinate_drift 
                    ? `<span class="tag tag-drift ${state.filterDriftOnly ? 'active' : ''}" onclick="handleDriftClick(event)" title="点击筛选【GCJ-02坐标偏移】底图（再次点击可取消）">GCJ-02</span>` 
                    : ''
                  }
                </td>
                <td>
                  <div style="display: inline-flex; align-items: center; gap: 8px;">
                    <span class="heat-badge" title="综合热度指数">${ICONS.flame} <span id="table-heat-${escapeHtml(l.id)}">${l.heat || 0}</span></span>
                    <button class="like-btn table-like-btn ${isLiked ? 'liked' : ''}" onclick="handleLike('${escapeAttrJs(l.id)}')" title="${isLiked ? '点赞中 · 点击取消点赞' : '点赞推荐此底图'}">
                      <span class="like-icon">${isLiked ? ICONS.heartFilled : ICONS.heartOutline}</span>
                      <span class="like-count" id="table-like-${escapeHtml(l.id)}">${l.likes || 0}</span>
                    </button>
                  </div>
                </td>
                <td style="text-align: right;">
                  <button class="add-cart-btn ${inCart ? 'added' : ''}" style="display: inline-flex;" onclick="toggleCart('${escapeAttrJs(l.id)}')">
                    ${inCart ? '已选' : '加入'}
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
}

// --- Cart Operations ---
function toggleCart(layerId) {
  if (state.cart.has(layerId)) {
    state.cart.delete(layerId);
    showToast("已从配置单移除");
  } else {
    state.cart.add(layerId);
    showToast("已添加到底图配置单");
  }
  saveCart();
  updateCartBadge();
  renderLayers();
  renderCartDrawer();
  updatePreviewCartButton(layerId);
}

function saveCart() {
  localStorage.setItem("qgis_cart", JSON.stringify(Array.from(state.cart)));
}

function updateCartBadge() {
  const count = state.cart.size;
  document.getElementById("cart-badge-count").textContent = count;
  document.getElementById("floating-cart-badge").textContent = count;
  const checkoutBtn = document.getElementById("drawer-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.disabled = count === 0;
    checkoutBtn.textContent = count > 0 ? `结算生成 QGIS 导入脚本 (${count} 项)` : "请先添加底图";
  }
  const clearBtn = document.getElementById("drawer-clear-btn");
  if (clearBtn) {
    clearBtn.disabled = count === 0;
  }
}

function renderCartDrawer() {
  const listEl = document.getElementById("drawer-cart-list");
  if (state.cart.size === 0) {
    listEl.innerHTML = `<div class="drawer-empty">配置单空空如也<br>请在左侧挑选底图加入</div>`;
    updateCartBadge();
    return;
  }

  const idMap = new Map(state.layers.map(l => [l.id, l]));
  const items = Array.from(state.cart).map(id => idMap.get(id)).filter(Boolean);

  listEl.innerHTML = items.map(l => `
    <div class="drawer-item">
      <div style="flex:1; overflow:hidden;">
        <div class="drawer-item-title">${escapeHtml(l.name)}</div>
        <div class="drawer-item-sub">${escapeHtml(l.format)} · ${escapeHtml(l.categories.join('/'))}</div>
      </div>
      <button class="drawer-item-del" onclick="toggleCart('${escapeAttrJs(l.id)}')" title="移除">✕</button>
    </div>
  `).join("");

  updateCartBadge();
}

function clearCart() {
  state.cart.clear();
  saveCart();
  updateCartBadge();
  renderLayers();
  renderCartDrawer();
  showToast("已清空底图配置单");
}

function applyPreset(presetType) {
  if (presetType === "top10_direct") {
    const top = state.layers.filter(l => !l.needs_vpn && l.format !== "插件类").slice(0, 10);
    top.forEach(l => state.cart.add(l.id));
    showToast("已加入国内直连高频推荐套件（10款）");
  } else if (presetType === "imagery") {
    const imags = state.layers.filter(l => l.categories.some(c => c.includes("影像")));
    imags.forEach(l => state.cart.add(l.id));
    showToast("已加入全部卫星遥感影像套件");
  } else if (presetType === "compliant") {
    const comp = state.layers.filter(l => !l.has_boundary_issue && !l.needs_vpn);
    comp.forEach(l => state.cart.add(l.id));
    showToast("已加入全部合规无边界风险底图");
  }
  saveCart();
  updateCartBadge();
  renderLayers();
  renderCartDrawer();
}

// --- Lottie Like Animation ---
let likeAnimationData = null;

async function preloadLikeAnimation() {
  try {
    const res = await fetch("/like-animation.json");
    if (res.ok) {
      likeAnimationData = await res.json();
    }
  } catch (err) {
    console.warn("点赞动画预加载失败:", err);
  }
}

function triggerLikeLottie(iconEl) {
  if (!iconEl) return;
  if (!window.lottie || !likeAnimationData) return;

  // 清除同一按钮上可能尚未结束的动画与容器
  const oldOverlay = iconEl.querySelector(".like-lottie-overlay");
  if (oldOverlay) {
    if (oldOverlay._lottieAnim) {
      try { oldOverlay._lottieAnim.destroy(); } catch (e) {}
    }
    oldOverlay.remove();
  }

  const svg = iconEl.querySelector("svg");
  if (svg) svg.style.opacity = "0";

  const overlay = document.createElement("div");
  overlay.className = "like-lottie-overlay";
  iconEl.appendChild(overlay);

  try {
    const anim = lottie.loadAnimation({
      container: overlay,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: likeAnimationData
    });
    overlay._lottieAnim = anim;

    // 适度提高播放速率（1.8x 约 0.75 秒），动画干脆利落且不失弹性冲击力
    anim.setSpeed(1.8);
    // 关键修正：该动效文件前半段（0-82帧）为点赞爆破粒子并填充满红心；
    // 115帧之后为作者演示的“取消点赞变回空心”阶段。
    // 因此点赞时仅精准播放 0~82 帧，落定在饱满实心红心！
    anim.playSegments([0, 82], true);

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      if (svg) svg.style.opacity = "1";
      overlay.style.transition = "opacity 0.15s ease-out";
      overlay.style.opacity = "0";
      setTimeout(() => {
        try { anim.destroy(); } catch (e) {}
        overlay.remove();
      }, 160);
    };

    anim.addEventListener("complete", cleanup);
    setTimeout(cleanup, 1200);
  } catch (e) {
    console.warn("播放点赞动效异常:", e);
    if (svg) svg.style.opacity = "1";
    overlay.remove();
  }
}

function triggerUnlikeLottie(iconEl) {
  if (!iconEl || !window.lottie || !likeAnimationData) return;

  const oldOverlay = iconEl.querySelector(".like-lottie-overlay");
  if (oldOverlay) {
    if (oldOverlay._lottieAnim) {
      try { oldOverlay._lottieAnim.destroy(); } catch (e) {}
    }
    oldOverlay.remove();
  }

  const svg = iconEl.querySelector("svg");
  if (svg) svg.style.opacity = "0";

  const overlay = document.createElement("div");
  overlay.className = "like-lottie-overlay";
  iconEl.appendChild(overlay);

  try {
    const anim = lottie.loadAnimation({
      container: overlay,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: likeAnimationData
    });
    overlay._lottieAnim = anim;
    anim.setSpeed(2.2);
    // 播放取消点赞阶段（115-160帧）：实心红心优雅淡出收缩变回空心线条
    anim.playSegments([115, 160], true);

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      if (svg) svg.style.opacity = "1";
      overlay.style.transition = "opacity 0.15s ease-out";
      overlay.style.opacity = "0";
      setTimeout(() => {
        try { anim.destroy(); } catch (e) {}
        overlay.remove();
      }, 160);
    };

    anim.addEventListener("complete", cleanup);
    setTimeout(cleanup, 800);
  } catch (e) {
    if (svg) svg.style.opacity = "1";
    overlay.remove();
  }
}

// --- Likes (支持全栈后端 API 与纯静态离线持久化双模自适应) ---
async function handleLike(layerId) {
  const vid = getVisitorId();
  const willLike = !state.liked.has(layerId);
  const action = willLike ? "like" : "unlike";

  let serverSuccess = false;
  let finalLiked = willLike;
  let finalLikes = null;

  // 1. 尝试向后端提交（若运行在含 server.py 的全栈环境中）
  try {
    const res = await fetch("./api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ layer_id: layerId, visitor_id: vid, action })
    });

    if (res.status === 429) {
      showToast("操作过于频繁，请稍后再试");
      return;
    }

    if (res.ok) {
      const json = await res.json();
      if (json && json.code === 0 && json.data) {
        serverSuccess = true;
        finalLiked = !!json.data.liked;
        finalLikes = json.data.likes;
      }
    }
  } catch (e) {
    // 捕获无后端 404 或网络错误，无缝降级到本地离线存储
  }

  const layer = state.layers.find(l => l.id === layerId);

  // 2. 离线/静态模式（GitHub Pages 纯前端持久化）：
  if (!serverSuccess) {
    if (finalLiked) {
      state.liked.add(layerId);
    } else {
      state.liked.delete(layerId);
    }
    localStorage.setItem("qgis_liked", JSON.stringify(Array.from(state.liked)));

    const localOffsets = JSON.parse(localStorage.getItem("qgis_likes_offsets") || "{}");
    const offset = finalLiked ? 1 : 0;
    localOffsets[layerId] = offset;
    localStorage.setItem("qgis_likes_offsets", JSON.stringify(localOffsets));

    if (layer) {
      const baseLikes = typeof layer._baseLikes === 'number' ? layer._baseLikes : (layer.likes || 0);
      layer._baseLikes = baseLikes;
      layer.likes = Math.max(0, baseLikes + offset);
      layer.heat = layer.likes * 2 + (layer.downloads || 0) * 3;
      finalLikes = layer.likes;
    }
  } else {
    // 服务端模式同步
    if (finalLiked) state.liked.add(layerId);
    else state.liked.delete(layerId);
    localStorage.setItem("qgis_liked", JSON.stringify(Array.from(state.liked)));

    if (layer) {
      layer.likes = finalLikes;
      layer.heat = layer.likes * 2 + (layer.downloads || 0) * 3;
    }
  }

  // 3. 同步卡片视图 DOM
  const likeCountEl = document.getElementById(`like-${layerId}`);
  if (likeCountEl && finalLikes !== null) likeCountEl.textContent = finalLikes;

  const heatEl = document.getElementById(`heat-${layerId}`);
  if (heatEl && layer) heatEl.textContent = layer.heat;

  const card = document.querySelector(`.layer-card[data-id="${layerId}"] .like-btn`);
  if (card) {
    card.classList.toggle("liked", finalLiked);
    card.title = finalLiked ? "点赞中 · 点击取消点赞" : "点赞推荐此底图";
    const icon = card.querySelector(".like-icon");
    if (icon) {
      icon.innerHTML = finalLiked ? ICONS.heartFilled : ICONS.heartOutline;
      if (finalLiked) triggerLikeLottie(icon);
      else triggerUnlikeLottie(icon);
    }
  }

  // 4. 同步表格列表视图 DOM
  const tableLikeEl = document.getElementById(`table-like-${layerId}`);
  if (tableLikeEl && finalLikes !== null) tableLikeEl.textContent = finalLikes;

  const tableHeatEl = document.getElementById(`table-heat-${layerId}`);
  if (tableHeatEl && layer) tableHeatEl.textContent = layer.heat;

  const tableRowBtn = document.querySelector(`tr[data-id="${layerId}"] .like-btn`);
  if (tableRowBtn) {
    tableRowBtn.classList.toggle("liked", finalLiked);
    tableRowBtn.title = finalLiked ? "点赞中 · 点击取消点赞" : "点赞推荐此底图";
    const icon = tableRowBtn.querySelector(".like-icon");
    if (icon) {
      icon.innerHTML = finalLiked ? ICONS.heartFilled : ICONS.heartOutline;
      if (finalLiked) triggerLikeLottie(icon);
      else triggerUnlikeLottie(icon);
    }
  }

  showToast(finalLiked ? "感谢点赞推荐！" : "已取消点赞");
}


// --- Client-side Standalone PyQGIS Script Generator for GitHub Pages ---
function generateClientQgisScript(selectedLayers, addToCanvas) {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const timestamp = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const checkTime = "2026年5月26日";
  const pySq = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  const lines = [
    "# -*- coding: utf-8 -*-",
    "# ====================================================================",
    "# 【OpenQGIS】在线底图多协议自动化注册脚本",
    "# 项目维护: OpenQGIS 团队 (https://github.com/OpenQGIS/maps)",
    `# 图源核验基准日期: ${checkTime}`,
    `# 脚本导出时间: ${timestamp}`,
    `# 本次选定底图: 共 ${selectedLayers.length} 款`,
    "# 协议覆盖: XYZ Tiles 标准切片、WMS/WMTS 空间数据服务、VEC 矢量切片 (Vector Tiles)",
    "# 兼容特性: 深度兼容 QGIS 4.x (现代数据连接架构) 与 QGIS 3.x 全版本",
    "# 使用方法:",
    "# 1. 在 QGIS 菜单栏快捷键 Ctrl+Alt+P 打开 Python 控制台",
    "# 2. 将本脚本全部代码粘贴到控制台命令行并回车执行",
    "# 3. 底图将自动注册到左侧【浏览器】对应层级下，永久可用！",
    "# ====================================================================",
    "",
    "import urllib.parse",
    "from qgis.core import QgsSettings, QgsRasterLayer, QgsProject",
    "try:",
    "    from qgis.core import QgsVectorTileLayer",
    "except ImportError:",
    "    QgsVectorTileLayer = None",
    "from qgis.utils import iface",
    "",
    "settings = QgsSettings()",
    "xyz_count = 0",
    "wms_count = 0",
    "vec_count = 0",
    "loaded_layers = 0",
    "print('=== 【OpenQGIS】开始批量导入底图配置 ===')",
    `print('  [i] 图源核验基准: ${checkTime}')`,
    ""
  ];



  for (const layer of selectedLayers) {
    const name = pySq(layer.name || "未命名图层");
    const fmt = (layer.format || "XYZ Tiles").trim();
    const rawUrl = (layer.url || "").trim();
    const desc = (layer.description || "").trim();
    const cats = layer.categories ? layer.categories.join(" / ") : "";
    if (!rawUrl) continue;

    if (fmt === "VEC") {
      const urlLines = rawUrl.split("\n").map(u => u.trim()).filter(Boolean);
      const tileUrl = pySq(urlLines[0]);
      const styleUrl = urlLines.length > 1 ? pySq(urlLines[1]) : "";
      lines.push(`# >>> [VEC 矢量切片] ${name}`);
      if (cats) lines.push(`#     分类: ${cats}`);
      if (desc) lines.push(`#     说明: ${desc}`);
      if (layer.has_boundary_issue) lines.push("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考");
      if (layer.has_coordinate_drift) lines.push("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准");
      if (layer.needs_vpn) lines.push("#     🌐 标注: 境外服务器源，加载需网络代理");
      lines.push("try:");
      lines.push(`    layer_name = '${name}'`);
      lines.push(`    tile_url = '${tileUrl}'`);
      lines.push(`    style_url = '${styleUrl}'`);
      lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/url', tile_url)");
      if (styleUrl) lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/styleUrl', style_url)");
      lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/zmin', 0)");
      lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/zmax', 14)");
      lines.push("    settings.setValue(f'qgis/connections-vectortiles/{layer_name}/serviceType', 'xyz')");
      lines.push("    settings.setValue(f'qgis/connections-vectortiles/{layer_name}/url', tile_url)");
      if (styleUrl) lines.push("    settings.setValue(f'qgis/connections-vectortiles/{layer_name}/styleUrl', style_url)");
      lines.push("    settings.setValue(f'qgis/connections-vectortiles/{layer_name}/zmin', 0)");
      lines.push("    settings.setValue(f'qgis/connections-vectortiles/{layer_name}/zmax', 14)");
      lines.push("    vec_count += 1");
      lines.push("    print(f'  [√] 成功注册 Vector Tiles 连接: {layer_name}')");
      lines.push("except Exception as err:");
      lines.push("    print(f'  [×] 注册矢量切片失败: {layer_name}, 错误: {err}')");
      lines.push("");
    } else if (fmt === "WMS/WMTS") {
      const cleanUrl = pySq(rawUrl.split("\n")[0].trim());
      lines.push(`# >>> [WMS/WMTS 空间服务] ${name}`);
      if (cats) lines.push(`#     分类: ${cats}`);
      if (desc) lines.push(`#     说明: ${desc}`);
      if (layer.has_boundary_issue) lines.push("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考");
      if (layer.has_coordinate_drift) lines.push("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准");
      if (layer.needs_vpn) lines.push("#     🌐 标注: 境外服务器源，加载需网络代理");
      lines.push("try:");
      lines.push(`    layer_name = '${name}'`);
      lines.push(`    wms_url = '${cleanUrl}'`);
      lines.push("    settings.setValue(f'connections/ows/items/wms/connections/items/{layer_name}/url', wms_url)");
      lines.push("    settings.setValue(f'connections/ows/items/wms/connections/items/{layer_name}/dpi-mode', 7)");
      lines.push("    settings.setValue(f'connections/ows/items/wms/connections/items/{layer_name}/feature-count', 10)");
      lines.push("    settings.setValue(f'qgis/connections-wms/{layer_name}/url', wms_url)");
      lines.push("    wms_count += 1");
      lines.push("    print(f'  [√] 成功注册 WMS/WMTS 连接: {layer_name}')");
      lines.push("except Exception as err:");
      lines.push("    print(f'  [×] 注册 WMS/WMTS 失败: {layer_name}, 错误: {err}')");
      lines.push("");
    } else {
      const cleanUrl = pySq(rawUrl.split("\n")[0].trim());
      lines.push(`# >>> [XYZ Tiles 标准瓦片] ${name}`);
      if (cats) lines.push(`#     分类: ${cats}`);
      if (desc) lines.push(`#     说明: ${desc}`);
      if (layer.has_boundary_issue) lines.push("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考");
      if (layer.has_coordinate_drift) lines.push("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准");
      if (layer.needs_vpn) lines.push("#     🌐 标注: 境外服务器源，加载需网络代理");
      lines.push("try:");
      lines.push(`    layer_name = '${name}'`);
      lines.push(`    layer_url = '${cleanUrl}'`);
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/url', layer_url)");
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/zmin', 0)");
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/zmax', 19)");
      lines.push("    settings.setValue(f'qgis/connections-xyz/{layer_name}/url', layer_url)");
      lines.push("    settings.setValue(f'qgis/connections-xyz/{layer_name}/zmin', 0)");
      lines.push("    settings.setValue(f'qgis/connections-xyz/{layer_name}/zmax', 19)");
      lines.push("    xyz_count += 1");
      lines.push("    print(f'  [√] 成功注册 XYZ 连接: {layer_name}')");
      lines.push("except Exception as err:");
      lines.push("    print(f'  [×] 注册 XYZ 失败: {layer_name}, 错误: {err}')");
      lines.push("");
    }
  }

  lines.push("settings.sync()");
  lines.push("try:");
  lines.push("    if hasattr(iface, 'browserModel') and iface.browserModel():");
  lines.push("        iface.browserModel().reload()");
  lines.push("        iface.browserModel().refresh()");
  lines.push("except Exception:");
  lines.push("    pass");
  lines.push("");
  lines.push("print('=' * 60)");
  lines.push("print('【OpenQGIS】底图自动化导入完成！')");
  lines.push(`print('  - 图源核验基准: ${checkTime}')`);
  lines.push("print(f'  - XYZ Tiles 注册: {xyz_count} 项')");
  lines.push("print(f'  - WMS/WMTS 注册: {wms_count} 项')");
  lines.push("print(f'  - Vector Tiles 矢量切片注册: {vec_count} 项')");
  lines.push("print(f'  - 直接加载到画布: {loaded_layers} 项')");
  lines.push("print('请在 QGIS 左侧【浏览器】面板对应分类中直接查看与调用！')");
  lines.push("print('=' * 60)");

  return lines.join("\n");
}

// --- Checkout & Script Generation ---
async function handleCheckout() {
  if (state.cart.size === 0) return;
  const layerIds = Array.from(state.cart);
  const vid = getVisitorId();

  try {
    let data = null;
    try {
      const res = await fetch("./api/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ layer_ids: layerIds, add_to_canvas: false, visitor_id: vid })
      });
      if (res.status === 429) {
        showToast("操作过于频繁，请稍后再试");
        return;
      }
      if (res.ok) {
        const json = await res.json();
        if (json.code === 0) data = json.data;
      }
    } catch (e) {}

    // 静态降级：若后端 API 不可用，在纯浏览器端直接生成脚本
    if (!data) {
      const selectedLayers = layerIds.map(id => state.layers.find(l => l.id === id)).filter(Boolean);
      const clientScript = generateClientQgisScript(selectedLayers, false);
      data = {
        count: selectedLayers.length,
        script: clientScript
      };
    }

    if (data) {
      document.getElementById("export-count-text").textContent = `已成功为 ${data.count} 款选定底图生成专属 PyQGIS 自动化导入脚本`;
      document.getElementById("script-code-box").textContent = data.script;


      
      const downloadBtn = document.getElementById("download-script-btn");
      downloadBtn.onclick = () => {
        const blob = new Blob([data.script], { type: "text/x-python;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = data.filename || "qgis_import_basemaps.py";
        a.click();
        URL.revokeObjectURL(url);
        showToast("脚本已开始下载！");
        incrementLocalDownloads();
      };

      document.getElementById("copy-script-btn").onclick = () => {
        copyText(data.script, "已成功复制 Python 脚本到剪贴板！");
        incrementLocalDownloads();
      };

      openModal("checkout-modal");
      closeCart();
      loadStats();
    } else {
      showToast(json.message || "导出生成失败");
    }
  } catch (err) {
    console.error("生成脚本失败:", err);
    showToast("生成脚本失败，请检查服务连接");
  }
}

// --- Live Online Map Caller Engine ---
function resolveLeafletTileLayer(layer, targetSublayerId = null) {
  let url = (layer.url || '').split('\n')[0].trim();
  
  // 替换通用变量写法
  url = url.replace(/\{\$z\}/g, '{z}').replace(/\{\$x\}/g, '{x}').replace(/\{\$y\}/g, '{y}');

  // 1. 插件类提示
  if (layer.format === '插件类' || !url) {
    return {
      layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { opacity: 0.35 }),
      status: 'warn',
      statusText: 'ℹ️ 插件类（推荐在 QGIS 中通过插件使用）'
    };
  }

  // 1.5 矢量切片 (MVT / PBF) Web 端适配（优先使用 MapLibre GL 实时矢量渲染）
  if (layer.format === 'VEC') {
    const rawLines = (layer.url || '').split('\n').map(l => l.trim()).filter(Boolean);
    const tileUrl = rawLines[0] || '';
    const styleUrl = rawLines[1] || (tileUrl.endsWith('.json') ? tileUrl : '');

    // 若当前环境已成功加载 MapLibre GL + Leaflet 桥接插件
    if (typeof L.maplibreGL === 'function' && styleUrl) {
      try {
        const glLayer = L.maplibreGL({
          style: styleUrl,
          attribution: '© OpenStreetMap contributors, VersaTiles'
        });
        return {
          layer: glLayer,
          isMaplibre: true,
          status: 'ok',
          statusText: '🟢 MVT 矢量切片 (MapLibre 矢量实时渲染)'
        };
      } catch (err) {
        console.warn('MapLibre GL 初始化失败，回退降级:', err);
      }
    }

    return {
      layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { opacity: 0.65 }),
      status: 'warn',
      statusText: 'ℹ️ MVT 矢量切片（WebGL渲染组件加载中，已展示参考基底）'
    };
  }

  // 2. 针对已知 WMS/WMTS 标准服务适配为高清切片或 WMS 请求
  if (layer.format === 'WMS/WMTS' || (layer.url && (layer.url.includes('service=WMS') || layer.url.includes('WMTS') || layer.url.includes('service')))) {
    const cap = state.wmsCapabilities[layer.id];
    const sublayerId = targetSublayerId || state.activeSublayerId || (cap && cap.layers && cap.layers[0] ? cap.layers[0].id : null);

    if (url.includes('tiles.maps.eox.at')) {
      const sId = sublayerId || 's2cloudless-2020_3857';
      const isPng = sId.includes('overlay') || sId.includes('graticules');
      const ext = isPng ? 'png' : 'jpg';
      return {
        layer: L.tileLayer(`https://tiles.maps.eox.at/wmts/1.0.0/${sId}/default/GoogleMapsCompatible/{z}/{y}/{x}.${ext}`, {
          maxZoom: 18,
          attribution: 'Sentinel-2 cloudless by EOX'
        }),
        status: 'ok',
        statusText: `🟢 哨兵2号 - ${sId} (Live)`
      };
    }
    if (url.includes('map.geoq.cn')) {
      return {
        layer: L.tileLayer('https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 18
        }),
        status: 'ok',
        statusText: '🟢 GeoQ 在线底图服务 (Live)'
      };
    }
    if (url.includes('thematic.geoq.cn')) {
      return {
        layer: L.tileLayer('https://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 13
        }),
        status: 'ok',
        statusText: '🟢 GeoQ 水系专题服务 (Live)'
      };
    }
    if (url.includes('wayback.maptiles.arcgis.com')) {
      return {
        layer: L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 18
        }),
        status: 'ok',
        statusText: '🟢 Wayback 历史遥感影像 (Live)'
      };
    }
    if (url.includes('terrestris.de/osm/service')) {
      const sId = sublayerId || 'OSM-WMS';
      return {
        layer: L.tileLayer.wms('https://ows.terrestris.de/osm/service', {
          layers: sId,
          format: 'image/png',
          transparent: true,
          maxZoom: 19
        }),
        status: 'ok',
        statusText: `🟢 terrestris WMS - ${sId} (Live)`
      };
    }
    if (url.includes('maps.heigit.org/osmlanduse') || (layer.name && layer.name.includes('土地利用'))) {
      const sId = sublayerId || 'osmlanduse:osm_lulc_combined_osm4eo';
      // 土地利用为透明专题图斑，叠加轻量参考底图防止黑屏或空白感
      const baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        opacity: 0.55,
        attribution: '&copy; OpenStreetMap'
      });
      const wmsLayer = L.tileLayer.wms('https://maps.heigit.org/osmlanduse/service', {
        layers: sId,
        format: 'image/png',
        transparent: true,
        maxZoom: 19,
        version: '1.1.1',
        attribution: 'OSM Landuse &copy; HeiGIT'
      });
      const group = L.layerGroup([baseMap, wmsLayer]);
      group.setParams = (params) => {
        if (typeof wmsLayer.setParams === 'function') {
          wmsLayer.setParams(params);
        }
      };
      return {
        layer: group,
        wmsLayer: wmsLayer,
        status: 'ok',
        statusText: `🟢 OSM土地利用 - ${sId} (Live + 参考底图)`
      };
    }
    if (url.includes('geovisearth.com')) {
      const rawToken = localStorage.getItem('geovis_token') || '';
      // 仅允许 ASCII 字母、数字与常见 token 符号，过滤其他字符，防止 URL 注入
      const userToken = encodeURIComponent(rawToken.replace(/[^\w\-._~+/=]/g, ''));
      const sId = encodeURIComponent((sublayerId || 'img_d').replace(/[^\w\-._]/g, ''));
      if (userToken) {
        return {
          layer: L.tileLayer(`https://tiles.geovisearth.com/base/v1/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${sId}&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles&token=${userToken}`, {
            maxZoom: 18,
            attribution: 'GEOVIS Earth 星图地球'
          }),
          status: 'ok',
          statusText: `🟢 星图地球 - ${decodeURIComponent(sId)} (Token已激活)`
        };
      }
      return {
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { opacity: 0.5 }),
        status: 'warn',
        statusText: 'ℹ️ 星图地球（需个人申请 Token，已展示参考基底）'
      };
    }
    // Generic WMS capabilities fallback
    if (cap && cap.service_type === 'WMS' && cap.base_url) {
      const sId = sublayerId || (cap.layers && cap.layers[0] ? cap.layers[0].id : '');
      return {
        layer: L.tileLayer.wms(cap.base_url, {
          layers: sId,
          format: 'image/png',
          transparent: true,
          maxZoom: 19
        }),
        status: 'ok',
        statusText: `🟢 ${cap.name || 'WMS'} - ${sId} (Live)`
      };
    }
  }

  // 2.5 针对 OpenStreetMap 人道主义地图 (HOT) 优化集群子域名
  if (url.includes('openstreetmap.fr/hot')) {
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      subdomains: ['a', 'b'],
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors, Humanitarian OpenStreetMap Team'
    });
    return {
      layer: tileLayer,
      status: 'ok',
      statusText: '🟢 OSM 人道主义底图 (HOT Live)'
    };
  }

  // 3. 常见 XYZ Tiles 服务直调
  let isTms = url.includes('{-y}');
  let cleanUrl = url;
  if (isTms) {
    cleanUrl = url.replace('{-y}', '{y}');
  }

  // 代理与连通性提示
  let statusClass = 'ok';
  let statusText = '🟢 在线底图已成功加载 (Live)';
  if (layer.needs_vpn) {
    statusClass = 'warn';
    statusText = '⚠️ 境外源（国内网络加载较慢或需代理）';
  }
  if (layer.has_coordinate_drift) {
    statusText += ' [火星坐标系GCJ-02]';
  }

  const tileLayer = L.tileLayer(cleanUrl, {
    maxZoom: 19,
    tms: isTms
  });

  return {
    layer: tileLayer,
    status: statusClass,
    statusText: statusText
  };
}

// --- Tile Network State Listener Engine ---
function attachTileNetworkListeners(tileLayer, resolved) {
  if (!tileLayer) return;

  const statusPill = document.getElementById("preview-map-status");
  const isVpnLayer = !!(state.activePreviewLayer && state.activePreviewLayer.needs_vpn);

  // 1. MapLibre GL 矢量图层状态监听
  if (resolved && resolved.isMaplibre) {
    const bindGlEvents = () => {
      const glMap = typeof tileLayer.getMaplibreMap === 'function' ? tileLayer.getMaplibreMap() : null;
      if (!glMap) return;

      let renderedAny = false;

      const markSuccess = () => {
        renderedAny = true;
        hideVpnFallbackOverlay();
        if (statusPill) {
          statusPill.className = "map-status-pill ok";
          statusPill.innerHTML = `<span class="status-dot ok"></span>🟢 MVT 矢量底图已就绪${isVpnLayer ? '（代理已连通）' : ' (MapLibre Live)'}`;
        }
      };

      glMap.once('render', markSuccess);
      glMap.once('idle', markSuccess);
      glMap.once('load', markSuccess);

      glMap.on('error', (e) => {
        // 忽略非核心静态资源（如字体包、雪碧图404）造成的偶发报错
        // 只有在从未成功渲染任何画面，且发生数据源级致命错误时才提示
        if (!renderedAny && e && e.sourceId && isVpnLayer) {
          showVpnFallbackOverlay(state.activePreviewLayer);
        }
      });
    };

    setTimeout(bindGlEvents, 100);
    return;
  }

  // 2. Leaflet 栅格/WMS 切片瓦片高容错监听引擎
  let loadedTilesCount = 0;
  let failedTilesCount = 0;
  let hasShownSuccess = false;

  const target = (resolved && resolved.wmsLayer) ? resolved.wmsLayer : tileLayer;
  if (!target || typeof target.on !== 'function') return;

  // 核心原则：只要有哪怕 1 个瓦片加载成功，即证明网络物理通畅、代理正在正常工作！
  target.on('tileload', () => {
    loadedTilesCount++;

    // 立即取消超时等待定时器，立即解除任何误弹的遮罩
    if (vpnTimeoutTimer) {
      clearTimeout(vpnTimeoutTimer);
      vpnTimeoutTimer = null;
    }
    hideVpnFallbackOverlay();

    if (!hasShownSuccess) {
      hasShownSuccess = true;
      if (statusPill) {
        statusPill.className = "map-status-pill ok";
        const successText = isVpnLayer
          ? "🟢 境外底图已成功加载 (连接正常)"
          : (resolved.statusText || "🟢 在线底图已成功加载 (Live)");
        statusPill.innerHTML = `<span class="status-dot ok"></span>${escapeHtml(successText)}`;
      }
    }
  });

  target.on('tileerror', () => {
    failedTilesCount++;

    // 如果已经有切片成功加载（哪怕局部或边缘存在个别 404 瓦片），坚决不弹“无代理”！
    if (loadedTilesCount > 0) return;

    // 只有在从未成功加载过任何切片、且连续失败 4 个以上瓦片时，才推定当前网络受限
    if (failedTilesCount >= 4 && isVpnLayer) {
      showVpnFallbackOverlay(state.activePreviewLayer);
    }
  });
}

// --- VPN Fallback & Proxy Detection Engine ---
let vpnTimeoutTimer = null;
let vpnDismissedForCurrentSession = false;

function showVpnFallbackOverlay(layer) {
  if (vpnDismissedForCurrentSession) return;
  const overlay = document.getElementById("preview-vpn-overlay");
  if (!overlay) return;

  overlay.style.display = "flex";

  const statusPill = document.getElementById("preview-map-status");
  if (statusPill) {
    statusPill.className = "map-status-pill warn";
    statusPill.innerHTML = `<span class="status-dot warn"></span>境外源网络受限，切片响应超时`;
  }

  // 铺垫一层低透明度基础参考底图，避免大面积灰黑网格与空白感
  if (state.previewMap && !state.previewFallbackBaseLayer) {
    state.previewFallbackBaseLayer = L.tileLayer('https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      opacity: 0.38
    });
    state.previewFallbackBaseLayer.addTo(state.previewMap);
    state.previewFallbackBaseLayer.bringToBack();
  }
}

function hideVpnFallbackOverlay() {
  if (vpnTimeoutTimer) {
    clearTimeout(vpnTimeoutTimer);
    vpnTimeoutTimer = null;
  }
  const overlay = document.getElementById("preview-vpn-overlay");
  if (overlay) overlay.style.display = "none";

  if (state.previewFallbackBaseLayer && state.previewMap && state.previewMap.hasLayer(state.previewFallbackBaseLayer)) {
    state.previewMap.removeLayer(state.previewFallbackBaseLayer);
    state.previewFallbackBaseLayer = null;
  }
}

function findAlternativeDirectLayer(currentLayer) {
  if (!currentLayer) return null;
  const cats = currentLayer.categories || [];
  
  // 找出所有国内免代理可直连且非插件类的图层
  const candidates = state.layers.filter(l => 
    l.id !== currentLayer.id && 
    !l.needs_vpn && 
    l.format !== "插件类"
  );
  if (candidates.length === 0) return null;

  // 1. 优先匹配相同分类且无边界风险的优质底图
  for (const cat of cats) {
    if (cat === "全部") continue;
    const catMatches = candidates.filter(l => l.categories.includes(cat));
    if (catMatches.length > 0) {
      const compliant = catMatches.find(l => !l.has_boundary_issue);
      return compliant || catMatches[0];
    }
  }

  // 2. 兜底找知名的国内免代理高可用底图（高德、天地图、GeoQ）
  const topDirect = candidates.find(l => 
    l.name.includes("高德") || l.name.includes("天地图") || l.name.includes("GeoQ")
  );
  return topDirect || candidates[0];
}

// --- Live Online Map Preview Modal ---
let previewBoundaryAlertTimer = null;

function hidePreviewBoundaryAlert() {
  const alertBox = document.getElementById("preview-boundary-alert");
  if (!alertBox) return;
  if (previewBoundaryAlertTimer) {
    clearTimeout(previewBoundaryAlertTimer);
    previewBoundaryAlertTimer = null;
  }
  alertBox.classList.add("alert-hidden");
  setTimeout(() => {
    alertBox.style.display = "none";
    alertBox.classList.remove("alert-hidden");
  }, 220);
}

// 查找匹配的 WMS/WMTS 预存能力配置（支持按 ID、服务 URL、名称多重鲁棒匹配）
function findWmsCapabilityForLayer(layer) {
  if (!layer) return null;
  if (layer.id && state.wmsCapabilities[layer.id]) return state.wmsCapabilities[layer.id];
  const url = (layer.url || '').toLowerCase();
  for (const key in state.wmsCapabilities) {
    const cap = state.wmsCapabilities[key];
    if (cap && cap.base_url) {
      const cleanBase = cap.base_url.toLowerCase().split('?')[0];
      if (cleanBase && url.includes(cleanBase)) {
        return cap;
      }
    }
    if (cap && cap.name && (layer.name && (layer.name.includes(cap.name) || cap.name.includes(layer.name)))) {
      return cap;
    }
  }
  return null;
}

function updateSublayerMetaDisplay(layerId, sublayerId) {
  const capData = findWmsCapabilityForLayer({ id: layerId });
  const sublayerObj = capData && capData.layers ? capData.layers.find(s => s.id === sublayerId) : null;
  const sublayerTitle = sublayerObj ? (sublayerObj.title || sublayerId) : (sublayerId || "");

  const metaSublayer = document.getElementById("preview-meta-sublayer");
  if (metaSublayer) {
    metaSublayer.textContent = sublayerId ? `LAYERS=${sublayerId}` : "-";
    metaSublayer.title = sublayerId ? `点击复制子图层标识: ${sublayerId}` : "";
  }
  const metaSublayerTitle = document.getElementById("preview-meta-sublayer-title");
  if (metaSublayerTitle) {
    let desc = "";
    if (sublayerTitle && sublayerTitle !== sublayerId) {
      desc = sublayerTitle;
    }
    if (sublayerObj && sublayerObj.abstract) {
      // 过滤 HTML 标签获取干净摘要
      const cleanAbstract = sublayerObj.abstract.replace(/<[^>]+>/g, '').trim();
      if (cleanAbstract) {
        desc = desc ? `${desc} (${cleanAbstract})` : cleanAbstract;
      }
    }
    metaSublayerTitle.textContent = desc;
    metaSublayerTitle.title = desc;
  }

  // 同步服务 URL 属性与提示
  const urlEl = document.getElementById("preview-meta-url");
  if (urlEl && capData) {
    if (capData.service_type === "WMS") {
      const fullUrl = `${capData.base_url}?SERVICE=WMS&REQUEST=GetMap&LAYERS=${encodeURIComponent(sublayerId)}&FORMAT=image/png&TRANSPARENT=TRUE`;
      urlEl.textContent = fullUrl;
      urlEl.title = `点击复制完整 WMS 调用 URL:\n${fullUrl}`;
    } else if (layerId === "layer_6") {
      const isPng = sublayerId.includes("overlay") || sublayerId.includes("graticules");
      const ext = isPng ? "png" : "jpg";
      const fullUrl = `https://tiles.maps.eox.at/wmts/1.0.0/${sublayerId}/default/GoogleMapsCompatible/{z}/{y}/{x}.${ext}`;
      urlEl.textContent = fullUrl;
      urlEl.title = `点击复制 WMTS 瓦片 URL 模板:\n${fullUrl}`;
    }
  }
}

// 统一配置并挂载预览窗口右上角 WMS/WMTS 子图层下拉浮动面板
function setupPreviewSublayers(layer) {
  if (!layer) return null;
  const layerId = layer.id;
  const capData = findWmsCapabilityForLayer(layer);
  const dock = document.getElementById("preview-sublayer-floating") || document.getElementById("preview-wms-dropdown-dock");
  const sublayerSelect = document.getElementById("preview-sublayer-select") || document.getElementById("preview-wms-select");
  const sublayerCount = document.getElementById("preview-sublayer-count") || document.getElementById("wms-dock-count");
  const sublayerRow = document.getElementById("preview-sublayer-row");

  if (!dock) return null;

  let initialSublayerId = null;

  if (capData && Array.isArray(capData.layers) && capData.layers.length > 0) {
    dock.style.display = "flex";
    if (sublayerRow) sublayerRow.style.display = "flex";
    if (sublayerCount) sublayerCount.textContent = capData.layers.length;
    const toggleCount = document.getElementById("preview-sublayer-toggle-count");
    if (toggleCount) toggleCount.textContent = capData.layers.length;
    dock.classList.remove("expanded");
    const toggleBtn = document.getElementById("wms-dock-toggle-btn");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");

    if (sublayerSelect) {
      sublayerSelect.innerHTML = capData.layers.map(sl => {
        const titleText = sl.title && sl.title !== sl.id ? `${sl.id} · ${sl.title}` : sl.id;
        const cleanAbs = (sl.abstract || '').replace(/<[^>]+>/g, '').trim();
        return `<option value="${escapeHtml(sl.id)}" title="${escapeHtml(cleanAbs || sl.title || sl.id)}">${escapeHtml(titleText)}</option>`;
      }).join('');

      // 智能首选子图层匹配策略：
      // 1. 优先提取图层 URL 中的 LAYERS 参数
      // 2. 针对已知核心多图层服务的黄金首选项
      // 3. 回退为第一项子图层
      let matchUrlLayer = null;
      const urlMatch = (layer.url || '').match(/[?&]LAYERS=([^&]+)/i);
      if (urlMatch && urlMatch[1]) {
        const parsedLayer = decodeURIComponent(urlMatch[1]);
        if (capData.layers.some(l => l.id === parsedLayer)) {
          matchUrlLayer = parsedLayer;
        }
      }

      if (state.activeSublayerId && capData.layers.some(l => l.id === state.activeSublayerId)) {
        initialSublayerId = state.activeSublayerId;
      } else if (matchUrlLayer) {
        initialSublayerId = matchUrlLayer;
      } else if (layerId === "layer_9" && capData.layers.some(l => l.id === "osmlanduse:osm_lulc_combined_osm4eo")) {
        initialSublayerId = "osmlanduse:osm_lulc_combined_osm4eo";
      } else if (layerId === "layer_11" && capData.layers.some(l => l.id === "OSM-WMS")) {
        initialSublayerId = "OSM-WMS";
      } else if (layerId === "layer_6" && capData.layers.some(l => l.id === "s2cloudless-2020_3857")) {
        initialSublayerId = "s2cloudless-2020_3857";
      } else if (layerId === "layer_12" && capData.layers.some(l => l.id === "img_d")) {
        initialSublayerId = "img_d";
      } else {
        initialSublayerId = capData.layers[0].id;
      }

      sublayerSelect.value = initialSublayerId;
    }

    state.activeSublayerId = initialSublayerId;
    updateSublayerMetaDisplay(layerId, initialSublayerId);
    return initialSublayerId;
  } else {
    dock.style.display = "none";
    if (sublayerRow) sublayerRow.style.display = "none";
    state.activeSublayerId = null;
    return null;
  }
}

function openPreviewModal(layerId) {
  const layer = state.layers.find(l => l.id === layerId);
  if (!layer) return;
  state.activePreviewLayer = layer;

  // 底部 URL/说明折叠栏：每次打开默认收起，最大化地图视野
  const metaBox = document.getElementById("preview-meta-box");
  if (metaBox) metaBox.classList.add("collapsed");
  const metaToggle = document.getElementById("preview-meta-toggle");
  if (metaToggle) metaToggle.setAttribute("aria-expanded", "false");

  document.getElementById("preview-modal-title").textContent = `底图预览 · ${layer.name}`;
  const formatEl = document.getElementById("preview-meta-format");
  if (formatEl) formatEl.textContent = layer.format || "-";
  const urlEl = document.getElementById("preview-meta-url");
  if (urlEl) {
    urlEl.textContent = layer.url || "无URL";
    urlEl.title = layer.url ? `点击直接复制 URL:\n${layer.url}` : "";
  }
  const previewDescEl = document.getElementById("preview-meta-desc");
  if (previewDescEl) {
    previewDescEl.innerHTML = formatDescWithLinks(layer.description || "官方切片服务，支持在 QGIS 中高速流畅加载。");
  }

  // 个人 Token 专用处理（针对星图地球等需 Token 鉴权图源）
  const tokenWrap = document.getElementById("preview-token-wrap");
  const tokenInput = document.getElementById("preview-token-input");
  if (layer.url && layer.url.includes("token=")) {
    if (tokenWrap) tokenWrap.style.display = "inline-flex";
    if (tokenInput) tokenInput.value = localStorage.getItem("geovis_token") || "";
  } else {
    if (tokenWrap) tokenWrap.style.display = "none";
  }

  // 初始化 WMS/WMTS 子图层能力列表与右上角下拉浮动面板
  const initialSublayerId = setupPreviewSublayers(layer);

  // 边界合规告警 (悬浮在地图内)
  const boundaryAlertBox = document.getElementById("preview-boundary-alert");
  const boundaryAlertText = document.getElementById("preview-boundary-alert-text");

  if (previewBoundaryAlertTimer) {
    clearTimeout(previewBoundaryAlertTimer);
    previewBoundaryAlertTimer = null;
  }

  if (boundaryAlertBox) {
    boundaryAlertBox.classList.remove("alert-hidden");
  }

  if (layer.has_boundary_issue) {
    if (boundaryAlertBox) {
      boundaryAlertBox.style.display = "flex";
      // 5 秒后自动平滑关闭
      previewBoundaryAlertTimer = setTimeout(() => {
        hidePreviewBoundaryAlert();
      }, 5000);
    }
    if (boundaryAlertText) {
      boundaryAlertText.innerHTML = `<span class="svg-icon" style="display:inline-flex; align-items:center; margin-right:5px; vertical-align:-1px;">${ICONS.warning}</span>此图源国界线（藏南、阿克赛钦、南海诸岛、黑瞎子岛）不规范`;
    }
  } else {
    if (boundaryAlertBox) boundaryAlertBox.style.display = "none";
  }

  // 弹窗内的加入配置单按钮状态
  updatePreviewCartButton(layerId);

  // 打开弹窗
  openModal("preview-modal");

  // 初始化或重置 Leaflet 地图
  initOrUpdatePreviewMap(layer, initialSublayerId);
}

// 底部元信息折叠栏开关
function togglePreviewMeta() {
  const box = document.getElementById("preview-meta-box");
  const toggle = document.getElementById("preview-meta-toggle");
  if (!box) return;
  const collapsed = box.classList.toggle("collapsed");
  if (toggle) toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
}

function updatePreviewCartButton(layerId) {
  const btn = document.getElementById("preview-add-cart-btn");
  if (!btn) return;
  const inCart = state.cart.has(layerId);
  btn.className = `add-cart-btn ${inCart ? 'added' : ''}`;
  btn.textContent = inCart ? '✓ 已在配置单' : '+ 加入配置单';
  btn.onclick = () => {
    toggleCart(layerId);
    updatePreviewCartButton(layerId);
  };
}

function switchPreviewSublayer(sublayerId) {
  if (!state.activePreviewLayer) return;
  const layer = state.activePreviewLayer;
  state.activeSublayerId = sublayerId;

  // 1. 同步下拉菜单当前选中值（若外部或代码调用触发）
  const sublayerSelect = document.getElementById("preview-sublayer-select") || document.getElementById("preview-wms-select");
  if (sublayerSelect && sublayerSelect.value !== sublayerId) {
    sublayerSelect.value = sublayerId;
  }

  // 2. 同步元数据行
  updateSublayerMetaDisplay(layer.id, sublayerId);

  // 3. 实时切换重绘 Leaflet 图层
  const capData = findWmsCapabilityForLayer(layer);
  const isWms = capData && capData.service_type === "WMS";

  if (state.previewMap) {
    if (isWms && state.activeTileLayer && typeof state.activeTileLayer.setParams === 'function') {
      // WMS 标准服务：调用 setParams 直接触发 Leaflet 重绘新子图层
      state.activeTileLayer.setParams({ layers: sublayerId });
      const statusPill = document.getElementById("preview-map-status");
      if (statusPill) {
        statusPill.className = "map-status-pill ok";
        statusPill.innerHTML = `<span class="status-dot ok"></span>🟢 ${escapeHtml(sublayerId)} (Live)`;
      }
    } else {
      // WMTS 或新图层重建
      if (state.activeTileLayer) {
        state.previewMap.removeLayer(state.activeTileLayer);
        state.activeTileLayer = null;
      }
      const resolved = resolveLeafletTileLayer(layer, sublayerId);
      state.activeTileLayer = resolved.layer;
      attachTileNetworkListeners(state.activeTileLayer, resolved);
      state.activeTileLayer.addTo(state.previewMap);
    }
  }

  showToast(`已切换至子图层: ${sublayerId}`);
}

function copyCurrentSublayerId() {
  if (state.activeSublayerId) {
    copyText(state.activeSublayerId, `已复制子图层名称: ${state.activeSublayerId}`);
  } else {
    showToast("当前图层无可用子图层");
  }
}

function initOrUpdatePreviewMap(layer, sublayerId = null) {
  const mapContainer = document.getElementById("leaflet-map");
  if (!mapContainer) return;

  // 重置并初始化境外代理连通性状态
  hideVpnFallbackOverlay();
  vpnDismissedForCurrentSession = false;

  // 初始状态提示：如果是境外源，先给一个连接中状态，不盲目弹窗
  const statusPill = document.getElementById("preview-map-status");
  if (statusPill && layer.needs_vpn) {
    statusPill.className = "map-status-pill warn";
    statusPill.innerHTML = `<span class="status-dot warn"></span>🟡 境外底图连接中...`;
  }

  // 9秒宽限超时保护：仅在整屏所有瓦片彻底没有任何响应时才提示
  if (layer.needs_vpn) {
    vpnTimeoutTimer = setTimeout(() => {
      const isStillPending = statusPill && statusPill.textContent.includes("连接中");
      if (isStillPending && !vpnDismissedForCurrentSession) {
        showVpnFallbackOverlay(layer);
      }
    }, 9000);
  }

  // 如果地图尚未初始化
  if (!state.previewMap) {
    state.previewMap = L.map("leaflet-map", {
      center: CHINA_CENTER,
      zoom: 4,
      minZoom: 0,
      maxZoom: 19,
      attributionControl: false
    });
    L.control.attribution({ position: "bottomleft", prefix: false }).addTo(state.previewMap);
    initLocateControl(state.previewMap);
  } else {
    state.previewMap.setMinZoom(0);
    initLocateControl(state.previewMap);
  }

  // 移除旧图层
  if (state.activeTileLayer) {
    state.previewMap.removeLayer(state.activeTileLayer);
    state.activeTileLayer = null;
  }

  // 调用解析器获取在线瓦片图层
  const currentSublayerId = sublayerId || state.activeSublayerId;
  const resolved = resolveLeafletTileLayer(layer, currentSublayerId);
  state.activeTileLayer = resolved.layer;
  attachTileNetworkListeners(state.activeTileLayer, resolved);
  state.activeTileLayer.addTo(state.previewMap);

  // 更新状态药丸（如果非境外需代理图层，直接应用解析状态）
  if (statusPill && !layer.needs_vpn) {
    statusPill.className = `map-status-pill ${resolved.status}`;
    statusPill.innerHTML = `<span class="status-dot ${resolved.status}"></span>${escapeHtml(resolved.statusText)}`;
  }

  // 根据图层特性智能选择初始范围（OSM/人道主义地图默认成都绕城，地形图等默认中国全图）
  applyLayerDefaultView(layer);

  // 延迟微调，适应弹窗过渡动画
  setTimeout(() => {
    if (state.previewMap) {
      state.previewMap.invalidateSize();
      applyLayerDefaultView(layer);
    }
  }, 180);

  // 处理 GeoJSON 边界高亮开关（仅对存在边界问题的图源显示，默认开启；无边界问题则隐藏并关闭）
  const geojsonToggleWrap = document.getElementById("wrap-toggle-boundary-geojson");
  const geojsonToggle = document.getElementById("toggle-boundary-geojson");
  if (geojsonToggleWrap) {
    geojsonToggleWrap.style.display = layer.has_boundary_issue ? "" : "none";
  }
  if (geojsonToggle) {
    if (layer.has_boundary_issue) {
      geojsonToggle.checked = true;
      toggleBoundaryGeoJson(true);
    } else {
      geojsonToggle.checked = false;
      toggleBoundaryGeoJson(false);
    }
  }
}

function toggleBoundaryGeoJson(show) {
  if (!state.previewMap) return;

  if (!show) {
    if (state.boundaryGeoJsonLayer && state.previewMap.hasLayer(state.boundaryGeoJsonLayer)) {
      state.previewMap.removeLayer(state.boundaryGeoJsonLayer);
    }
    return;
  }

  if (state.boundaryGeoJsonLayer) {
    if (!state.previewMap.hasLayer(state.boundaryGeoJsonLayer)) {
      state.boundaryGeoJsonLayer.addTo(state.previewMap);
    }
    state.boundaryGeoJsonLayer.bringToFront();
    return;
  }

  function renderBoundaryGeoJson(data) {
    state.boundaryGeoJsonLayer = L.geoJSON(data, {
      style: {
        color: "#dc2626",
        weight: 2.5,
        opacity: 0.95,
        dashArray: "6, 6",
        fillColor: "#ef4444",
        fillOpacity: 0.25
      },
      onEachFeature: (feature, layer) => {
        const p = feature.properties;
        layer.bindTooltip(`⚠️ ${escapeHtml(p.name)}`, {
          sticky: true,
          direction: "top",
          className: "boundary-risk-tooltip"
        });
        layer.bindPopup(`
          <div style="font-size:0.82rem; min-width:210px; padding:2px;">
            <strong style="display:inline-flex; align-items:center; gap:4px; color:#b91c1c;">
              <span class="svg-icon">${ICONS.warning}</span> ${escapeHtml(p.name)}
            </strong>
            <div style="margin-top:4px; color:#475569; font-size:0.75rem; line-height:1.45;">
              ${escapeHtml(p.risk || '存在国界线/岛礁归属标注画法问题')}
            </div>
          </div>
        `);
      }
    }).addTo(state.previewMap);
    state.boundaryGeoJsonLayer.bringToFront();
  }

  // 优先异步拉取，失败或脱机秒级降级使用内联常量数据
  fetch("./geojson/boundary_issues_sample.geojson")
    .then(res => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    })
    .then(data => renderBoundaryGeoJson(data))
    .catch(() => {
      renderBoundaryGeoJson(BOUNDARY_ISSUES_GEOJSON);
    });
}

// --- Modal & Drawer UI Utilities ---
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
  if (id === "preview-modal") {
    hidePreviewBoundaryAlert();
    hideVpnFallbackOverlay();
    // 关闭弹窗时同步退出全屏态（原生全屏 + CSS 全屏类）
    if (modal && modal.classList.contains("preview-fullscreen")) {
      exitPreviewFullscreen(modal);
    }
  }
  const anyOpen = document.querySelector(".modal-backdrop.open, .cart-drawer.open");
  if (!anyOpen) {
    document.body.style.overflow = "";
  }
}

// --- Preview Fullscreen (更大看图视野) ---
function togglePreviewFullscreen() {
  const modal = document.getElementById("preview-modal");
  if (!modal) return;
  if (modal.classList.contains("preview-fullscreen")) {
    exitPreviewFullscreen(modal);
  } else {
    enterPreviewFullscreen(modal);
  }
}

function enterPreviewFullscreen(modal) {
  modal.classList.add("preview-fullscreen");
  setFullscreenBtnText("退出全屏");
  // 原生全屏隐藏浏览器地址栏/标签栏；不支持的环境（iOS Safari 对元素全屏）仅靠 CSS 铺满
  const root = modal.querySelector(".modal-window") || modal;
  if (root.requestFullscreen) {
    root.requestFullscreen().catch(() => {});
  } else if (root.webkitRequestFullscreen) {
    root.webkitRequestFullscreen();
  }
  schedulePreviewMapResize();
}

function exitPreviewFullscreen(modal) {
  modal.classList.remove("preview-fullscreen");
  setFullscreenBtnText("全屏");
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  schedulePreviewMapResize();
}

function setFullscreenBtnText(text) {
  const el = document.getElementById("fullscreen-btn-text");
  if (el) el.textContent = text;
}

// 原生全屏被 Esc/系统手势退出时，同步清理 CSS 全屏态与按钮文案
document.addEventListener("fullscreenchange", () => {
  const modal = document.getElementById("preview-modal");
  if (modal && !document.fullscreenElement && modal.classList.contains("preview-fullscreen")) {
    modal.classList.remove("preview-fullscreen");
    setFullscreenBtnText("全屏");
    schedulePreviewMapResize();
  }
});

function schedulePreviewMapResize() {
  setTimeout(() => {
    if (state.previewMap) state.previewMap.invalidateSize();
  }, 220);
}

function openCart() {
  document.body.classList.add("cart-open");
  const fc = document.getElementById("floating-cart-container");
  if (fc) fc.classList.add("drawer-open");
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-backdrop").classList.add("open");
  document.body.style.overflow = "hidden";
  renderCartDrawer();
}

function closeCart() {
  document.body.classList.remove("cart-open");
  const fc = document.getElementById("floating-cart-container");
  if (fc) fc.classList.remove("drawer-open");
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.style.transform = "";
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-backdrop").classList.remove("open");
  const anyOpen = document.querySelector(".modal-backdrop.open");
  if (!anyOpen) {
    document.body.style.overflow = "";
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// 用于 onclick="fn('...')" 这类"HTML 属性内嵌单引号 JS 字符串"的嵌套上下文：
// 先做 JS 字符串级转义（\ 和引号），再整体做 HTML 属性转义；
// 直接用 escapeHtml 不够——HTML 解码后 &#39; 会还原成 ' 破坏 JS 字符串。
function escapeAttrJs(str) {
  if (str === null || str === undefined) return "";
  const jsEscaped = String(str)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/[\r\n]/g, " ");
  return escapeHtml(jsEscaped);
}

function formatDescWithLinks(str) {
  if (!str) return "";
  const escaped = escapeHtml(str);
  // 严格匹配纯 ASCII 合法 URL 结构，遇到汉字、中文标点或边界字符立即终止，确保仅提取准确的超链接
  const urlRegex = /(https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'*+,;=%]+[a-zA-Z0-9_\-/])/g;
  return escaped.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline; word-break: break-all;" onclick="event.stopPropagation()">$1</a>');
}

// --- Event Listeners Binding ---
function initEventListeners() {
  // 主题切换
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // 搜索
  document.getElementById("search-input").addEventListener("input", e => {
    state.searchQuery = e.target.value.trim();
    renderLayers();
  });

  // 排序
  document.getElementById("sort-select").addEventListener("change", e => {
    state.currentSort = e.target.value;
    renderLayers();
  });

  // 视图切换 (纯 SVG 矢量图标)
  const btnGrid = document.getElementById("view-btn-grid");
  const btnTable = document.getElementById("view-btn-table");
  if (btnGrid) {
    btnGrid.addEventListener("click", () => {
      state.viewMode = "grid";
      btnGrid.classList.add("active");
      if (btnTable) btnTable.classList.remove("active");
      if (typeof hideTablePopoverDirect === "function") hideTablePopoverDirect();
      renderLayers();
    });
  }
  if (btnTable) {
    btnTable.addEventListener("click", () => {
      state.viewMode = "table";
      btnTable.classList.add("active");
      if (btnGrid) btnGrid.classList.remove("active");
      renderLayers();
    });
  }

  // 手机端成熟下拉选择器
  const mobileCatSelect = document.getElementById("mobile-category-select");
  if (mobileCatSelect) {
    mobileCatSelect.addEventListener("change", e => {
      toggleCategoryFilter(e.target.value);
    });
  }

  // 过滤复选框
  document.getElementById("chk-direct").addEventListener("change", e => {
    state.filterDirectOnly = e.target.checked;
    if (state.filterDirectOnly) state.filterVpnOnly = false;
    renderLayers();
  });

  document.getElementById("chk-boundary").addEventListener("change", e => {
    state.filterNoBoundary = e.target.checked;
    if (state.filterNoBoundary) state.filterBoundaryOnly = false;
    renderLayers();
  });

  document.getElementById("chk-drift").addEventListener("change", e => {
    state.filterNoDrift = e.target.checked;
    if (state.filterNoDrift) state.filterDriftOnly = false;
    renderLayers();
  });

  document.getElementById("chk-xyz").addEventListener("change", e => {
    state.filterXyzOnly = e.target.checked;
    renderLayers();
  });

  // 购物车抽屉按钮
  document.getElementById("header-cart-btn").addEventListener("click", openCart);
  document.getElementById("floating-cart-btn").addEventListener("click", openCart);
  document.getElementById("close-cart-btn").addEventListener("click", closeCart);
  document.getElementById("cart-backdrop").addEventListener("click", closeCart);
  document.getElementById("drawer-clear-btn").addEventListener("click", clearCart);

  // 结算按钮
  document.getElementById("drawer-checkout-btn").addEventListener("click", handleCheckout);

  // 预设按钮
  document.getElementById("preset-direct").addEventListener("click", () => applyPreset("top10_direct"));
  document.getElementById("preset-imagery").addEventListener("click", () => applyPreset("imagery"));
  document.getElementById("preset-compliant").addEventListener("click", () => applyPreset("compliant"));

  // 地图视口重置按钮
  const btnResetChina = document.getElementById("btn-reset-china-view");
  if (btnResetChina) {
    btnResetChina.addEventListener("click", () => {
      resetToChinaView();
      showToast("已切换至【中国全图】宏观视野");
    });
  }

  const btnResetWorld = document.getElementById("btn-reset-world-view");
  if (btnResetWorld) {
    btnResetWorld.addEventListener("click", () => {
      resetToWorldView();
      showToast("已切换至【全球全图】宏观视野（南北极完全可见）");
    });
  }

  // GeoJSON 边界风险开关
  const geojsonToggle = document.getElementById("toggle-boundary-geojson");
  if (geojsonToggle) {
    geojsonToggle.addEventListener("change", e => {
      toggleBoundaryGeoJson(e.target.checked);
    });
  }

  // WMS/WMTS 移动端子图层折叠与展开控制
  const wmsToggleBtn = document.getElementById("wms-dock-toggle-btn");
  const wmsDock = document.getElementById("preview-sublayer-floating");
  const wmsCloseBtn = document.getElementById("wms-dock-close-btn");

  if (wmsToggleBtn && wmsDock) {
    wmsToggleBtn.addEventListener("click", e => {
      e.stopPropagation();
      const isExpanded = wmsDock.classList.toggle("expanded");
      wmsToggleBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
  }

  if (wmsCloseBtn && wmsDock) {
    wmsCloseBtn.addEventListener("click", e => {
      e.stopPropagation();
      wmsDock.classList.remove("expanded");
      if (wmsToggleBtn) wmsToggleBtn.setAttribute("aria-expanded", "false");
    });
  }

  // 点击地图画布或弹窗空白处自动收起子图层下拉
  const previewMapWrap = document.getElementById("leaflet-map");
  if (previewMapWrap && wmsDock) {
    previewMapWrap.addEventListener("click", () => {
      if (wmsDock.classList.contains("expanded")) {
        wmsDock.classList.remove("expanded");
        if (wmsToggleBtn) wmsToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // WMS/WMTS 子图层快速切换下拉选择
  const sublayerSelect = document.getElementById("preview-sublayer-select") || document.getElementById("preview-wms-select");
  if (sublayerSelect) {
    sublayerSelect.addEventListener("change", e => {
      switchPreviewSublayer(e.target.value);
      // 移动端选择后自动收起列表，释放视野
      if (window.innerWidth <= 768 && wmsDock) {
        setTimeout(() => {
          wmsDock.classList.remove("expanded");
          if (wmsToggleBtn) wmsToggleBtn.setAttribute("aria-expanded", "false");
        }, 120);
      }
    });
  }

  // 复制当前选中的子图层名称
  const copySublayerBtn = document.getElementById("preview-copy-sublayer-btn") || document.getElementById("wms-dock-copy-btn");
  if (copySublayerBtn) {
    copySublayerBtn.addEventListener("click", copyCurrentSublayerId);
  }

  const copySublayerMetaBtn = document.getElementById("preview-copy-sublayer-meta-btn");
  if (copySublayerMetaBtn) {
    copySublayerMetaBtn.addEventListener("click", copyCurrentSublayerId);
  }

  // 个人 Token 应用与存储（如星图地球等）
  const tokenApplyBtn = document.getElementById("preview-token-apply-btn");
  const tokenInput = document.getElementById("preview-token-input");
  if (tokenApplyBtn && tokenInput) {
    const applyToken = () => {
      const val = tokenInput.value.trim();
      localStorage.setItem("geovis_token", val);
      if (state.activePreviewLayer) {
        initOrUpdatePreviewMap(state.activePreviewLayer, state.activeSublayerId);
        showToast(val ? "已保存 Token 并加载星图地球真实切片！" : "已清除 Token，展示参考基底");
      }
    };
    tokenApplyBtn.addEventListener("click", applyToken);
    tokenInput.addEventListener("keydown", e => {
      if (e.key === "Enter") applyToken();
    });
  }

  // 境外底图未开代理友好提示操作按钮
  const btnVpnSwitch = document.getElementById("btn-vpn-switch-direct");
  if (btnVpnSwitch) {
    btnVpnSwitch.addEventListener("click", () => {
      const alt = findAlternativeDirectLayer(state.activePreviewLayer);
      if (alt) {
        hideVpnFallbackOverlay();
        openPreviewModal(alt.id);
        showToast(`已为您切换至国内直连同类底图：【${alt.name}】`);
      } else {
        showToast("暂未找到匹配的同类直连底图");
      }
    });
  }

  const btnVpnDismiss = document.getElementById("btn-vpn-dismiss");
  if (btnVpnDismiss) {
    btnVpnDismiss.addEventListener("click", () => {
      vpnDismissedForCurrentSession = true;
      hideVpnFallbackOverlay();
      showToast("已保留当前视图。若开启代理软件后缩放或漫游地图，切片将自动刷新");
    });
  }

  // 点击遮罩背景关闭弹窗 (Click Outside to Close)
  const previewModal = document.getElementById("preview-modal");
  if (previewModal) {
    previewModal.addEventListener("click", e => {
      if (e.target === previewModal) closeModal("preview-modal");
    });
  }

  const checkoutModal = document.getElementById("checkout-modal");
  if (checkoutModal) {
    checkoutModal.addEventListener("click", e => {
      if (e.target === checkoutModal) closeModal("checkout-modal");
    });
  }

  // 键盘快捷键 (按 Escape 键一键关闭所有弹窗与抽屉)
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal("preview-modal");
      closeModal("checkout-modal");
      closeCart();
    }
  });
}


// --- Preview Modal Copy URL ---
function copyPreviewUrl() {
  const layer = state.activePreviewLayer;
  if (layer && layer.url) {
    copyText(layer.url, "已复制底图服务 URL");
  } else {
    showToast("当前图层无有效服务 URL");
  }
}

// --- Plaintext Copy Utility ---
// HTTP 非安全上下文中 navigator.clipboard 为 undefined，直接调用会抛同步 TypeError，
// 因此必须探测存在性并提供 execCommand 降级，保证任何环境下复制都有成功/失败提示。
function legacyCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-9999px";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

function copyText(text, successMsg) {
  if (!text) return;
  const onSuccess = () => showToast(successMsg || "已成功复制到剪贴板！");
  const onFail = () => showToast(legacyCopyText(text) ? onSuccess() : "复制失败，请手动选择复制");
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    navigator.clipboard.writeText(text).then(onSuccess).catch(onFail);
  } else {
    onFail();
  }
}

// --- Bottom Disclaimer Banner Controller (Mobile & iPad Auto-dismiss) ---
let bottomBannerTimer = null;

function dismissBottomBanner() {
  const el = document.getElementById("bottom-disclaimer-banner");
  if (!el) return;
  if (bottomBannerTimer) {
    clearTimeout(bottomBannerTimer);
    bottomBannerTimer = null;
  }
  el.classList.add("banner-hidden");
  setTimeout(() => {
    el.style.display = "none";
  }, 240);
}

function checkAndHandleBottomBanner() {
  const banner = document.getElementById("bottom-disclaimer-banner");
  const desc = banner ? banner.querySelector(".bottom-banner-desc") : null;
  if (!banner || !desc || banner.classList.contains("banner-hidden") || banner.style.display === "none") {
    return;
  }

  if (bottomBannerTimer) {
    clearTimeout(bottomBannerTimer);
    bottomBannerTimer = null;
  }

  const width = window.innerWidth;

  if (width < 768) {
    // 1. 移动端手机：作为底部弹窗，显示 5 秒后自动消失
    bottomBannerTimer = setTimeout(() => {
      dismissBottomBanner();
    }, 5000);
  } else if (width <= 1024) {
    // 2. iPad / 平板端：根据字符是否被截断来决定
    // 先移除展开类，准确测量是否发生溢出截断
    banner.classList.remove("banner-expand-full");
    
    // 浏览器重排检测文本是否被截断
    const isTruncated = desc.scrollWidth > desc.clientWidth;

    if (isTruncated) {
      // 字符被截断：展示全部内容并在 5 秒后自动消失
      banner.classList.add("banner-expand-full");
      bottomBannerTimer = setTimeout(() => {
        dismissBottomBanner();
      }, 5000);
    } else {
      // 字符未被截断：一直悬停显示
    }
  } else {
    // 3. PC 宽屏模式：默认一直悬停
    banner.classList.remove("banner-expand-full");
  }
}

function initBottomBannerAutoDismiss() {
  // 延迟一小段时间等待字体加载和初次排版计算
  setTimeout(checkAndHandleBottomBanner, 150);

  let resizeDebounce = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(checkAndHandleBottomBanner, 200);
  });
}

// ==========================================================================
// Mobile Touch Gestures & Viewport Adaptation Controller
// ==========================================================================
function initMobileGestures() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    let startX = 0;
    let startY = 0;
    let currentDeltaX = 0;
    let isSwiping = false;

    drawer.addEventListener("touchstart", e => {
      if (!drawer.classList.contains("open")) return;
      if (!e.touches || e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentDeltaX = 0;
      isSwiping = false;
    }, { passive: true });

    drawer.addEventListener("touchmove", e => {
      if (!drawer.classList.contains("open")) return;
      if (!e.touches || e.touches.length !== 1) return;

      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;

      // 仅当手势向右滑动（顺着右侧抽屉退出方向）且水平位移大于垂直位移时接管跟手
      if (deltaX > 5 && Math.abs(deltaX) > Math.abs(deltaY)) {
        isSwiping = true;
        currentDeltaX = deltaX;
        drawer.style.transition = "none";
        drawer.style.transform = `translateX(${deltaX}px)`;
      }
    }, { passive: true });

    const finishSwipe = () => {
      if (!isSwiping) return;
      isSwiping = false;
      drawer.style.transition = "";

      // 右滑位移大于 60px 且水平位移占优则触发关闭，否则弹性平滑复原
      if (currentDeltaX > 60) {
        drawer.style.transform = "";
        closeCart();
      } else {
        drawer.style.transform = "";
      }
      currentDeltaX = 0;
    };

    drawer.addEventListener("touchend", finishSwipe, { passive: true });
    drawer.addEventListener("touchcancel", finishSwipe, { passive: true });
  }

  // 视口与屏幕旋转变化时刷新 Leaflet 地图尺寸（防抖 200ms）
  let mapResizeDebounce = null;
  const triggerMapInvalidate = () => {
    clearTimeout(mapResizeDebounce);
    mapResizeDebounce = setTimeout(() => {
      if (state.previewMap) {
        state.previewMap.invalidateSize();
      }
    }, 200);
  };

  window.addEventListener("resize", triggerMapInvalidate, { passive: true });
  window.addEventListener("orientationchange", triggerMapInvalidate, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", triggerMapInvalidate, { passive: true });
  }
}

// ==========================================================================
// Table View Hover Popover Controller (Singleton Preview)
// ==========================================================================
let tableHoverTimer = null;
let tableHoverHideTimer = null;
let currentHoverLayerId = null;

function hideTablePopoverDirect() {
  const popover = document.getElementById("table-hover-popover");
  if (!popover) return;
  clearTimeout(tableHoverTimer);
  clearTimeout(tableHoverHideTimer);
  tableHoverTimer = null;
  tableHoverHideTimer = null;
  popover.classList.remove("visible");
  popover.setAttribute("aria-hidden", "true");
  popover.style.display = "none";
  currentHoverLayerId = null;
}

function initTableHoverPopover() {
  const popover = document.getElementById("table-hover-popover");
  if (!popover) return;

  // 纯触屏模式下不启用 hover 浮层
  const isTouch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if (isTouch) return;

  const thumbImg = document.getElementById("popover-thumb-img");
  const placeholder = document.getElementById("popover-thumb-placeholder");
  const formatBadge = document.getElementById("popover-format-badge");
  const titleEl = document.getElementById("popover-title");
  const tagsEl = document.getElementById("popover-tags");
  const descEl = document.getElementById("popover-desc");

  function hidePopover() {
    clearTimeout(tableHoverTimer);
    tableHoverTimer = null;
    popover.classList.remove("visible");
    popover.setAttribute("aria-hidden", "true");
    setTimeout(() => {
      if (!popover.classList.contains("visible")) {
        popover.style.display = "none";
        currentHoverLayerId = null;
      }
    }, 180);
  }

  function showPopoverForLayer(targetEl, layerId) {
    if (state.viewMode !== "table") return;
    const layer = state.layers.find(l => l.id === layerId);
    if (!layer) return;

    currentHoverLayerId = layerId;

    // 填充数据
    titleEl.textContent = layer.name || "";
    formatBadge.textContent = layer.format || "XYZ";

    if (layer.thumbnail) {
      thumbImg.style.display = "block";
      thumbImg.src = layer.thumbnail;
      thumbImg.alt = layer.name;
      if (placeholder) placeholder.style.display = "none";
    } else {
      thumbImg.style.display = "none";
      if (placeholder) placeholder.style.display = "block";
    }

    // 标签组
    const tagsHtml = [];
    if (layer.categories && layer.categories.length) {
      tagsHtml.push(`<span class="tag tag-cat">${escapeHtml(layer.categories[0])}</span>`);
    }
    if (layer.needs_vpn) {
      tagsHtml.push(`<span class="tag tag-vpn">需代理</span>`);
    } else {
      tagsHtml.push(`<span class="tag tag-direct">直连</span>`);
    }
    if (layer.has_boundary_issue) {
      tagsHtml.push(`<span class="tag tag-boundary">边界警示</span>`);
    }
    if (layer.has_coordinate_drift) {
      tagsHtml.push(`<span class="tag tag-drift">GCJ-02</span>`);
    }
    tagsEl.innerHTML = tagsHtml.join("");

    // 简短描述（去除 HTML 超链接，保持纯文本预览）
    descEl.textContent = (layer.description || "官方切片服务，支持在 QGIS 中高速流畅加载。").replace(/<[^>]*>/g, "");

    // 展现并定位
    popover.style.display = "block";
    positionTablePopover(targetEl, popover);
    popover.setAttribute("aria-hidden", "false");

    // 微任务添加 visible 动画类
    requestAnimationFrame(() => {
      popover.classList.add("visible");
    });
  }

  function positionTablePopover(targetEl, popoverEl) {
    const rect = targetEl.getBoundingClientRect();
    const popoverWidth = popoverEl.offsetWidth || 290;
    const popoverHeight = popoverEl.offsetHeight || 260;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // 横向优先放在名称右侧 14px，若溢出则根据视口空间自适应
    let left = rect.right + 14;
    if (left + popoverWidth > vw - 16) {
      if (rect.left - popoverWidth - 14 > 16) {
        left = rect.left - popoverWidth - 14;
      } else {
        left = Math.max(16, vw - popoverWidth - 16);
      }
    }

    // 纵向居中偏上
    let top = rect.top - 20;
    let isTopPlacement = false;

    if (top + popoverHeight > vh - 16) {
      top = Math.max(16, rect.bottom - popoverHeight + 8);
      isTopPlacement = true;
    }
    if (top < 16) {
      top = 16;
    }

    popoverEl.style.left = `${Math.round(left)}px`;
    popoverEl.style.top = `${Math.round(top)}px`;

    if (isTopPlacement) {
      popoverEl.classList.add("placement-top");
    } else {
      popoverEl.classList.remove("placement-top");
    }
  }

  // 事件委托：监听表格内的名称链接触发
  document.addEventListener("mouseover", e => {
    if (state.viewMode !== "table") return;

    const triggerLink = e.target.closest(".table-layer-title-link");
    const isOverPopover = e.target.closest("#table-hover-popover");

    if (triggerLink) {
      const layerId = triggerLink.getAttribute("data-layer-id");
      if (!layerId) return;

      if (tableHoverHideTimer) {
        clearTimeout(tableHoverHideTimer);
        tableHoverHideTimer = null;
      }

      if (currentHoverLayerId === layerId && popover.classList.contains("visible")) {
        return;
      }

      clearTimeout(tableHoverTimer);
      tableHoverTimer = setTimeout(() => {
        showPopoverForLayer(triggerLink, layerId);
      }, 180); // 180ms 防抖
    } else if (isOverPopover) {
      if (tableHoverHideTimer) {
        clearTimeout(tableHoverHideTimer);
        tableHoverHideTimer = null;
      }
    }
  });

  document.addEventListener("mouseout", e => {
    if (state.viewMode !== "table") return;

    const triggerLink = e.target.closest(".table-layer-title-link");
    const isOverPopover = e.target.closest("#table-hover-popover");

    if (triggerLink) {
      const related = e.relatedTarget;
      if (related && (triggerLink.contains(related) || (popover && popover.contains(related)))) {
        return;
      }
      clearTimeout(tableHoverTimer);
      tableHoverTimer = null;
      tableHoverHideTimer = setTimeout(hidePopover, 120);
    } else if (isOverPopover) {
      const related = e.relatedTarget;
      if (related && (popover.contains(related) || (related.closest && related.closest(".table-layer-title-link")))) {
        return;
      }
      tableHoverHideTimer = setTimeout(hidePopover, 120);
    }
  });

  // 点击悬浮预览卡片可直接打开 Leaflet 交互弹窗漫游
  popover.addEventListener("click", () => {
    if (currentHoverLayerId) {
      const id = currentHoverLayerId;
      hidePopover();
      openPreviewModal(id);
    }
  });

  // 页面滚动、按键或切换时隐藏
  window.addEventListener("scroll", () => {
    if (popover.classList.contains("visible")) {
      hidePopover();
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (popover.classList.contains("visible")) {
      hidePopover();
    }
  });
}

// --- Draggable Floating Cart Button ---
function initDraggableCartBtn() {
  const container = document.getElementById("floating-cart-container");
  const btn = document.getElementById("floating-cart-btn");
  if (!container || !btn) return;

  let isDragging = false;
  let hasMoved = false;
  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;
  let currentPointerId = null;

  // 安全边界计算
  const getBounds = () => {
    const rect = container.getBoundingClientRect();
    const margin = 10;
    const topOffset = 64; // 避开顶部导航栏
    const bottomSafe = window.innerWidth <= 768 ? 84 : 28; // 避开底部安全区与提示条

    return {
      minX: margin,
      maxX: Math.max(margin, window.innerWidth - rect.width - margin),
      minY: topOffset,
      maxY: Math.max(topOffset, window.innerHeight - rect.height - bottomSafe),
      width: rect.width,
      height: rect.height
    };
  };

  // 恢复上次拖动记忆的位置
  const restorePosition = () => {
    try {
      const saved = localStorage.getItem("qgis_cart_btn_pos");
      if (!saved) return;
      const pos = JSON.parse(saved);
      if (!pos || typeof pos.topRatio !== "number") return;

      const bounds = getBounds();
      const left = pos.side === "left" ? bounds.minX : bounds.maxX;
      const top = Math.min(Math.max(bounds.minY, pos.topRatio * window.innerHeight), bounds.maxY);

      container.style.bottom = "auto";
      container.style.right = "auto";
      container.style.left = `${left}px`;
      container.style.top = `${top}px`;
      container.classList.toggle("snapped-left", pos.side === "left");
      container.classList.toggle("snapped-right", pos.side !== "left");
    } catch (e) {
      console.warn("恢复配置单按钮位置失败:", e);
    }
  };

  // 延迟微量时间等待 DOM 布局稳定后恢复位置
  setTimeout(restorePosition, 60);

  // 视口尺寸变化时调整，防越界
  window.addEventListener("resize", () => {
    if (container.style.left && container.style.top) {
      const bounds = getBounds();
      const currentLeft = parseFloat(container.style.left) || 0;
      const currentTop = parseFloat(container.style.top) || 0;

      const isLeft = currentLeft < window.innerWidth / 2;
      const newLeft = isLeft ? bounds.minX : bounds.maxX;
      const newTop = Math.min(Math.max(bounds.minY, currentTop), bounds.maxY);

      container.style.transition = "left 0.2s, top 0.2s";
      container.style.left = `${newLeft}px`;
      container.style.top = `${newTop}px`;
      setTimeout(() => { container.style.transition = ""; }, 220);
    }
  }, { passive: true });

  // Pointer 事件处理（兼容移动端触控与桌面端测试）
  btn.addEventListener("pointerdown", (e) => {
    // 仅响应主按键（触控或鼠标左键）
    if (e.button !== 0 && e.pointerType === "mouse") return;

    isDragging = true;
    hasMoved = false;
    currentPointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;

    const rect = container.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;

    // 捕获指针，防止移出元素断触
    try {
      btn.setPointerCapture(e.pointerId);
    } catch (err) {}

    // 取消吸附过渡动画，立即跟手
    container.style.transition = "none";
  });

  btn.addEventListener("pointermove", (e) => {
    if (!isDragging || e.pointerId !== currentPointerId) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // 位移超过 6px 才判定为拖动，避免轻微点击抖动误判
    if (!hasMoved && (dx * dx + dy * dy) > 36) {
      hasMoved = true;
      container.classList.add("dragging");
    }

    if (hasMoved) {
      // 阻止触屏默认下拉与滚动
      if (e.cancelable) e.preventDefault();

      const bounds = getBounds();
      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      // 视口边界限制
      newLeft = Math.max(bounds.minX - 2, Math.min(bounds.maxX + 2, newLeft));
      newTop = Math.max(bounds.minY, Math.min(bounds.maxY, newTop));

      container.style.bottom = "auto";
      container.style.right = "auto";
      container.style.left = `${newLeft}px`;
      container.style.top = `${newTop}px`;
    }
  });

  const onPointerEnd = (e) => {
    if (!isDragging || e.pointerId !== currentPointerId) return;

    isDragging = false;
    currentPointerId = null;
    try {
      btn.releasePointerCapture(e.pointerId);
    } catch (err) {}

    if (hasMoved) {
      container.classList.remove("dragging");

      // 触发边缘平滑吸附
      const bounds = getBounds();
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const isLeft = centerX < window.innerWidth / 2;

      const targetLeft = isLeft ? bounds.minX : bounds.maxX;
      const targetTop = Math.max(bounds.minY, Math.min(bounds.maxY, rect.top));

      container.style.transition = "left 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28), top 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
      container.style.left = `${targetLeft}px`;
      container.style.top = `${targetTop}px`;

      container.classList.toggle("snapped-left", isLeft);
      container.classList.toggle("snapped-right", !isLeft);

      // 保存位置到 localStorage，下次打开记忆位置
      try {
        localStorage.setItem("qgis_cart_btn_pos", JSON.stringify({
          side: isLeft ? "left" : "right",
          topRatio: targetTop / window.innerHeight
        }));
      } catch (err) {}

      setTimeout(() => {
        container.style.transition = "";
      }, 320);

      // 阻止拖拽释放时误触发 click 打开抽屉
      const blockClick = (clickEvent) => {
        clickEvent.stopPropagation();
        clickEvent.preventDefault();
        btn.removeEventListener("click", blockClick, true);
      };
      btn.addEventListener("click", blockClick, true);
      setTimeout(() => {
        btn.removeEventListener("click", blockClick, true);
      }, 300);
    }
  };

  btn.addEventListener("pointerup", onPointerEnd);
  btn.addEventListener("pointercancel", onPointerEnd);
}




// --- 静态托管 (如 GitHub Pages) 全网累计导出公共计数器 ---
const GLOBAL_COUNTER_BASE_URL = "https://counterapi.com/api/openqgis-mapsource/export/qgis-script";
let lastTrackedExportTime = 0;

async function syncGlobalDownloads() {
  try {
    const res = await fetch(`${GLOBAL_COUNTER_BASE_URL}?readOnly=true&startNumber=18`, {
      method: "GET",
      cache: "no-store"
    });
    if (res.ok) {
      const json = await res.json();
      if (typeof json.value === "number") {
        const globalVal = json.value;
        const dlEl = document.getElementById("stat-downloads");
        if (dlEl) {
          animateCountUp(dlEl, globalVal, 750);
        }
        localStorage.setItem("qgis_site_downloads", globalVal);
        updateCachedStat("downloads", globalVal);
      }
    }
  } catch (e) {
    // 离线/静默降级，不阻塞界面渲染
  }
}

async function incrementLocalDownloads() {
  // 1. 本地即时响应 +1（保证无延迟反馈）
  let localDl = parseInt(localStorage.getItem("qgis_site_downloads") || "19", 10) + 1;
  localStorage.setItem("qgis_site_downloads", localDl);
  updateCachedStat("downloads", localDl);
  const dlEl = document.getElementById("stat-downloads");
  if (dlEl) {
    animateCountUp(dlEl, localDl, 500);
  }

  // 2. 节流防连点刷量（同会话 10 秒内不重复向云端上报）
  const now = Date.now();
  if (now - lastTrackedExportTime < 10000) return;
  lastTrackedExportTime = now;

  // 3. 异步提交至云端公共计数器
  try {
    const res = await fetch(GLOBAL_COUNTER_BASE_URL, {
      method: "GET",
      cache: "no-store"
    });
    if (res.ok) {
      const json = await res.json();
      if (typeof json.value === "number") {
        localStorage.setItem("qgis_site_downloads", json.value);
        updateCachedStat("downloads", json.value);
        if (dlEl) {
          animateCountUp(dlEl, json.value, 500);
        }
      }
    }
  } catch (e) {}
}

// ==========================================================================
// 全局主题匹配自定义 Tooltip 提示窗 (Anti-AI Crafted Design)
// 替换浏览器原生默认 title 黄色提示窗，支持黑白主题自适应、智能避让与高质感微投影
// ==========================================================================
function initCustomTooltip() {
  // 触屏粗指针设备不触发 hover tooltip，避免打扰移动端触控交互
  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  let tooltipEl = document.getElementById("global-custom-tooltip");
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "global-custom-tooltip";
    tooltipEl.className = "custom-tooltip";
    tooltipEl.setAttribute("role", "tooltip");
    tooltipEl.setAttribute("aria-hidden", "true");
    tooltipEl.innerHTML = `<div class="custom-tooltip-arrow" id="custom-tooltip-arrow"></div><div class="custom-tooltip-text" id="custom-tooltip-text"></div>`;
    document.body.appendChild(tooltipEl);
  }

  const textEl = tooltipEl.querySelector("#custom-tooltip-text");
  const arrowEl = tooltipEl.querySelector("#custom-tooltip-arrow");

  let showTimer = null;
  let activeTarget = null;

  function hideTooltip() {
    clearTimeout(showTimer);
    showTimer = null;
    if (tooltipEl.classList.contains("visible")) {
      tooltipEl.classList.remove("visible");
      tooltipEl.setAttribute("aria-hidden", "true");
    }
    activeTarget = null;
  }

  function showTooltip(target, text) {
    if (!text || !text.trim()) return;
    textEl.textContent = text.trim();

    // 预渲染测量尺寸
    tooltipEl.style.left = "-9999px";
    tooltipEl.style.top = "-9999px";
    tooltipEl.classList.remove("placement-top", "placement-bottom");

    const targetRect = target.getBoundingClientRect();
    const tipWidth = tooltipEl.offsetWidth;
    const tipHeight = tooltipEl.offsetHeight;

    const gap = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 针对顶部工具栏与状态栏 (targetRect.top < 110) 优先在正下方展示，避免被视口上缘截断
    let placement = "bottom";
    if (targetRect.top > 120 && (targetRect.top - tipHeight - gap) > 6) {
      placement = "top";
    } else if (viewportHeight - targetRect.bottom < tipHeight + gap + 10 && targetRect.top > tipHeight + gap) {
      placement = "top";
    } else {
      placement = "bottom";
    }

    let top = 0;
    if (placement === "top") {
      top = targetRect.top - tipHeight - gap;
    } else {
      top = targetRect.bottom + gap;
    }

    // 水平居中对齐
    let left = targetRect.left + (targetRect.width / 2) - (tipWidth / 2);
    // 视口安全边距留白 8px
    left = Math.max(8, Math.min(viewportWidth - tipWidth - 8, left));

    // 计算箭头偏移指向目标元素中心
    const targetCenterX = targetRect.left + (targetRect.width / 2);
    let arrowLeft = targetCenterX - left - 3;
    arrowLeft = Math.max(8, Math.min(tipWidth - 14, arrowLeft));
    if (arrowEl) {
      arrowEl.style.left = `${arrowLeft}px`;
    }

    tooltipEl.style.left = `${Math.round(left)}px`;
    tooltipEl.style.top = `${Math.round(top)}px`;
    tooltipEl.classList.add(`placement-${placement}`, "visible");
    tooltipEl.setAttribute("aria-hidden", "false");
  }

  // 统一事件委托处理 mouseover
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-tooltip], [title]");
    if (!target) return;

    // 彻底转移并移除原生 title，杜绝系统默认黄色方块提示
    if (target.hasAttribute("title")) {
      const orig = target.getAttribute("title");
      if (orig && orig.trim()) {
        target.setAttribute("data-tooltip", orig.trim());
      }
      target.removeAttribute("title");
    }

    const tipText = target.getAttribute("data-tooltip");
    if (!tipText) return;

    if (activeTarget === target && tooltipEl.classList.contains("visible")) {
      return;
    }

    clearTimeout(showTimer);
    activeTarget = target;
    // 80ms 舒适微延时，防划过晃眼
    showTimer = setTimeout(() => {
      if (activeTarget === target) {
        showTooltip(target, tipText);
      }
    }, 80);
  }, { passive: true });

  // 移出监听
  document.addEventListener("mouseout", (e) => {
    if (!activeTarget) return;
    const related = e.relatedTarget;
    if (related && (activeTarget === related || activeTarget.contains(related))) {
      return;
    }
    hideTooltip();
  }, { passive: true });

  // 点击、滚动或按 ESC 键时立即收起
  document.addEventListener("click", hideTooltip, { passive: true });
  window.addEventListener("scroll", hideTooltip, { passive: true });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideTooltip();
  }, { passive: true });
}

