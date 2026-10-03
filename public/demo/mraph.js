/**
 * Mraph (Morph Animation Engine & Micro-interaction Suite)
 * 基于本地矢量极坐标变形算法 (2D Procrustes + Polar Interpolation + Spring Physics)
 * 专为现代 Web 界面与地图配置中心打造的高性能零依赖微动效引擎。
 * 遵循 Anti-AI Slop 工艺美学与原生响应式交互规范。
 */
(function (global) {
  'use strict';

  // ---------- 1. 物理弹簧动力学核心 (Spring Dynamics) ----------
  function Spring(k = 380, c = 28) {
    this.x = 1;     // 当前位移进度 [0 -> 1]
    this.v = 0;     // 速度
    this.k = k;     // 劲度系数
    this.c = c;     // 阻尼系数
  }
  Spring.prototype.config = function (k, c) {
    this.k = k;
    this.c = c;
  };
  Spring.prototype.start = function () {
    this.x = 0;
    if (this.v > 16) this.v = 16;
    if (this.v < -16) this.v = -16;
  };
  Spring.prototype.step = function (dt) {
    const h = 1 / 240;
    const steps = Math.max(1, Math.min(16, Math.ceil(dt / h)));
    const s = dt / steps;
    for (let i = 0; i < steps; i++) {
      const a = this.k * (1 - this.x) - this.c * this.v;
      this.v += a * s;
      this.x += this.v * s;
    }
    return Math.abs(1 - this.x) < 0.001 && Math.abs(this.v) < 0.02;
  };

  const PRESETS = {
    smooth: { k: 180, c: 24, label: '丝滑 (Smooth)' },
    snappy: { k: 400, c: 30, label: '爽快 (Snappy)' },
    bouncy: { k: 320, c: 14, label: '回弹 (Bouncy)' }
  };

  // ---------- 2. 几何算法与采样 (2D Procrustes & Resampling) ----------
  const N = 64; // 每个子路径采样点数

  function resample(verts, count = N) {
    const m = verts.length - 1;
    if (m <= 0) return new Float64Array(count * 2);
    const lens = new Array(m);
    let L = 0;
    for (let k = 0; k < m; k++) {
      const dx = verts[k + 1][0] - verts[k][0];
      const dy = verts[k + 1][1] - verts[k][1];
      lens[k] = Math.hypot(dx, dy);
      L += lens[k];
    }
    const ideal = lens.map((l) => ((count - 1) * l) / (L || 1));
    const counts = ideal.map((q) => Math.max(1, Math.floor(q)));
    let R = count - 1 - counts.reduce((a, b) => a + b, 0);
    if (R > 0) {
      const order = ideal
        .map((q, i) => [q - Math.floor(q), i])
        .sort((a, b) => b[0] - a[0]);
      for (let j = 0; j < R; j++) counts[order[j % m][1]]++;
    }
    while (R < 0) {
      let bi = 0;
      for (let i = 1; i < m; i++) if (counts[i] > counts[bi]) bi = i;
      if (counts[bi] <= 1) break;
      counts[bi]--;
      R++;
    }
    const out = new Float64Array(count * 2);
    let idx = 0;
    for (let k = 0; k < m; k++) {
      const x0 = verts[k][0], y0 = verts[k][1];
      const x1 = verts[k + 1][0], y1 = verts[k + 1][1];
      for (let j = 0; j < counts[k]; j++) {
        const t = j / counts[k];
        out[idx * 2] = x0 + (x1 - x0) * t;
        out[idx * 2 + 1] = y0 + (y1 - y0) * t;
        idx++;
      }
    }
    out[idx * 2] = verts[m][0];
    out[idx * 2 + 1] = verts[m][1];
    return out;
  }

  function centroid(p) {
    const n = p.length / 2;
    let cx = 0, cy = 0;
    for (let i = 0; i < n; i++) {
      cx += p[2 * i];
      cy += p[2 * i + 1];
    }
    return [cx / n, cy / n];
  }

  function polyLen(p) {
    const n = p.length / 2;
    let L = 0;
    for (let i = 1; i < n; i++) {
      L += Math.hypot(p[2 * i] - p[2 * i - 2], p[2 * i + 1] - p[2 * i - 1]);
    }
    return L;
  }

  function reversePts(p) {
    const n = p.length / 2;
    const out = new Float64Array(2 * n);
    for (let i = 0; i < n; i++) {
      out[2 * i] = p[2 * (n - 1 - i)];
      out[2 * i + 1] = p[2 * (n - 1 - i) + 1];
    }
    return out;
  }

  function procrustes(a, b, ca, cb) {
    const n = a.length / 2;
    let sxx = 0, sxy = 0, syx = 0, syy = 0, na = 0, nb = 0;
    for (let i = 0; i < n; i++) {
      const ax = a[2 * i] - ca[0], ay = a[2 * i + 1] - ca[1];
      const bx = b[2 * i] - cb[0], by = b[2 * i + 1] - cb[1];
      sxx += ax * bx; syy += ay * by; sxy += ax * by; syx += ay * bx;
      na += ax * ax + ay * ay; nb += bx * bx + by * by;
    }
    const theta = Math.atan2(sxy - syx, sxx + syy);
    const num = Math.cos(theta) * (sxx + syy) + Math.sin(theta) * (sxy - syx);
    let sigma = na > 1e-12 ? num / na : 1;
    if (!(sigma > 1e-6)) sigma = 1e-6;
    const res2 = Math.max(0, sigma * sigma * na - 2 * sigma * num + nb);
    const res = nb > 1e-12 ? Math.sqrt(res2 / nb) : 0;
    return { theta, sigma, res };
  }

  function alignPair(aPts, bPts) {
    const ca = centroid(aPts);
    const cb = centroid(bPts);
    const rev = reversePts(bPts);
    const pf = procrustes(aPts, bPts, ca, cb);
    const pr = procrustes(aPts, rev, ca, cb);
    const L = 0.05;
    const sf = pf.res + (L * Math.abs(pf.theta)) / Math.PI;
    const sr = pr.res + (L * Math.abs(pr.theta)) / Math.PI;
    const useRev = sr < sf;
    return { ca, cb, b: useRev ? rev : bPts, ...(useRev ? pr : pf) };
  }

  function pairCost(a, b) {
    const ca = centroid(a), cb = centroid(b);
    return (
      Math.hypot(ca[0] - cb[0], ca[1] - cb[1]) +
      0.35 * Math.abs(polyLen(a) - polyLen(b))
    );
  }

  function bestPermutation(A, B) {
    const n = A.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    let best = null, bc = Infinity;
    const perm = (arr, k) => {
      if (k === n) {
        let c = 0;
        for (let i = 0; i < n; i++) c += pairCost(A[i], B[arr[i]]);
        if (c < bc) { bc = c; best = arr.slice(); }
        return;
      }
      for (let i = k; i < n; i++) {
        [arr[k], arr[i]] = [arr[i], arr[k]];
        perm(arr, k + 1);
        [arr[k], arr[i]] = [arr[i], arr[k]];
      }
    };
    perm(idx, 0);
    return best;
  }

  function bestSurjection(big, small) {
    const B = big.length, S = small.length;
    let best = null, bc = Infinity;
    const f = new Array(B);
    const rec = (i) => {
      if (i === B) {
        if (new Set(f).size < S) return;
        let c = 0;
        for (let j = 0; j < B; j++) c += pairCost(big[j], small[f[j]]);
        if (c < bc) { bc = c; best = f.slice(); }
        return;
      }
      for (let s = 0; s < S; s++) { f[i] = s; rec(i + 1); }
    };
    rec(0);
    return best;
  }

  function buildPlan(srcSubs, dstSubs) {
    const p = srcSubs.length, q = dstSubs.length;
    const pairs = [];
    if (p === q) {
      const perm = bestPermutation(srcSubs, dstSubs);
      for (let i = 0; i < p; i++) pairs.push([i, perm[i]]);
    } else if (p < q) {
      const f = bestSurjection(dstSubs, srcSubs);
      for (let j = 0; j < q; j++) pairs.push([f[j], j]);
    } else {
      const f = bestSurjection(srcSubs, dstSubs);
      for (let i = 0; i < p; i++) pairs.push([i, f[i]]);
    }
    const n = srcSubs[0].length / 2;
    const items = pairs.map(([si, di]) => {
      const a = srcSubs[si];
      const al = alignPair(a, dstSubs[di]);
      const aC = new Float64Array(2 * n);
      const bT = new Float64Array(2 * n);
      const bO = new Float64Array(2 * n);
      const cos = Math.cos(-al.theta), sin = Math.sin(-al.theta);
      for (let i = 0; i < n; i++) {
        aC[2 * i] = a[2 * i] - al.ca[0];
        aC[2 * i + 1] = a[2 * i + 1] - al.ca[1];
        const bx = al.b[2 * i] - al.cb[0], by = al.b[2 * i + 1] - al.cb[1];
        bT[2 * i] = (bx * cos - by * sin) / al.sigma;
        bT[2 * i + 1] = (bx * sin + by * cos) / al.sigma;
        bO[2 * i] = al.b[2 * i];
        bO[2 * i + 1] = al.b[2 * i + 1];
      }
      return {
        a, aC, bT, bO,
        ca: al.ca, cb: al.cb,
        theta: al.theta, lnSigma: Math.log(al.sigma), res: al.res,
      };
    });
    return { items, n };
  }

  function interpPolar(plan, t, out) {
    for (let k = 0; k < plan.items.length; k++) {
      const it = plan.items[k], o = out[k], n = plan.n;
      const cx = it.ca[0] + (it.cb[0] - it.ca[0]) * t;
      const cy = it.ca[1] + (it.cb[1] - it.ca[1]) * t;
      const s = Math.exp(it.lnSigma * t);
      const ang = it.theta * t;
      const cos = Math.cos(ang) * s, sin = Math.sin(ang) * s;
      for (let i = 0; i < n; i++) {
        const px = it.aC[2 * i] + (it.bT[2 * i] - it.aC[2 * i]) * t;
        const py = it.aC[2 * i + 1] + (it.bT[2 * i + 1] - it.aC[2 * i + 1]) * t;
        o[2 * i] = cx + px * cos - py * sin;
        o[2 * i + 1] = cy + px * sin + py * cos;
      }
    }
  }

  function interpLinear(plan, t, out) {
    for (let k = 0; k < plan.items.length; k++) {
      const it = plan.items[k], o = out[k], n = plan.n;
      for (let i = 0; i < n; i++) {
        o[2 * i] = it.a[2 * i] + (it.bO[2 * i] - it.a[2 * i]) * t;
        o[2 * i + 1] = it.a[2 * i + 1] + (it.bO[2 * i + 1] - it.a[2 * i + 1]) * t;
      }
    }
  }

  function fmt(v) {
    return String(Math.round(v * 100) / 100);
  }

  function serialize(subs) {
    let d = "";
    for (let k = 0; k < subs.length; k++) {
      const o = subs[k], n = o.length / 2;
      d += "M" + fmt(o[0]) + " " + fmt(o[1]);
      for (let i = 1; i < n; i++) {
        d += "L" + fmt(o[2 * i]) + " " + fmt(o[2 * i + 1]);
      }
    }
    return d;
  }

  // ---------- 3. 常见图形及按钮图标数据库 (Icon Definitions) ----------
  // 注意：遵从指令，不包含点赞(heart)与眼睛(eye)
  const ICONS = {
    // 太阳 (浅色主题)
    sun: {
      label: '太阳 (Sun)',
      d: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
      subs: [
        [[12, 2], [12, 4]],
        [[12, 20], [12, 22]],
        [[4.93, 4.93], [6.34, 6.34]],
        [[17.66, 17.66], [19.07, 19.07]],
        [[2, 12], [4, 12]],
        [[20, 12], [22, 12]],
        [[6.34, 17.66], [4.93, 19.07]],
        [[19.07, 4.93], [17.66, 6.34]],
        [[16, 12], [15.6, 14], [14, 15.6], [12, 16], [10, 15.6], [8.4, 14], [8, 12], [8.4, 10], [10, 8.4], [12, 8], [14, 8.4], [15.6, 10], [16, 12]]
      ]
    },

    // 月亮 (深色主题)
    moon: {
      label: '月亮 (Moon)',
      d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z',
      subs: [
        [[21, 12.8], [19.5, 15.5], [17, 18], [14, 19.5], [10.5, 20], [7, 18.5], [4.5, 16], [3.2, 12.5], [3.5, 8.5], [5.5, 5.5], [8.5, 3.8], [12, 3], [11.2, 5.5], [11.5, 8.5], [13, 11], [15.5, 12.5], [18.5, 13], [21, 12.8]],
        [[17, 4], [17, 6]],
        [[19, 7], [21, 7]]
      ]
    },

    // 单列视图 (Cols 1)
    cols1: {
      label: '单列视图 (Cols 1)',
      d: 'M4 4h16v16H4z',
      subs: [
        [[4, 4], [20, 4], [20, 20], [4, 20], [4, 4]]
      ]
    },

    // 双列视图 (Cols 2)
    cols2: {
      label: '双列视图 (Cols 2)',
      d: 'M3 4h8v16H3zM13 4h8v16h-8z',
      subs: [
        [[3, 4], [11, 4], [11, 20], [3, 20], [3, 4]],
        [[13, 4], [21, 4], [21, 20], [13, 20], [13, 4]]
      ]
    },

    // 加号 (加入选单)
    plus: {
      label: '加号 (Plus)',
      d: 'M5 12h14M12 5v14',
      subs: [
        [[5, 12], [19, 12]],
        [[12, 5], [12, 19]]
      ]
    },

    // 对勾 (成功态 / 已加入)
    check: {
      label: '对勾 (Check)',
      d: 'M20 6 9 17l-5-5',
      subs: [
        [[4, 12], [9, 17], [20, 6]]
      ]
    },

    // 减号 / 移除
    minus: {
      label: '减号 (Minus)',
      d: 'M5 12h14',
      subs: [
        [[5, 12], [19, 12]]
      ]
    },

    // 叉号 (关闭 / 取消)
    x: {
      label: '关闭 (X)',
      d: 'M18 6 6 18M6 6l12 12',
      subs: [
        [[18, 6], [6, 18]],
        [[6, 6], [18, 18]]
      ]
    },

    // 搜索 (Search)
    search: {
      label: '搜索 (Search)',
      d: 'M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM21 21l-4.35-4.35',
      subs: [
        [[11, 3], [16.6, 5.4], [19, 11], [16.6, 16.6], [11, 19], [5.4, 16.6], [3, 11], [5.4, 5.4], [11, 3]],
        [[16.65, 16.65], [21, 21]]
      ]
    },

    // 剪贴板 / 复制 (Copy)
    copy: {
      label: '复制 (Copy)',
      d: 'M9 9h11v11H9zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
      subs: [
        [[9, 9], [20, 9], [20, 20], [9, 20], [9, 9]],
        [[5, 15], [4, 15], [2, 13], [2, 4], [4, 2], [13, 2], [15, 4], [15, 5]]
      ]
    },

    // 购物车 (Cart) - 包含完整车身及左右双车轮
    cart: {
      label: '购物车 (Cart)',
      d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12 M8 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2 M19 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2',
      subs: [
        [[2.05, 2.05], [4.05, 2.05], [6.71, 14.47], [8.71, 16.05], [18.49, 16.05], [20.44, 14.48], [22.09, 7.05], [5.12, 7.05]],
        [[9.0, 21.0], [8.87, 21.5], [8.5, 21.87], [8.0, 22.0], [7.5, 21.87], [7.13, 21.5], [7.0, 21.0], [7.13, 20.5], [7.5, 20.13], [8.0, 20.0], [8.5, 20.13], [8.87, 20.5], [9.0, 21.0]],
        [[20.0, 21.0], [19.87, 21.5], [19.5, 21.87], [19.0, 22.0], [18.5, 21.87], [18.13, 21.5], [18.0, 21.0], [18.13, 20.5], [18.5, 20.13], [19.0, 20.0], [19.5, 20.13], [19.87, 20.5], [20.0, 21.0]]
      ]
    },

    // 下拉箭头 (Chevron Down)
    chevronDown: {
      label: '下拉箭头 (Chevron Down)',
      d: 'M6 9l6 6 6-6',
      subs: [
        [[6, 9], [12, 15], [18, 9]]
      ]
    },

    // 上拉箭头 (Chevron Up)
    chevronUp: {
      label: '上拉箭头 (Chevron Up)',
      d: 'M18 15l-6-6-6 6',
      subs: [
        [[18, 15], [12, 9], [6, 15]]
      ]
    },

    // 下载 (Download)
    download: {
      label: '下载 (Download)',
      d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
      subs: [
        [[3, 15], [3, 19], [5, 21], [19, 21], [21, 19], [21, 15]],
        [[7, 10], [12, 15], [17, 10]],
        [[12, 3], [12, 15]]
      ]
    },

    // 卡片网格视图 (Grid)
    grid: {
      label: '卡片网格 (Grid)',
      d: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
      subs: [
        [[3, 3], [10, 3], [10, 10], [3, 10], [3, 3]],
        [[14, 3], [21, 3], [21, 10], [14, 10], [14, 3]],
        [[3, 14], [10, 14], [10, 21], [3, 21], [3, 14]],
        [[14, 14], [21, 14], [21, 21], [14, 21], [14, 14]]
      ]
    },

    // 列表/表格视图 (List)
    list: {
      label: '列表表格 (List)',
      d: 'M3 6h18 M3 12h18 M3 18h18',
      subs: [
        [[3, 6], [21, 6]],
        [[3, 12], [21, 12]],
        [[3, 18], [21, 18]]
      ]
    },

    // 菜单汉堡 (Menu)
    menu: {
      label: '菜单 (Menu)',
      d: 'M4 6h16M4 12h16M4 18h16',
      subs: [
        [[4, 6], [20, 6]],
        [[4, 12], [20, 12]],
        [[4, 18], [20, 18]]
      ]
    }
  };

  const cacheSubs = new Map();
  function getCanonicalSubs(name) {
    if (cacheSubs.has(name)) return cacheSubs.get(name);
    const def = ICONS[name];
    if (!def) {
      console.warn(`[Mraph] 图标 '${name}' 未在预设字典中找到`);
      return null;
    }
    const sampled = def.subs.map((v) => resample(v, N));
    cacheSubs.set(name, sampled);
    return sampled;
  }

  // ---------- 4. 触控微交互增强 (Haptic & Water Ripple) ----------
  function createRipple(event, button) {
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;
    const ripple = document.createElement('span');
    ripple.className = 'mraph-ripple';

    const clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : rect.left + rect.width / 2);
    const clientY = event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : rect.top + rect.height / 2);

    const x = clientX - rect.left - size / 2;
    const y = clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 600);
  }

  function triggerBounce(element) {
    if (!element) return;
    element.classList.add('mraph-pressing');
    setTimeout(() => element.classList.remove('mraph-pressing'), 180);
  }

  // ---------- 5. Mraph 控制器主体 (Controller) ----------
  class MraphAnimator {
    constructor(pathElement, options = {}) {
      this.el = pathElement;
      this.mode = options.mode || 'polar';
      this.preset = options.preset || 'snappy';
      this.cur = options.initial || 'sun';
      this.spring = new Spring();
      const p = PRESETS[this.preset] || PRESETS.snappy;
      this.spring.config(p.k, p.c);

      this.state = 'rest';
      this.plan = null;
      this.out = null;
      this.raf = 0;
      this.last = 0;

      if (ICONS[this.cur]) {
        this.el.setAttribute('d', ICONS[this.cur].d);
      }
    }

    setPreset(name) {
      if (PRESETS[name]) {
        this.preset = name;
        this.spring.config(PRESETS[name].k, PRESETS[name].c);
      }
    }

    setMode(mode) {
      this.mode = mode;
    }

    morphTo(targetName, onComplete) {
      if (targetName === this.cur && this.state === 'rest') return;
      if (!ICONS[targetName]) {
        console.warn(`[Mraph] 无法变形到未知图标: ${targetName}`);
        return;
      }

      const src = this.state === 'anim' && this.out
        ? this.out.map((o) => Float64Array.from(o))
        : getCanonicalSubs(this.cur);

      const dst = getCanonicalSubs(targetName);
      if (!src || !dst) return;

      this.plan = buildPlan(src, dst);
      this.cur = targetName;
      this.onComplete = onComplete;

      const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        this.el.setAttribute('d', ICONS[targetName].d);
        this.state = 'rest';
        if (this.onComplete) this.onComplete(targetName);
        return;
      }

      this.out = this.plan.items.map(() => new Float64Array(2 * N));
      if (this.state === 'rest') this.spring.v = 0;
      this.spring.start();
      this.state = 'anim';

      if (!this.raf) {
        this.last = performance.now();
        this._tick = (now) => {
          const dt = Math.min(0.05, (now - this.last) / 1000);
          this.last = now;
          const done = this.spring.step(dt);
          (this.mode === 'polar' ? interpPolar : interpLinear)(this.plan, this.spring.x, this.out);
          this.el.setAttribute('d', serialize(this.out));

          if (done) {
            this.el.setAttribute('d', ICONS[this.cur].d);
            this.state = 'rest';
            this.raf = 0;
            if (this.onComplete) this.onComplete(this.cur);
            return;
          }
          this.raf = requestAnimationFrame(this._tick);
        };
        this.raf = requestAnimationFrame(this._tick);
      }
    }

    toggle(pairA, pairB, onComplete) {
      const next = this.cur === pairA ? pairB : pairA;
      this.morphTo(next, onComplete);
      return next;
    }
  }

  // ---------- 6. 全局对外暴露 API (Global API) ----------
  const Mraph = {
    ICONS,
    PRESETS,
    Spring,

    attach(pathElement, options) {
      return new MraphAnimator(pathElement, options);
    },

    bindButton(button, {
      from = 'sun',
      to = 'moon',
      preset = 'snappy',
      mode = 'polar',
      ripple = true,
      onToggle = null
    } = {}) {
      if (typeof button === 'string') {
        button = document.querySelector(button);
      }
      if (!button) return null;

      if (ripple) {
        button.classList.add('mraph-btn-enhanced');
      }

      let svg = button.querySelector('svg.mraph-svg');
      let path = svg ? svg.querySelector('path') : null;

      if (!path) {
        const existingSvg = button.querySelector('svg');
        if (existingSvg) {
          existingSvg.classList.add('mraph-svg');
          path = existingSvg.querySelector('path');
          if (!path) {
            path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            existingSvg.appendChild(path);
          }
        } else {
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox', '0 0 24 24');
          svg.setAttribute('class', 'mraph-svg');
          svg.setAttribute('fill', 'none');
          svg.setAttribute('stroke', 'currentColor');
          svg.setAttribute('stroke-width', '2');
          svg.setAttribute('stroke-linecap', 'round');
          svg.setAttribute('stroke-linejoin', 'round');
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          svg.appendChild(path);
          button.prepend(svg);
        }
      }

      const animator = new MraphAnimator(path, {
        initial: from,
        preset,
        mode
      });

      let currentState = from;

      const clickHandler = (e) => {
        if (ripple) createRipple(e, button);
        triggerBounce(button);

        currentState = animator.toggle(from, to, (active) => {
          if (typeof onToggle === 'function') {
            onToggle(active, button);
          }
        });
      };

      button.addEventListener('click', clickHandler);

      return {
        button,
        animator,
        getState: () => currentState,
        setState: (st) => {
          currentState = st;
          animator.morphTo(st);
        },
        destroy: () => button.removeEventListener('click', clickHandler)
      };
    },

    triggerRipple: createRipple,
    bounce: triggerBounce,

    // 全局增强事件委托（自动处理水波纹与微按压）
    initGlobalRipple() {
      if (document._mraphRippleInit) return;
      document._mraphRippleInit = true;

      document.addEventListener('click', (e) => {
        // 查找最近的按钮类元素（排查点赞与眼睛，点赞使用原有逻辑）
        const btn = e.target.closest('button, .btn, .btn-primary, .btn-secondary, .cart-toggle-btn, .theme-toggle-btn, .view-toggle-btn, .add-cart-btn, .btn-copy-url');
        if (!btn) return;
        // 如果是点赞或预览眼睛按钮，跳过 Mraph 处理
        if (btn.classList.contains('like-btn') || btn.classList.contains('preview-btn') || btn.id === 'preview-map-btn') {
          return;
        }
        btn.classList.add('mraph-btn-enhanced');
        createRipple(e, btn);
        triggerBounce(btn);
      }, true);
    }
  };

  global.Mraph = Mraph;
  global.MorphIcons = Mraph;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Mraph;
  }
})(typeof window !== 'undefined' ? window : this);
