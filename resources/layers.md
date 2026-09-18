# QGIS 在线底图资源库 (QGIS Basemap Source Registry)

> 本文档将在线底图资源链接与元数据完全解耦、独立存储与维护。
> 允许根据网站标签与属性规范直接编辑、新增或调整底图配置。

## 标签与属性规范说明

| 属性字段 | 允许值 / 标签格式 | 说明 |
| :--- | :--- | :--- |
| **格式 (Format)** | `XYZ Tiles`, `WMS/WMTS`, `VEC`, `插件类` | 接入协议类型 |
| **分类 (Categories)** | `电子地图`, `地形图`, `影像图`, `标注图`, `铁路地图`, `土地利用图`, `海床图` | 可多选，逗号分隔 |
| **网络标签** | `国内直连` 或 `需VPN` | 网络连通性判定 |
| **边界标签** | `无边界问题` 或 `边界问题` | 国界线合规性判定（阿克赛钦/藏南/南海诸岛/黑瞎子岛/黄岩岛） |
| **坐标标签** | `无坐标偏移` 或 `火星坐标偏移` | WGS84/CGCS2000 标准或 GCJ-02 偏移 |
| **服务链接 (URL)** | 标准 URL 或多行 URL（代码块） | 在线底图服务的标准化请求终结点 |

---

## 电子地图 (29款)

### [layer_10] GeoQ水图
- **格式**: `WMS/WMTS`
- **分类**: 电子地图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 10
- **服务链接**:
```text
http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/WMTS/1.0.0/WMTSCapabilities.xml
```
- **描述**: 水系图，最高支持13级瓦片等级。
- **缩略图**: `/thumbnails/thumb_10.png`

### [layer_11] OSM地图
- **格式**: `WMS/WMTS`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 11
- **服务链接**:
```text
https://ows.terrestris.de/osm/service
```
- **描述**: OSM标准系列地图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_11.png`

### [layer_12] 星图地球-全图层
- **格式**: `WMS/WMTS`
- **分类**: 电子地图, 影像图, 地形图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 12
- **服务链接**:
```text
https://tiles.geovisearth.com/base/v1/wmts/GetCapabilities?tmsIds=w&token=
```
- **描述**: 注意需要从网站申请个人key值，https://datacloud.geovisearth.com/console/application
- **缩略图**: `/thumbnails/thumb_12.png`

### [layer_15] Esri_World_Light_Gray_Base 纯色底图
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 15
- **服务链接**:
```text
https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}
```
- **描述**: Arcgis自带的单色地图
- **缩略图**: `/thumbnails/thumb_15.png`

### [layer_16] Open Topo Map
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 地形图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 16
- **服务链接**:
```text
https://tile.opentopomap.org/{z}/{x}/{y}.png
```
- **描述**: 基于OSM制作的地形地图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_16.png`

### [layer_17] OpenStreetMap
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 需VPN, 边界问题, 无坐标偏移
- **序号**: 17
- **服务链接**:
```text
https://tile.openstreetmap.org/{z}/{x}/{y}.png
```
- **描述**: OSM标准样式地图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_17.png`

### [layer_18] OpenStreetMap.de
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 18
- **服务链接**:
```text
https://tile.openstreetmap.de/{z}/{x}/{y}.png
```
- **描述**: 德国风格渲染。
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_18.png`

### [layer_19] OpenStreetMap.fr
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 需VPN, 边界问题, 无坐标偏移
- **序号**: 19
- **服务链接**:
```text
https://c.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png
https://b.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png
```
- **描述**: 法国风格渲染。
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_19.png`

### [layer_20] OpenStreetMap人道主义地图
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 需VPN, 边界问题, 无坐标偏移
- **序号**: 20
- **服务链接**:
```text
https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png
```
- **描述**: 人道主义地图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_20.png`

