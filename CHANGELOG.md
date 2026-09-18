# 更新日志 (Changelog)

本项目遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/) 语义化版本规范。

---

## [v2.7.0] - 2026-09-18

### 🚀 重大重构与新特性 (Major Features)
- **Cloudflare Worker 统一云端服务迁移**：
  - 将全站访问统计（PV 浏览量 / UV 独立访客）从第三方不蒜子（Busuanzi）正式迁移至自建 Cloudflare Worker 服务（mapsource-api），实现自主可控。
  - 将累计脚本导出计数器从第三方 counterapi.com 迁移至 Cloudflare KV，下线所有第三方统计依赖。
  - 历史基准数据平滑无缝承接（基数：80 PV / 50 UV / 28 导出），实现全网实时累加。
- **全网跨设备点赞同步**：
  - 彻底解决 GitHub Pages 静态环境下点赞仅保存在本地设备的问题，实现不同电脑、移动端设备之间的全网点赞实时同步与心形状态记忆。
- **极致隐私与零 IP 采集架构**：
  - 云端 Worker 代码全面去 IP 化，不读取、不分析、不存储用户真实 IP，仅基于浏览器端随机生成的匿名标识（qgis_vid）完成访客去重与点赞防刷，严格遵守隐私保护。

### ⚡ 性能优化 (Performance)
- **点赞 0ms 乐观 UI 响应 (Optimistic UI Update)**：
  - 移除点赞时阻塞 UI 的多次同步网络等待，改为 0 毫秒立即更新红心状态、递增数字并播放 Lottie 爆破粒子特效，网络上报转入后台异步静默完成，彻底消除 3~4 秒卡顿感。
- **平滑缓动数字动画引擎 (CountUp Animation)**：
  - 引入基于 easeOutCubic 减速曲线的数字缓动过渡，避免数据更新时的突兀跳变，视觉体验自然优雅。

### 🎨 界面体验优化 (UI / UX)
- **消除滚动条布局挤压抖动 (Scrollbar Layout Shift)**：
  - 采用现代 CSS 规范 scrollbar-gutter: stable;，在首屏加载前稳定预留滚动条槽位，彻底消除内容加载时页面往左抖动挤压的现象。
- **修复 Lottie 点赞动效二级目录加载 404**：
  - 将 like-animation.json 路径由绝对根路径调整为多层自适应相对路径，完美适配 GitHub Pages 子目录（/MapS/）部署环境。

---

## [v2.6.0] - 2026-09-17

### 🌟 新增特性
- 支持移动端单列大图 / 双列紧凑瀑布流视图自由切换。
- 支持全屏交互式漫游看图与底图元信息折叠查看。
- 引入全局高质感暗黑/明亮主题自适应微投影 Tooltip 提示系统。
- 增强星图地球等 Token 输入过滤与防注入保护。
