# Mraph 按钮点击动效交互演示与集成指南

本演示根据「QGIS图源配置中心」界面当前的真实按钮外观与交互规范制作，直接调用本地已有的 `morphicons` 极坐标几何变形算法与弹簧物理动力学引擎，大幅增强整个界面的操作质感与生命力。

---

## 目录结构

```text
demo/
├── index.html              # 交互式全景演示页面 (支持双击直接在浏览器打开预览)
├── morph_button_demo.html  # 加购/已选/取消 几何线条 Morphing 与文字滚轴原型
├── cart_badge_demo.html    # 购物车角标 Badge 方案对比与规范化展示
├── demo.css                # 演示页面样式与触控微交互效果 (波纹扩散、弹性按压缩放)
├── mraph.js                # 核心引擎 (零依赖、纯原生 JS，支持浏览器直接引用)
└── README.md               # 使用与接入文档
```

---

## 核心特性与动效设计

1. **真实按钮 1:1 仿真交互**
   - **顶部状态栏按钮群 (Header Actions)**：
     - **主题切换按钮**：浅色太阳 ☀️ ⟷ 深色月牙 🌙 连续极坐标变形；
     - **单双列视图切换**：单列矩形 ⟷ 双列对称矩形几何形变；
     - **购物车选单按钮**：购物车点击物理晃动与微弹性回弹。
   - **移动端与浮动工具栏 (Floating Deck)**：
     - **分类下拉箭头**：向下箭头 ▾ ⟷ 向上收起箭头 ▴；
     - **搜索与清除**：放大镜 🔍 ⟷ 清除叉号 ✕。
   - **底图卡片四大核心操作 (Layer Card Live Replica)**：
     - **一键复制 Python 脚本**：从剪贴板图标平滑演变为绿色成功打勾态（Copy ➔ Check），两秒后自动回弹恢复；
     - **加入选单 / 加购**：加号 ⟷ 对勾（Plus ➔ Check）切换，右上角数字徽标联动弹跳；
     - **底图全屏预览**：眼睛 ⟷ 闭眼（Eye ➔ EyeOff）；
     - **推荐点赞**：心形轮廓瞬间充盈与弹性脉冲回弹。

2. **2D Procrustes 封闭解与极坐标测地线插值**
   - 自动检测图形间最佳对齐角度 $\theta$ 与尺度因子 $\sigma$；
   - 旋转、缩放自然涌现，无需人工手写关键帧或旋转角度。

3. **物理弹簧动力学 (Spring Dynamics)**
   - 预设支持 **Snappy（爽快紧凑）**、**Smooth（平滑丝滑）** 与 **Bouncy（生动弹性）**；
   - 连续连击时支持动量打断与速度无缝继承，绝不生硬卡顿。

4. **触控与按压反馈 (Micro-Interactions)**
   - 鼠标或触控点击时自动激发生动的水波纹扩散（Ripple Effect）；
   - 按压时产生 0.94x 弹性物理微下陷，模拟真实物理按键触感。

---

## 如何体验

直接在浏览器中打开 `demo/index.html` 即可：
- Windows: 双击 `d:\GitHub\Maps\demo\index.html`
- 或通过本地静态服务器访问：`http://localhost:8000/demo/index.html`

---

## 如何在主站 (`app.js` / `index.html`) 中直接调用

### 步骤 1：引入本地脚本
在 `index.html` 底部引入 `mraph.js`：
```html
<script src="./demo/mraph.js"></script>
```

### 步骤 2：直接为任意现有按钮启用变形
```javascript
// 示例 1: 绑定主题切换按钮
Mraph.bindButton('#theme-toggle-btn', {
  from: 'sun',
  to: 'moon',
  preset: 'snappy',
  onToggle: (state) => {
    // 切换浅色/深色主题
  }
});

// 示例 2: 绑定复制按钮成功打勾反馈
const copyAnim = Mraph.attach(svgPathElement);
button.addEventListener('click', () => {
  copyAnim.morphTo('check');
  setTimeout(() => copyAnim.morphTo('copy'), 1800);
});
```