### [layer_21] OpenStreetMap.jp
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 21
- **服务链接**:
```text
https://tile.openstreetmap.jp/{z}/{x}/{y}.png
```
- **描述**: 日本风格渲染。
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_21.png`

### [layer_22] OpenStreetMap(Piano)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 22
- **服务链接**:
```text
https://b.piano.tiles.quaidorsay.fr/fr/{$z}/{$x}/{$y}.png
```
- **描述**: 黑白风格底图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_22.png`

### [layer_23] OSM路网
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 需VPN, 边界问题, 无坐标偏移
- **序号**: 23
- **服务链接**:
```text
https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png
```
- **描述**: 精简标注，路网版
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_23.png`

### [layer_24] OSMWinter
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 地形图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 24
- **服务链接**:
```text
http://s0.outdooractive.com/osm/OSMWinter/{z}/{x}/{y}.png
```
- **描述**: OSM冬季运动
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_24.png`

### [layer_25] Cyclosm
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 地形图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 25
- **服务链接**:
```text
https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png
```
- **描述**: 自行车osm地图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_25.png`

### [layer_26] CycleOSM_Waymarked_Trails
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 地形图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 26
- **服务链接**:
```text
https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png
```
- **描述**: 有标记的自行车道路地图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_26.png`

### [layer_33] Windy_outdoor
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 33
- **服务链接**:
```text
https://tiles.windy.com/v1/maptiles/outdoor/256/{z}/{x}/{y}/?lang=en
```
- **描述**: windy底图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_33.png`

### [layer_34] Windy_winter
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 34
- **服务链接**:
```text
https://tiles.windy.com/v1/maptiles/winter/256/{z}/{x}/{y}/?lang=en
```
- **描述**: windy底图
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_34.png`

### [layer_42] NatGeo_World_Map
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 42
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}
```
- **描述**: 可参考的地图风格样式。12
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_42.png`

### [layer_45] WorldHydroMap(China)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 45
- **服务链接**:
```text
https://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}
```
- **描述**: 水图，最高支持13级
- **缩略图**: `/thumbnails/thumb_45.png`

### [layer_50] Bing电子地图
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 50
- **服务链接**:
```text
https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/a{q}.ipeg?g=0&mkt=zh-CN&it=GB,LC&shading=hill&n=t&og=2697&sv=9.38&cstl=s23&o=png&ur=hk
```
- **描述**: 
- **缩略图**: `/thumbnails/thumb_50.png`

### [layer_51] 高德电子地图(GJC02)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 51
- **服务链接**:
```text
http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}
```
- **描述**: 高德地图GCJ02坐标
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_51.png`

### [layer_52] 高德路网标注图(GJC02)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 标注图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 52
- **服务链接**:
```text
https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=2&style=8<ype=11
```
- **描述**: 高德地图GCJ02坐标（透明背景）
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_52.png`

### [layer_53] 高德路网地点标注图(GJC02)
- **格式**: `XYZ Tiles`
- **分类**: 标注图, 电子地图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 53
- **服务链接**:
```text
https://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
```
- **描述**: 高德地图GCJ02坐标加地点名（透明背景）
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_53.png`

### [layer_54] 腾讯电子地图(GJC02)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 54
- **服务链接**:
```text
http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0
```
- **描述**: 注意坐标为GCJ02（与浏览器同步的瓦片地图）
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_54.png`

### [layer_55] 腾讯路网标注图(GJC02)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 55
- **服务链接**:
```text
https://rt0.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=2
```
- **描述**: 道路标注（GCJ02）
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_55.png`

### [layer_56] 腾讯路网标注图（水系）
- **格式**: `XYZ Tiles`
- **分类**: 电子地图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 56
- **服务链接**:
```text
https://rt0.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=3
```
- **描述**: 道路标注水系（GCJ02）
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_56.png`

### [layer_57] 谷歌路网标记图层(GCJ02)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 标注图
- **标签**: 需VPN, 边界问题, 火星坐标偏移
- **序号**: 57
- **服务链接**:
```text
http://mt.google.com/vt?lyrs=h&gl=CN&x={x}&y={y}&z={z}
```
- **描述**: 谷歌路网纯标记图层
- **备注**: 边界问题, 数据漂移
- **缩略图**: `/thumbnails/thumb_57.png`

### [layer_58] 谷歌卫星混合图层(GCJ02)
- **格式**: `XYZ Tiles`
- **分类**: 电子地图, 影像图
- **标签**: 需VPN, 边界问题, 火星坐标偏移
- **序号**: 58
- **服务链接**:
```text
http://mt.google.com/vt?lyrs=s,m&gl=CN&x={x}&y={y}&z={z}
```
- **描述**: 火星坐标的卫星图和标记图层（可完美重叠
- **备注**: 数据漂移, 边界问题
- **缩略图**: `/thumbnails/thumb_58.png`

### [layer_60] OpenStreetMap_vec
- **格式**: `VEC`
- **分类**: 电子地图
- **标签**: 需VPN, 边界问题, 无坐标偏移
- **序号**: 60
- **服务链接**:
```text
https://vector.openstreetmap.org/shortbread_v1/{z}/{x}/{y}.mvt
https://vector.openstreetmap.org/styles/shortbread/colorful.json
```
- **描述**: 
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_60.png`

## 影像图 (7款)

### [layer_6] Sentinel-2 哨兵2全球无云影像产品 WMTS
- **格式**: `WMS/WMTS`
- **分类**: 影像图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 6
- **服务链接**:
```text
https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml
```
- **描述**: 哨兵无云影像
- **缩略图**: `/thumbnails/thumb_6.png`

### [layer_8] Wayback历史地图
- **格式**: `WMS/WMTS`
- **分类**: 影像图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 8
- **服务链接**:
```text
https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapSTrver/WMTS/1.0.0/WMTSCapabilities.xml
```
- **描述**: Wayback历史影像，分区更新，前往 https://livingatlas.arcgis.com/wayback/ 查看详细内容
- **缩略图**: `/thumbnails/thumb_8.png`

### [layer_36] 影像_Eris Imagery
- **格式**: `XYZ Tiles`
- **分类**: 影像图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 36
- **服务链接**:
```text
https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
```
- **描述**: Esri标准影像
- **缩略图**: `/thumbnails/thumb_36.jpg`

### [layer_37] 影像_Bing
- **格式**: `XYZ Tiles`
- **分类**: 影像图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 37
- **服务链接**:
```text
https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1
```
- **描述**: Bing标准影像
- **缩略图**: `/thumbnails/thumb_37.jpg`

### [layer_38] 影像_谷歌原版影像
- **格式**: `XYZ Tiles`
- **分类**: 影像图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 38
- **服务链接**:
```text
https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
```
- **描述**: Google原版影像
- **缩略图**: `/thumbnails/thumb_38.jpg`

### [layer_39] 谷歌原版影像2
- **格式**: `XYZ Tiles`
- **分类**: 影像图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 39
- **服务链接**:
```text
http://khms1.googleapis.com/kh/v=969&x={x}&y={y}&z={z}
```
- **描述**: Google原版影像
- **缩略图**: `/thumbnails/thumb_39.jpg`

### [layer_49] 高德卫星图(GJC02)
- **格式**: `XYZ Tiles`
- **分类**: 影像图
- **标签**: 国内直连, 无边界问题, 火星坐标偏移
- **序号**: 49
- **服务链接**:
```text
https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}
```
- **描述**: 高德卫星图GCJ02坐标
- **备注**: 数据漂移
- **缩略图**: `/thumbnails/thumb_49.png`

## 地形图 (9款)

### [layer_13] Esri Topography Map地形底图
- **格式**: `XYZ Tiles`
- **分类**: 地形图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 13
- **服务链接**:
```text
http://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}
```
- **描述**: Arcgis Pro自带的地形地图（浅色风格）
- **缩略图**: `/thumbnails/thumb_13.png`

### [layer_14] Esri Topography Map(Dark)地形底图（暗）
- **格式**: `XYZ Tiles`
- **分类**: 地形图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 14
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer/tile/{z}/{y}/{x}
```
- **描述**: Arcgis Pro自带的地形地图（深色风格）
- **缩略图**: `/thumbnails/thumb_14.png`

### [layer_35] 地形 Eris Shaded Relief
- **格式**: `XYZ Tiles`
- **分类**: 地形图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 35
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}
```
- **描述**: Arcgis雷达反射地形图
- **缩略图**: `/thumbnails/thumb_35.png`

### [layer_40] World_Physical_Map
- **格式**: `XYZ Tiles`
- **分类**: 地形图, 海床图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 40
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}
```
- **描述**: 海床山体阴影最多支持到7级。8
- **缩略图**: `/thumbnails/thumb_40.png`

### [layer_41] World_Terrain_Base
- **格式**: `XYZ Tiles`
- **分类**: 地形图, 海床图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 41
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}
```
- **描述**: 海洋有分层设色，陆地为山体阴影。8
- **缩略图**: `/thumbnails/thumb_41.png`

### [layer_43] World_Ocean_Base
- **格式**: `XYZ Tiles`
- **分类**: 地形图, 海床图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 43
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}
```
- **描述**: 海洋图。10
- **缩略图**: `/thumbnails/thumb_43.png`

### [layer_46] 谷歌地形图-纯图-灰色
- **格式**: `XYZ Tiles`
- **分类**: 地形图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 46
- **服务链接**:
```text
http://www.google.com/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m1!1e5
```
- **描述**: Google山体阴影
- **缩略图**: `/thumbnails/thumb_46.png`

### [layer_47] 谷歌地形图-纯图-土地利用
- **格式**: `XYZ Tiles`
- **分类**: 土地利用图, 地形图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 47
- **服务链接**:
```text
http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}&s=Ga&apistyle=s.e:l|p.v:off,s.t:1|s.e:g|p.v:off,s.t:21|p.v:off,s.t:20|p.v:off,s.t:2|p.v:off,s.t:3|p.v:off,s.t:3|s.e:l.i|p.v:off,s.t:4|p.v:off
```
- **描述**: Google山体阴影加山体阴影（国内数据老旧，可做参考）
- **缩略图**: `/thumbnails/thumb_47.png`

### [layer_48] 地形_欧洲海洋观测EMODnet
- **格式**: `XYZ Tiles`
- **分类**: 地形图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 48
- **服务链接**:
```text
https://tiles.emodnet-bathymetry.eu/2020/baselayer/web_mercator/{z}/{x}/{y}.png
```
- **描述**: 欧洲海洋观测与数据网络网站的背景底图。高程着色，适合大范围制图。
- **缩略图**: `/thumbnails/thumb_48.png`

## 标注图 (3款)

### [layer_7] ArcGIS标注
- **格式**: `WMS/WMTS`
- **分类**: 标注图
- **标签**: 需VPN, 无边界问题, 无坐标偏移
- **序号**: 7
- **服务链接**:
```text
https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer/WMTS/1.0.0/WMTSCapabilities.xml
```
- **描述**: Arcgis pro自带标注图层（数据非常老旧）
- **缩略图**: `/thumbnails/thumb_7.png`

### [layer_44] World_Ocean_Reference
- **格式**: `XYZ Tiles`
- **分类**: 标注图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 44
- **服务链接**:
```text
https://server.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}
```
- **描述**: 海洋图标注
- **缩略图**: `/thumbnails/thumb_44.png`

### [layer_59] World-Topo-Map_NoLabel
- **格式**: `WMS/WMTS`
- **分类**: 标注图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 59
- **服务链接**:
```text
https://www.arcgis.com/sharing/rest/content/items/5a0e14f7287b4aa5973f6a35638e4b9a/resources/styles/root.json?f=pjson
```
- **描述**: 无标签的地形标注图层
- **缩略图**: `/thumbnails/thumb_59.png`

## 铁路地图 (6款)

### [layer_27] OpenRailwayMap
- **格式**: `XYZ Tiles`
- **分类**: 铁路地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 27
- **服务链接**:
```text
https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png
```
- **描述**: 基于OSM铁路数据的在线PNG底图
- **缩略图**: `/thumbnails/thumb_27.png`

### [layer_28] OpenRailwayMap Maxspeed
- **格式**: `XYZ Tiles`
- **分类**: 铁路地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 28
- **服务链接**:
```text
https://a.tiles.openrailwaymap.org/maxspeed/{z}/{x}/{y}.png
```
- **描述**: ORM最大速度图
- **缩略图**: `/thumbnails/thumb_28.png`

### [layer_29] OpenRailwayMap Signals
- **格式**: `XYZ Tiles`
- **分类**: 铁路地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 29
- **服务链接**:
```text
https://a.tiles.openrailwaymap.org/signals/{z}/{x}/{y}.png
```
- **描述**: ORM信号图
- **缩略图**: `/thumbnails/thumb_29.png`

### [layer_30] OpenRailwayMap Electrified
- **格式**: `XYZ Tiles`
- **分类**: 铁路地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 30
- **服务链接**:
```text
https://a.tiles.openrailwaymap.org/electrified/{z}/{x}/{y}.png
```
- **描述**: ORM电气化图
- **缩略图**: `/thumbnails/thumb_30.png`

### [layer_31] OpenRailwayMap Gauge
- **格式**: `XYZ Tiles`
- **分类**: 铁路地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 31
- **服务链接**:
```text
https://a.tiles.openrailwaymap.org/gauge/{z}/{x}/{y}.png
```
- **描述**: Track gauge（铁路规矩）
- **缩略图**: `/thumbnails/thumb_31.png`

### [layer_32] China Railway Slippy Map
- **格式**: `XYZ Tiles`
- **分类**: 铁路地图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 32
- **服务链接**:
```text
https://tile.renchang.me/{z}/{x}/{y}.png
```
- **描述**: 贵广十标段底图，数据采集自23年9月osm
- **缩略图**: `/thumbnails/thumb_32.png`

## 土地利用图 (1款)

### [layer_9] osm土地利用
- **格式**: `WMS/WMTS`
- **分类**: 土地利用图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 9
- **服务链接**:
```text
https://maps.heigit.org/osmlanduse/service?VERSION=1.3.0&TRANSPARENT=true&QUERY_LAYERS=osmlanduse:osm_lulc&LAYERS=osmlanduse:osm_lulc_combined_osm4eo&BUFFER=0&INFO_FORMAT=application/json&FEATURE_COUNT=1&I=91&J=129&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&STYLES=&BBOX=12836528.782099359,3600489.7803449426,12993071.8160274,3757032.8142729835
```
- **描述**: osm中土地利用的区域，图例不能更改。（图源多半来自osm画手勾的图斑，图一乐）
- **缩略图**: `/thumbnails/thumb_9.png`

## 插件类 (3款)

### [layer_3] TianDitu tools
- **格式**: `插件类`
- **分类**: 地形图, 电子地图, 影像图, 标注图
- **标签**: 国内直连, 无边界问题, 无坐标偏移
- **序号**: 3
- **服务链接**:
```text
（使用插件【TianDiTu Tools】） 
具体方法点击【QGIS中天地图使用方法】
```
- **描述**: 官方出品
- **缩略图**: `/thumbnails/thumb_3.png`

### [layer_4] QuickMapServices
- **格式**: `插件类`
- **分类**: 无
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 4
- **服务链接**:
```text
QGIS插件库搜索下载
```
- **描述**: QGIS插件
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_4.png`

### [layer_5] HCMGIS
- **格式**: `插件类`
- **分类**: 无
- **标签**: 国内直连, 边界问题, 无坐标偏移
- **序号**: 5
- **服务链接**:
```text
QGIS插件库搜索下载
```
- **描述**: QGIS插件
- **备注**: 边界问题
- **缩略图**: `/thumbnails/thumb_5.png`
