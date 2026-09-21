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
  boundaryGeoJsonData: null,
  activeEngine: "leaflet",
  maplibreMap: null,
  wmsCapabilities: {},
  demRenderMode: "color"
};
window.state = state;

// --- Internal Aesthetic Preference Manager (Protected Module) ---
function _dStr(b64) {
  try {
    return decodeURIComponent(escape(atob(b64)));
  } catch (e) {
    return atob(b64);
  }
}

const _AESTHETIC_PREF_KEY = '_sgdb_pref';
const _AESTHETIC_WELCOMED_KEY = '_sgdb_welcomed';
let isAncientAesthetic = false;
let _cachedPaperTextureUrl = null;

// 五维做旧宣纸/绢帛纹理生成器 (程序化 Canvas 渲染，五维能量守恒 Sum of Weights = 1.0)
class PaperTextureGenerator {
  static generatePattern() {
    if (_cachedPaperTextureUrl) return _cachedPaperTextureUrl;
    try {
      const pSize = 360;
      const pCanvas = document.createElement('canvas');
      pCanvas.width = pSize;
      pCanvas.height = pSize;
      const pCtx = pCanvas.getContext('2d');
      if (!pCtx) return null;

      pCtx.clearRect(0, 0, pSize, pSize);

      // A. 会话级动态随机种子
      let seed = (Date.now() ^ (Math.random() * 0x10000000)) >>> 0;
      function rnd() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      }

      // B. 五维区间严格归一化 (Sum of Weights = 1.0)
      const intervals = [
        { min: 0.10, max: 0.22 }, // 竹帘经纬
        { min: 0.10, max: 0.22 }, // 楮皮颗粒
        { min: 0.18, max: 0.30 }, // 植物纤维
        { min: 0.22, max: 0.34 }, // 古水墨底润
        { min: 0.10, max: 0.22 }  // 云絮水晕
      ];
      const raw = intervals.map(item => item.min + rnd() * (item.max - item.min));
      const sumRaw = raw.reduce((a, b) => a + b, 0);
      const [w_bamboo, w_bark, w_fiber, w_patina, w_cloud] = raw.map(w => w / sumRaw);

      // C. 【竹】竹帘经纬横纵线 (32px~40px 纵向密织竹丝经线 + 4px 极淡纬线交织)
      const yOffset = rnd() * 4;
      pCtx.fillStyle = `rgba(215, 185, 130, ${(0.05 + w_bamboo * 0.35).toFixed(3)})`;
      for (let y = yOffset; y < pSize; y += 4) {
        pCtx.fillRect(0, y, pSize, 0.9);
      }
      const xStep = Math.round(34 + rnd() * 6);
      pCtx.fillStyle = `rgba(215, 185, 130, ${(0.04 + w_bamboo * 0.25).toFixed(3)})`;
      for (let x = rnd() * xStep; x < pSize; x += xStep) {
        pCtx.fillRect(x, 0, 1.2, pSize);
      }

      // D. 【纤】全向散落植物长短纤维丝 (数量克制，360° 全向自然交错)
      pCtx.strokeStyle = `rgba(230, 195, 140, ${(0.12 + w_fiber * 0.45).toFixed(3)})`;
      pCtx.lineWidth = 0.7 + w_fiber * 0.7;
      const fiberCount = Math.round(32 + w_fiber * 160);
      pCtx.beginPath();
      for (let i = 0; i < fiberCount; i++) {
        const fx = rnd() * pSize, fy = rnd() * pSize;
        const len = 4 + rnd() * (8 + w_fiber * 14);
        const angle = rnd() * Math.PI * 2;
        pCtx.moveTo(fx, fy);
        pCtx.quadraticCurveTo(
          fx + Math.cos(angle) * (len * 0.5) + (rnd() - 0.5) * 3,
          fy + Math.sin(angle) * (len * 0.5) + (rnd() - 0.5) * 3,
          fx + Math.cos(angle) * len,
          fy + Math.sin(angle) * len
        );
      }
      pCtx.stroke();

      // E. 【皮】楮皮颗粒微观杂质噪点
      pCtx.fillStyle = `rgba(238, 205, 150, ${(0.14 + w_bark * 0.55).toFixed(3)})`;
      const speckCount = Math.round(150 + w_bark * 800);
      for (let i = 0; i < speckCount; i++) {
        const px = rnd() * pSize, py = rnd() * pSize;
        const r = rnd() < 0.85 ? (0.5 + w_bark * 0.4) : (1.0 + rnd() * (0.4 + w_bark * 0.6));
        pCtx.beginPath();
        pCtx.arc(px, py, r, 0, Math.PI * 2);
        pCtx.fill();
      }

      // F. 【絮】水墨云絮水晕大尺度半透明晕染斑驳
      const cloudAlpha = 0.03 + w_cloud * 0.22;
      const cloudCount = Math.round(12 + w_cloud * 60);
      for (let i = 0; i < cloudCount; i++) {
        const cx = rnd() * pSize, cy = rnd() * pSize;
        const radius = 10 + rnd() * (16 + w_cloud * 26);
        const grad = pCtx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(220, 185, 125, ${cloudAlpha.toFixed(3)})`);
        grad.addColorStop(1, 'rgba(220, 185, 125, 0)');
        pCtx.fillStyle = grad;
        pCtx.beginPath();
        pCtx.arc(cx, cy, radius, 0, Math.PI * 2);
        pCtx.fill();
      }

      _cachedPaperTextureUrl = pCanvas.toDataURL('image/png');
      return _cachedPaperTextureUrl;
    } catch (e) {
      return null;
    }
  }
}

// 动态管理做旧宣纸全屏底衬与卡片层共享纹理
function updatePaperBackdrop(show) {
  let bg = document.getElementById('ancient-paper-backdrop');
  const root = document.documentElement;
  if (show) {
    if (!bg) {
      bg = document.createElement('div');
      bg.id = 'ancient-paper-backdrop';
      bg.className = 'ancient-paper-backdrop';
      bg.setAttribute('aria-hidden', 'true');
      document.body.insertBefore(bg, document.body.firstChild);
    }
    const textureUrl = PaperTextureGenerator.generatePattern();
    if (textureUrl) {
      bg.style.backgroundImage = `url("${textureUrl}")`;
      if (root) root.style.setProperty('--ancient-paper-pattern', `url("${textureUrl}")`);
    }
  } else {
    if (bg) bg.remove();
    if (root) root.style.removeProperty('--ancient-paper-pattern');
  }
}

// 全屏仪式感居中大弹窗
function showAncientWelcomeModal() {
  let modal = document.getElementById('ancient-welcome-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ancient-welcome-modal';
    modal.className = 'ancient-modal-backdrop';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
      <div class="ancient-modal-card">
        <button class="ancient-modal-close" id="ancient-modal-close" title="退出（Esc）" aria-label="关闭">✕</button>
        <div class="ancient-modal-header">
          <div class="ancient-modal-emblem">閣</div>
          <div class="ancient-modal-title-wrap">
            <div class="ancient-modal-subtitle">天机 · 奇遇</div>
            <h2 class="ancient-modal-title">江湖舆图阁 <span class="ancient-seal">江湖</span></h2>
          </div>
        </div>
        <div class="ancient-modal-divider">
          <span class="ancient-divider-line"></span>
          <span class="ancient-divider-icon">◆</span>
          <span class="ancient-divider-line"></span>
        </div>
        <div class="ancient-modal-body">
          <p class="ancient-lead-verse">“偶入舆图秘境，乾坤万里入卷。”</p>
          <p class="ancient-desc-text">
            天下名山大川、经纬舆图悉数封存于此。<br>
            无需银两，一“剑”径入 QGIS，愿少侠尽收囊中！
          </p>
          <div class="ancient-modal-tips">
            <span class="ancient-tip-item">⚡ 秘境状态：已施“舆图遁法”</span>
            <span class="ancient-tip-item">📜 随时可点右上「现世」还俗</span>
          </div>
        </div>
        <div class="ancient-modal-footer">
          <button class="ancient-modal-action-btn" id="ancient-modal-confirm-btn">
            <span class="ancient-btn-text">入卷领略</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeHandler = () => {
      modal.classList.remove('visible');
      modal.setAttribute('aria-hidden', 'true');
    };

    modal.querySelector('#ancient-modal-close').addEventListener('click', closeHandler);
    modal.querySelector('#ancient-modal-confirm-btn').addEventListener('click', closeHandler);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHandler();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('visible')) {
        closeHandler();
      }
    });
  }

  requestAnimationFrame(() => {
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
  });
}

function checkAestheticPreference() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const tp = (urlParams.get('theme') || urlParams.get('mode') || '').toLowerCase();
    const ep = urlParams.get(_dStr('ZWdn'));
    
    // Channel 1: URL parameter trigger
    if (tp === _dStr('d3V4aWE=') || ep === '1') {
      return true;
    }
    if (tp === 'modern' || tp === 'normal' || ep === '0') {
      return false;
    }

    // Channel 2: Single-session 1/50 probability
    const pref = sessionStorage.getItem(_AESTHETIC_PREF_KEY);
    if (pref === '1') return true;
    if (pref === '0') return false;

    const isLucky = Math.random() < 0.02; // 2% probability
    sessionStorage.setItem(_AESTHETIC_PREF_KEY, isLucky ? '1' : '0');
    return isLucky;
  } catch (e) {
    return false;
  }
}

function applyAestheticMode(active, isInteractive = false) {
  isAncientAesthetic = !!active;
  const root = document.documentElement;
  const body = document.body;
  if (root) root.classList.toggle('theme-sublime', isAncientAesthetic);
  if (body) body.classList.toggle('theme-sublime', isAncientAesthetic);

  updatePaperBackdrop(isAncientAesthetic);

  const titleFull = document.querySelector('.brand-title-full');
  const titleShort = document.querySelector('.brand-title-short');
  const brandIcon = document.querySelector('.brand-icon');
  const brandBadge = document.querySelector('.brand-badge');
  const searchInput = document.getElementById('search-input');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const drawerTitle = document.querySelector('.drawer-title');
  const checkoutBtn = document.getElementById('drawer-checkout-btn');
  const clearBtn = document.querySelector('#drawer-clear-btn span');
  const addallLabel = document.getElementById('addall-label');
  const headerCartText = document.querySelector('#header-cart-btn .header-cart-text');
  const floatingCartText = document.querySelector('#floating-cart-btn .floating-cart-text');
  const headerCartBtn = document.getElementById('header-cart-btn');
  const floatingCartBtn = document.getElementById('floating-cart-btn');

  if (isAncientAesthetic) {
    document.title = "江湖舆图阁 · 天下名图零元取";
    if (titleFull) titleFull.textContent = "江湖舆图阁";
    if (titleShort) titleShort.textContent = "舆图阁";
    if (brandIcon) brandIcon.textContent = "阁";
    if (brandBadge) {
      brandBadge.innerHTML = `<span>乾坤谱</span><span class="ancient-seal">江湖</span>`;
    }
    if (searchInput) searchInput.placeholder = "搜寻天下山河秘图（如：天地图、OSM、高德…）";
    if (mobileSearchInput) mobileSearchInput.placeholder = "搜寻天下山河秘图...";
    if (drawerTitle) drawerTitle.textContent = "我的百宝囊";
    if (checkoutBtn) checkoutBtn.textContent = "收入囊中 (生成 PyQGIS)";
    if (clearBtn) clearBtn.textContent = "两袖清风";
    if (addallLabel) addallLabel.textContent = "尽收当前";
    if (headerCartText) headerCartText.textContent = "百宝囊";
    if (floatingCartText) floatingCartText.textContent = "百宝囊";
    if (headerCartBtn) headerCartBtn.title = "查看百宝囊";
    if (floatingCartBtn) floatingCartBtn.title = "查看百宝囊";

    ensureEscapeHatch(true);

    if (isInteractive) {
      showAncientWelcomeModal();
      triggerAestheticShake();
    }
  } else {
    document.title = "QGIS 在线底图配置中心 (QGIS Basemap Hub)";
    if (titleFull) titleFull.textContent = "QGIS 在线底图配置中心";
    if (titleShort) titleShort.textContent = "地图配置";
    if (brandIcon) brandIcon.textContent = "QG";
    if (brandBadge) brandBadge.textContent = "v2.7 持续收录";
    if (searchInput) searchInput.placeholder = "搜索底图...";
    if (mobileSearchInput) mobileSearchInput.placeholder = "搜索底图...";
    if (drawerTitle) drawerTitle.textContent = "已选底图配置单";
    if (checkoutBtn) checkoutBtn.textContent = "结算生成 QGIS 导入脚本";
    if (clearBtn) clearBtn.textContent = "清空";
    if (addallLabel) addallLabel.textContent = "全选当前";
    if (headerCartText) headerCartText.textContent = "购物车";
    if (floatingCartText) floatingCartText.textContent = "购物车";
    if (headerCartBtn) headerCartBtn.title = "查看购物车";
    if (floatingCartBtn) floatingCartBtn.title = "查看购物车";

    ensureEscapeHatch(false);
  }

  if (state.layers && state.layers.length > 0) {
    renderLayers();
    renderCartDrawer();
  }
}

function ensureEscapeHatch(show) {
  let hatch = document.getElementById('ancient-escape-hatch');
  if (show) {
    if (!hatch) {
      hatch = document.createElement('button');
      hatch.id = 'ancient-escape-hatch';
      hatch.className = 'ancient-mode-exit';
      hatch.title = '切回现代标准界面';
      hatch.innerHTML = '📜 现世';
      hatch.onclick = () => {
        try {
          sessionStorage.setItem(_AESTHETIC_PREF_KEY, '0');
        } catch (e) {}
        applyAestheticMode(false, false);
        showToast("已返归现世界面");
      };
      const brandTitle = document.querySelector('.brand-title');
      if (brandTitle) {
        brandTitle.appendChild(hatch);
      }
    }
  } else {
    if (hatch) hatch.remove();
  }
}

function showAncientToast(msg) {
  const existing = document.querySelector('.aesthetic-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'aesthetic-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function triggerAestheticShake() {
  const container = document.querySelector('.site-header') || document.body;
  container.classList.add('aesthetic-shaking');
  setTimeout(() => container.classList.remove('aesthetic-shaking'), 360);
}

function checkSearchEasterEgg(val) {
  if (!val) return false;
  const s = val.trim();
  const kw1 = _dStr('5rGf5rmW');
  const kw2 = _dStr('6IiG5Zu+6ZiB');
  if (s === kw1 || s === kw2) {
    try {
      sessionStorage.setItem(_AESTHETIC_PREF_KEY, '1');
      sessionStorage.setItem(_AESTHETIC_WELCOMED_KEY, '1');
    } catch (e) {}
    applyAestheticMode(true, true);
    return true;
  }
  return false;
}


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

  // 2. 龙门山等高线地形 (Open Topo Map)
  if (id === "layer_16" || name === "Open Topo Map") {
    return PRESET_VIEWPORTS.LONGMEN_MOUNTAIN;
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
    id === "layer_36" || id === "layer_37" || id === "layer_38" ||
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
  if (!layer) return;
  const vp = getLayerPresetViewport(layer);

  // 1. 原生 MapLibre 引擎视口重设
  if (state.activeEngine === "maplibre" && state.maplibreMap) {
    if (vp.bounds) {
      const sw = [vp.bounds[0][1], vp.bounds[0][0]];
      const ne = [vp.bounds[1][1], vp.bounds[1][0]];
      state.maplibreMap.fitBounds([sw, ne], {
        padding: 30,
        maxZoom: vp.maxZoom || 18,
        duration: 800
      });
    } else if (vp.center) {
      state.maplibreMap.setCenter([vp.center[1], vp.center[0]]);
      state.maplibreMap.setZoom(vp.zoom || 3);
    }
    return;
  }

  // 2. Leaflet 引擎视口重设
  if (!state.previewMap) return;
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
  if (state.activeEngine === "maplibre" && state.maplibreMap) {
    state.maplibreMap.fitBounds([[103.80, 30.40], [104.35, 30.90]], {
      padding: 30,
      duration: 800
    });
  } else if (state.previewMap) {
    state.previewMap.invalidateSize();
    state.previewMap.flyToBounds(CHENGDU_RING_BOUNDS, {
      padding: [20, 20],
      duration: 0.8
    });
  }
}

function resetToChinaView() {
  if (state.activeEngine === "maplibre" && state.maplibreMap) {
    state.maplibreMap.fitBounds([[73.5, 18.0], [135.0, 53.5]], {
      padding: 30,
      duration: 800
    });
  } else if (state.previewMap) {
    state.previewMap.invalidateSize();
    state.previewMap.flyToBounds(CHINA_BOUNDS, {
      padding: [20, 20],
      maxZoom: 5,
      duration: 0.8
    });
  }
}

function resetToWorldView() {
  if (state.activeEngine === "maplibre" && state.maplibreMap) {
    state.maplibreMap.flyTo({
      center: [10, 20],
      zoom: 1.5,
      duration: 800
    });
  } else if (state.previewMap) {
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
    showToast("当前浏览器不支持地理定位");
    return;
  }

  const btn = document.querySelector(".leaflet-control-locate-btn");
  if (btn) {
    btn.classList.add("locating");
    btn.classList.remove("located");
  }

  showToast("正在获取当前位置...");

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

      if (state.deviceLocationGroup) {
        state.deviceLocationGroup.addLayer(marker);
      }

      // 平滑飞入并缩放至精细道路级 (15 级以上)
      if (state.activeEngine === "maplibre" && state.maplibreMap) {
        state.maplibreMap.flyTo({
          center: [lng, lat],
          zoom: Math.max(state.maplibreMap.getZoom(), 15),
          duration: 1000
        });
      } else if (state.previewMap) {
        const targetZoom = Math.max(state.previewMap.getZoom(), 15);
        state.previewMap.flyTo([lat, lng], targetZoom, { duration: 1 });
      }

      showToast(`已定位至当前位置${accuracy ? ` (±${Math.round(accuracy)}m)` : ""}`);
    },
    (err) => {
      if (btn) {
        btn.classList.remove("locating");
      }
      let errMsg = "获取位置失败";
      if (err.code === 1) {
        errMsg = "定位权限已拒绝，请在浏览器中允许位置访问";
      } else if (err.code === 2) {
        errMsg = "无法获取位置信息：定位服务不可用";
      } else if (err.code === 3) {
        errMsg = "定位请求超时，请稍后重试";
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
  initMobileDropdowns();
  initDraggableCartBtn();
  initCustomTooltip();

  // Dynamic aesthetic mode initialization (Anti-FOUC)
  if (checkAestheticPreference()) {
    setTimeout(() => {
      applyAestheticMode(true, false);
      const welcomed = sessionStorage.getItem(_AESTHETIC_WELCOMED_KEY);
      if (!welcomed) {
        showAncientWelcomeModal();
        sessionStorage.setItem(_AESTHETIC_WELCOMED_KEY, '1');
      }
    }, 120);
  }
});

// --- Mobile Theme-Matched Custom Dropdowns (≤767px) ---
function closeAllMobileDropdowns() {
  document.querySelectorAll(".mobile-mod-card.has-dropdown").forEach(card => {
    card.classList.remove("open");
    const menu = card.querySelector(".mobile-custom-dropdown");
    if (menu) menu.style.display = "none";
  });
}

function syncMobileSortDropdown() {
  const sortLabels = {
    "heat": "综合",
    "likes": "点赞",
    "downloads": "导出",
    "name": "名称"
  };
  const sortLabel = document.getElementById("mobile-sort-label");
  if (sortLabel) {
    sortLabel.textContent = sortLabels[state.currentSort] || "综合";
  }
  const sortItems = document.querySelectorAll("#mobile-sort-dropdown .mobile-dropdown-item");
  sortItems.forEach(it => {
    if (it.dataset.value === state.currentSort) it.classList.add("active");
    else it.classList.remove("active");
  });
}

function initMobileDropdowns() {
  const dropdownCards = document.querySelectorAll(".mobile-mod-card.has-dropdown");
  dropdownCards.forEach(card => {
    const trigger = card.querySelector(".mobile-mod-trigger") || card;
    trigger.addEventListener("click", e => {
      if (e.target.closest(".mobile-custom-dropdown")) return;
      e.stopPropagation();
      const isOpen = card.classList.contains("open");
      closeAllMobileDropdowns();
      if (!isOpen) {
        card.classList.add("open");
        const menu = card.querySelector(".mobile-custom-dropdown");
        if (menu) menu.style.display = "flex";
      }
    });
  });

  // Multi-select filter items click (不自动关闭，支持自由多选)
  const filterItems = document.querySelectorAll("#mobile-filter-dropdown .mobile-filter-item");
  filterItems.forEach(item => {
    item.addEventListener("click", e => {
      e.stopPropagation();
      const filterKey = item.dataset.filter;
      if (filterKey === "direct") {
        state.filterDirectOnly = !state.filterDirectOnly;
        if (state.filterDirectOnly) state.filterVpnOnly = false;
        showToast(state.filterDirectOnly ? "已勾选：国内直连" : "已取消：国内直连");
      } else if (filterKey === "no-boundary") {
        state.filterNoBoundary = !state.filterNoBoundary;
        if (state.filterNoBoundary) state.filterBoundaryOnly = false;
        showToast(state.filterNoBoundary ? "已勾选：无边界争议" : "已取消：无边界争议");
      } else if (filterKey === "no-drift") {
        state.filterNoDrift = !state.filterNoDrift;
        if (state.filterNoDrift) state.filterDriftOnly = false;
        showToast(state.filterNoDrift ? "已勾选：无坐标偏移" : "已取消：无坐标偏移");
      } else if (filterKey === "xyz") {
        state.filterXyzOnly = !state.filterXyzOnly;
        showToast(state.filterXyzOnly ? "已勾选：仅XYZ瓦片" : "已取消：仅XYZ瓦片");
      }
      syncMobileFilterDropdown();
      renderLayers();
    });
  });

  // Reset button click in filter dropdown
  const filterResetBtn = document.getElementById("mobile-filter-reset-btn");
  if (filterResetBtn) {
    filterResetBtn.addEventListener("click", e => {
      e.stopPropagation();
      state.filterDirectOnly = false;
      state.filterVpnOnly = false;
      state.filterNoBoundary = false;
      state.filterBoundaryOnly = false;
      state.filterNoDrift = false;
      state.filterDriftOnly = false;
      state.filterXyzOnly = false;
      showToast("已清空所有筛选");
      syncMobileFilterDropdown();
      renderLayers();
    });
  }

  // Sort dropdown items click
  const sortItems = document.querySelectorAll("#mobile-sort-dropdown .mobile-dropdown-item");
  sortItems.forEach(item => {
    item.addEventListener("click", e => {
      e.stopPropagation();
      const val = item.dataset.value;
      state.currentSort = val;
      const sortSelect = document.getElementById("sort-select");
      if (sortSelect) sortSelect.value = val;
      const mobileSortSelect = document.getElementById("mobile-sort-select");
      if (mobileSortSelect) mobileSortSelect.value = val;
      syncMobileSortDropdown();
      renderLayers();
      closeAllMobileDropdowns();
    });
  });

  // Click outside to close
  document.addEventListener("click", e => {
    if (!e.target.closest(".mobile-mod-card.has-dropdown")) {
      closeAllMobileDropdowns();
    }
  });

  window.addEventListener("scroll", () => {
    closeAllMobileDropdowns();
  }, { passive: true });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeAllMobileDropdowns();
    }
  });

  // 初始化移动端下拉状态
  syncMobileFilterDropdown();
  syncMobileSortDropdown();
}

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

  const textEl = btn.querySelector(".view-toggle-text") || btn.querySelector(".mobile-layout-text");
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
    showToast(isDouble ? "已切换为双列视图" : "已切换为单列视图");
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

  // 移动端：当展开筛选工具栏后，点击工具栏外部区域自动收起折叠
  document.addEventListener("pointerdown", e => {
    if (window.innerWidth > 767) return;
    if (toolbar.classList.contains("toolbar-collapsed")) return;
    if (!toolbar.contains(e.target)) {
      localStorage.setItem("qgis_toolbar_collapsed", "1");
      applyToolbarCollapsed(toolbar, btn, true);
    }
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
  // 方案 A：临时消除所有 transition 时序差，实现 GitHub/Vercel 级全站同帧利落瞬切
  const disableTransitions = document.createElement('style');
  disableTransitions.textContent = '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
  document.head.appendChild(disableTransitions);

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

  // 强制触发一次重排，确保当前帧即刻呈现新主题
  if (document.body) {
    (() => window.getComputedStyle(document.body).opacity)();
  }

  // 待新主题渲染完毕后恢复正常鼠标 hover 交互微动效
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      disableTransitions.remove();
    });
  });
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

// --- Cloudflare Worker API Base ---
const WORKER_BASE_URL = "https://mapsource-api.lidmwork.workers.dev";

function initClientVisit() {
  const vid = getVisitorId();
  // 向 Cloudflare Worker 上报访问（PV/UV），完全不涉及 IP 存储
  fetch(`${WORKER_BASE_URL}/visit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vid })
  }).then(res => res.ok ? res.json() : null).then(json => {
    if (json && json.code === 0 && json.data) {
      // 访问上报成功，拿到最新 PV/UV，更新界面与缓存
      const { pv, uv } = json.data;
      const pvEl = document.getElementById("stat-pv");
      const uvEl = document.getElementById("stat-uv");
      if (pvEl) animateCountUp(pvEl, pv, 700);
      if (uvEl) animateCountUp(uvEl, uv, 700);
      updateCachedStat("pv", pv);
      updateCachedStat("uv", uv);
    }
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
      const sRes = await fetch("./data/layers.json?v=8.4");
      const sData = await sRes.json();
      rawData = Array.isArray(sData) ? sData : (sData.data || []);
    }

    if (rawData) {
      const localOffsets = JSON.parse(localStorage.getItem("qgis_likes_offsets") || "{}");
      let cachedLikes = {};
      try { cachedLikes = JSON.parse(localStorage.getItem("qgis_cached_global_likes") || "{}"); } catch (e) {}
      let cachedDownloads = {};
      try { cachedDownloads = JSON.parse(localStorage.getItem("qgis_cached_layer_downloads") || "{}"); } catch (e) {}

      state.layers = rawData.map(l => {
        const rawLikes = (typeof l.likes === 'number' && !isNaN(l.likes)) ? l.likes : 0;
        l._baseLikes = rawLikes;
        const cachedCount = cachedLikes[l.id];
        const remoteLikes = (typeof cachedCount === 'number') ? cachedCount : 0;
        const offset = state.liked.has(l.id) ? (localOffsets[l.id] !== undefined ? localOffsets[l.id] : 1) : 0;
        l.likes = Math.max(rawLikes, remoteLikes, offset);

        const rawDownloads = (typeof l.downloads === 'number' && !isNaN(l.downloads)) ? l.downloads : 0;
        const localDl = (typeof cachedDownloads[l.id] === 'number') ? cachedDownloads[l.id] : 0;
        l.downloads = Math.max(rawDownloads, localDl);

        l.heat = (typeof l.heat === 'number' && !isNaN(l.heat) && l.heat > 0)
          ? Math.max(l.heat, l.likes * 2 + l.downloads * 3)
          : (l.likes * 2 + l.downloads * 3);
        // 修正缩略图相对路径
        if (l.thumbnail && l.thumbnail.startsWith("/")) {
          l.thumbnail = "." + l.thumbnail;
        }
        return l;
      });
      renderCategories();
      renderLayers();
      syncGlobalLikes();
    }
  } catch (err) {
    console.error("加载底图数据失败:", err);
    showToast("无法加载底图列表，请检查网络");
  }
}

async function syncGlobalLikes() {
  if (!state.layers || state.layers.length === 0) return;
  const vid = getVisitorId();
  const ids = state.layers.map(l => l.id).join(",");
  try {
    const res = await fetch(`${WORKER_BASE_URL}/likes?ids=${encodeURIComponent(ids)}&vid=${encodeURIComponent(vid)}`, {
      cache: "no-store"
    });
    if (res.ok) {
      const json = await res.json();
      if (json.code === 0 && json.data) {
        let cachedLikes = {};
        try { cachedLikes = JSON.parse(localStorage.getItem("qgis_cached_global_likes") || "{}"); } catch (e) {}

        state.layers.forEach(layer => {
          const remote = json.data[layer.id];
          if (remote) {
            if (typeof remote.likes === 'number') {
              const baseLikes = typeof layer._baseLikes === 'number' ? layer._baseLikes : 0;
              layer.likes = Math.max(baseLikes, remote.likes);
              cachedLikes[layer.id] = layer.likes;
            }
            // 同步全网真实导出次数（Worker KV 权威值，只增不减）
            if (typeof remote.downloads === 'number' && remote.downloads > 0) {
              layer.downloads = Math.max(layer.downloads || 0, remote.downloads);
            }
            layer.heat = layer.likes * 2 + (layer.downloads || 0) * 3;
            if (remote.liked) {
              state.liked.add(layer.id);
            }
            const likeEl = document.getElementById(`like-${layer.id}`);
            if (likeEl) likeEl.textContent = layer.likes;
            const tableLikeEl = document.getElementById(`table-like-${layer.id}`);
            if (tableLikeEl) tableLikeEl.textContent = layer.likes;

            const heatEl = document.getElementById(`heat-${layer.id}`);
            if (heatEl) heatEl.textContent = layer.heat;
            const tableHeatEl = document.getElementById(`table-heat-${layer.id}`);
            if (tableHeatEl) tableHeatEl.textContent = layer.heat;

            const isLiked = state.liked.has(layer.id);
            const cardBtn = document.querySelector(`.layer-card[data-id="${layer.id}"] .like-btn`);
            if (cardBtn) {
              cardBtn.classList.toggle("liked", isLiked);
              const icon = cardBtn.querySelector(".like-icon");
              if (icon) icon.innerHTML = isLiked ? ICONS.heartFilled : ICONS.heartOutline;
            }
            const rowBtn = document.querySelector(`tr[data-id="${layer.id}"] .like-btn`);
            if (rowBtn) {
              rowBtn.classList.toggle("liked", isLiked);
              const icon = rowBtn.querySelector(".like-icon");
              if (icon) icon.innerHTML = isLiked ? ICONS.heartFilled : ICONS.heartOutline;
            }
          }
        });
        localStorage.setItem("qgis_cached_global_likes", JSON.stringify(cachedLikes));
        localStorage.setItem("qgis_liked", JSON.stringify(Array.from(state.liked)));

        // 更新顶部总赞数展示
        updateTotalLikesStat(true);

        // 若当前处于默认热度或点赞排序，重新渲染确保高赞底图按热度实时浮动置顶展示
        if (state.currentSort === "heat" || state.currentSort === "likes") {
          renderLayers();
        }
      }
    }
  } catch (e) {
    console.warn("同步全网点赞数据失败:", e);
  }
}

async function loadStats() {
  // 1. 先读缓存，立即渲染（首屏无闪烁）
  let cached = {};
  try { cached = JSON.parse(localStorage.getItem("qgis_cached_global_stats") || "{}"); } catch (e) {}

  const basePv = cached.pv || 80;
  const baseUv = cached.uv || 50;
  const baseDownloads = cached.downloads || parseInt(localStorage.getItem("qgis_site_downloads") || "28", 10);

  updateStatsUi({
    pv: basePv,
    uv: baseUv,
    downloads: baseDownloads,
    layers: state.layers.length || 55,
    checkTime: "2026年5月26日"
  });

  // 2. 异步从 Cloudflare Worker 拉取最新全网真实数据
  try {
    const res = await fetch(`${WORKER_BASE_URL}/stats`, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json.code === 0 && json.data) {
        const { pv, uv, downloads } = json.data;
        const pvEl = document.getElementById("stat-pv");
        const uvEl = document.getElementById("stat-uv");
        const dlEl = document.getElementById("stat-downloads");
        if (pvEl) animateCountUp(pvEl, pv, 700);
        if (uvEl) animateCountUp(uvEl, uv, 700);
        if (dlEl) animateCountUp(dlEl, downloads, 700);
        updateCachedStat("pv", pv);
        updateCachedStat("uv", uv);
        updateCachedStat("downloads", downloads);
        localStorage.setItem("qgis_site_downloads", downloads);
      }
    }
  } catch (e) {
    // Worker 不可达时保持显示缓存值，静默降级
  }
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

  updateTotalLikesStat(false);

  const ctEl = document.getElementById("stat-check-time");
  if (ctEl) ctEl.textContent = data.checkTime || "2026年5月26日";
  const bctEl = document.getElementById("banner-check-time");
  if (bctEl) bctEl.textContent = data.checkTime || "2026年5月26日";
}

function updateTotalLikesStat(animate = true) {
  const likesEl = document.getElementById("stat-likes");
  if (!likesEl) return;
  let total = 0;
  if (state.layers && state.layers.length > 0) {
    total = state.layers.reduce((sum, l) => sum + (l.likes || 0), 0);
  } else {
    try {
      const cached = JSON.parse(localStorage.getItem("qgis_cached_global_likes") || "{}");
      total = Object.values(cached).reduce((sum, v) => sum + (typeof v === 'number' ? v : 0), 0);
    } catch (e) {}
  }
  const finalVal = Math.max(total, 13);
  if (animate) {
    animateCountUp(likesEl, finalVal, 500);
  } else {
    likesEl.textContent = finalVal;
  }
}

// connectBusuanziLiveStats 已由 Cloudflare Worker /visit 接口替代，不蒜子已下线
function connectBusuanziLiveStats() {}


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
    if (layer.format === "插件类" || !layer.url || (!layer.url.trim().startsWith("http") && !layer.url.includes("url=http"))) return false;
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
    showToast(`已取消【${cat}】筛选`);
  } else {
    state.activeCategory = cat;
    showToast(`已筛选：${cat}`);
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
  showToast(state.filterDirectOnly ? "已筛选：国内直连" : "已取消直连筛选");
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
  showToast(state.filterVpnOnly ? "已筛选：需代理" : "已取消需代理筛选");
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
  showToast(state.filterBoundaryOnly ? "已筛选：边界警示" : "已取消边界警示筛选");
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
  showToast(state.filterDriftOnly ? "已筛选：GCJ-02偏移" : "已取消GCJ-02偏移筛选");
  renderLayers();
}

// 卡片空白处不再绑定分类筛选逻辑，防止用户点击或选择文本时误触发分类切换
function handleCardClick(e, layerId) {
  // no-op
}

// 移动端【筛选】下拉选择特性
function applyMobileFilterSelect(val) {
  state.filterDirectOnly = false;
  state.filterVpnOnly = false;
  state.filterNoBoundary = false;
  state.filterBoundaryOnly = false;
  state.filterNoDrift = false;
  state.filterDriftOnly = false;
  state.filterXyzOnly = false;

  if (val === "direct") {
    state.filterDirectOnly = true;
    showToast("已筛选：国内直连");
  } else if (val === "no-boundary") {
    state.filterNoBoundary = true;
    showToast("已筛选：无边界争议");
  } else if (val === "no-drift") {
    state.filterNoDrift = true;
    showToast("已筛选：无坐标偏移");
  } else if (val === "xyz") {
    state.filterXyzOnly = true;
    showToast("已筛选：仅XYZ瓦片");
  } else if (val === "compliant") {
    state.filterDirectOnly = true;
    state.filterNoBoundary = true;
    showToast("已筛选：合规直连(无边界+直连)");
  } else if (val === "vpn") {
    state.filterVpnOnly = true;
    showToast("已筛选：需代理/VPN");
  } else if (val === "boundary-risk") {
    state.filterBoundaryOnly = true;
    showToast("已筛选：存在边界争议");
  } else if (val === "drift") {
    state.filterDriftOnly = true;
    showToast("已筛选：火星坐标偏移");
  } else {
    showToast("已重置特性筛选：全部底图");
  }

  // 同步桌面端复选框勾选状态
  const chkDirect = document.getElementById("chk-direct");
  const chkBoundary = document.getElementById("chk-boundary");
  const chkDrift = document.getElementById("chk-drift");
  const chkXyz = document.getElementById("chk-xyz");
  if (chkDirect) chkDirect.checked = state.filterDirectOnly;
  if (chkBoundary) chkBoundary.checked = state.filterNoBoundary;
  if (chkDrift) chkDrift.checked = state.filterNoDrift;
  if (chkXyz) chkXyz.checked = state.filterXyzOnly;

  syncMobileFilterDropdown();
  renderLayers();
}

function syncMobileFilterDropdown() {
  const card = document.getElementById("mobile-mod-filter");
  const filterLabel = document.getElementById("mobile-filter-label");
  const resetBtn = document.getElementById("mobile-filter-reset-btn");

  const isDirect = !!state.filterDirectOnly;
  const isNoBoundary = !!state.filterNoBoundary;
  const isNoDrift = !!state.filterNoDrift;
  const isXyz = !!state.filterXyzOnly;

  // Sync checkboxes inside the dropdown
  const itemDirect = document.querySelector('#mobile-filter-dropdown .mobile-filter-item[data-filter="direct"]');
  const itemBoundary = document.querySelector('#mobile-filter-dropdown .mobile-filter-item[data-filter="no-boundary"]');
  const itemDrift = document.querySelector('#mobile-filter-dropdown .mobile-filter-item[data-filter="no-drift"]');
  const itemXyz = document.querySelector('#mobile-filter-dropdown .mobile-filter-item[data-filter="xyz"]');

  if (itemDirect) itemDirect.classList.toggle("checked", isDirect);
  if (itemBoundary) itemBoundary.classList.toggle("checked", isNoBoundary);
  if (itemDrift) itemDrift.classList.toggle("checked", isNoDrift);
  if (itemXyz) itemXyz.classList.toggle("checked", isXyz);

  // Sync desktop checkboxes
  const chkDirect = document.getElementById("chk-direct");
  const chkBoundary = document.getElementById("chk-boundary");
  const chkDrift = document.getElementById("chk-drift");
  const chkXyz = document.getElementById("chk-xyz");
  if (chkDirect && chkDirect.checked !== isDirect) chkDirect.checked = isDirect;
  if (chkBoundary && chkBoundary.checked !== isNoBoundary) chkBoundary.checked = isNoBoundary;
  if (chkDrift && chkDrift.checked !== isNoDrift) chkDrift.checked = isNoDrift;
  if (chkXyz && chkXyz.checked !== isXyz) chkXyz.checked = isXyz;

  // Calculate selected labels
  const selected = [];
  if (isDirect) selected.push("直连");
  if (isNoBoundary) selected.push("无争议");
  if (isNoDrift) selected.push("无偏移");
  if (isXyz) selected.push("XYZ");

  if (filterLabel) {
    if (selected.length === 0) {
      filterLabel.textContent = "无";
    } else if (selected.length === 1) {
      filterLabel.textContent = selected[0];
    } else if (isDirect && isNoBoundary && selected.length === 2) {
      filterLabel.textContent = "合规(2)";
    } else {
      filterLabel.textContent = `已选(${selected.length})`;
    }
  }

  if (card) {
    card.classList.toggle("has-active-filter", selected.length > 0);
  }

  if (resetBtn) {
    resetBtn.style.opacity = selected.length > 0 ? "1" : "0.35";
    resetBtn.style.pointerEvents = selected.length > 0 ? "auto" : "none";
  }

  // Sync hidden native select value
  const sel = document.getElementById("mobile-filter-select");
  if (sel) {
    if (isDirect && isNoBoundary) sel.value = "compliant";
    else if (isDirect) sel.value = "direct";
    else if (isNoBoundary) sel.value = "no-boundary";
    else if (isNoDrift) sel.value = "no-drift";
    else if (isXyz) sel.value = "xyz";
    else sel.value = "all";
  }
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

  // 同步移动端标签触发器当前文本与专属下拉浮层
  const tagLabel = document.getElementById("mobile-tag-label");
  if (tagLabel) {
    tagLabel.textContent = state.activeCategory === "全部" ? "全部" : state.activeCategory;
  }
  const tagCard = document.getElementById("mobile-mod-tag");
  if (tagCard) {
    tagCard.classList.toggle("has-active-category", state.activeCategory !== "全部");
  }

  const tagDropdown = document.getElementById("mobile-tag-dropdown");
  if (tagDropdown) {
    tagDropdown.innerHTML = "";
    cats.forEach(c => {
      const count = c === "全部" 
        ? state.layers.filter(l => l.format !== "插件类").length
        : state.layers.filter(l => l.format !== "插件类" && l.categories.includes(c)).length;
      const item = document.createElement("div");
      item.className = `mobile-dropdown-item ${state.activeCategory === c ? "active" : ""}`;
      item.dataset.value = c;
      item.innerHTML = `<span>${c}</span><span class="item-count">${count}</span>`;
      item.addEventListener("click", e => {
        e.stopPropagation();
        toggleCategoryFilter(c);
        closeAllMobileDropdowns();
      });
      tagDropdown.appendChild(item);
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
      opt.textContent = `${c} (${count})`;
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
  updateAddAllBtn(filtered);

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

      return `
        <div class="layer-card ${inCart ? 'in-cart' : ''}"
             data-id="${escapeHtml(layer.id)}">
          <div class="card-thumb-wrap" onclick="openPreviewModal('${escapeAttrJs(layer.id)}')" title="点击预览底图">
            ${thumb}
            <span class="card-format-badge">${escapeHtml(layer.interpretation ? `${layer.format} (DEM)` : layer.format)}</span>
            <div class="card-thumb-overlay">
              <span class="card-thumb-title">${escapeHtml(layer.name)}</span>
            </div>
          </div>
          <div class="card-body">
            <p class="card-desc" title="${escapeHtml(layer.description || '无详细简介')}">
              ${formatDescWithLinks(layer.description || '在线瓦片服务，支持在 QGIS 中加载。')}
            </p>

            <div class="card-tags">
              ${layer.interpretation ? `<span class="tag tag-format" style="border-color:#10b981;color:#059669;font-weight:600;" title="需 interpretation=${escapeHtml(layer.interpretation)} 解算为 32位 Float DEM">DEM解码</span>` : ''}
              ${layer.categories.map(c => `
                <span class="tag tag-cat ${state.activeCategory === c ? 'active' : ''}"
                      onclick="handleTagClick(event, '${escapeAttrJs(c)}')"
                      title="按【${escapeHtml(c)}】分类筛选">
                  ${escapeHtml(c)}
                </span>
              `).join('')}
              ${layer.needs_vpn 
                ? `<span class="tag tag-vpn ${state.filterVpnOnly ? 'active' : ''}" onclick="handleVpnClick(event)" title="按需代理底图筛选">需代理/魔法</span>` 
                : `<span class="tag tag-direct ${state.filterDirectOnly ? 'active' : ''}" onclick="handleDirectClick(event)" title="按国内直连筛选">国内直连</span>`
              }
              ${layer.has_boundary_issue 
                ? `<span class="tag tag-boundary ${state.filterBoundaryOnly ? 'active' : ''}" onclick="handleBoundaryClick(event)" title="按边界警示筛选">${ICONS.warning} 边界警示</span>` 
                : ''
              }
              ${layer.has_coordinate_drift 
                ? `<span class="tag tag-drift ${state.filterDriftOnly ? 'active' : ''}" onclick="handleDriftClick(event)" title="按GCJ-02偏移筛选">${ICONS.compass} GCJ-02偏移</span>` 
                : ''
              }
            </div>

            <!-- 直接明码显示 URL -->
            <div class="card-url-box" onclick="event.stopPropagation(); copyText('${escapeAttrJs(layer.url)}', '已复制底图服务 URL')" title="点击复制URL">
              <code class="card-url-code">${escapeHtml(layer.url || '插件管理（无需URL）')}</code>
              <button class="btn-copy-url" title="复制 URL">${ICONS.copy}</button>
            </div>

            <div class="card-footer">
              <div class="card-actions-left">
                <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="handleLike('${escapeAttrJs(layer.id)}')" title="${isLiked ? '取消推荐' : '推荐此底图'}">
                  <span class="like-icon">${isLiked ? ICONS.heartFilled : ICONS.heartOutline}</span>
                  <span class="like-count" id="like-${escapeHtml(layer.id)}">${layer.likes || 0}</span>
                </button>
                <span class="heat-badge" title="综合热度指数">${ICONS.flame} <span id="heat-${escapeHtml(layer.id)}">${layer.heat || 0}</span></span>
              </div>
              <button class="add-cart-btn ${inCart ? 'added' : ''}" onclick="toggleCart('${escapeAttrJs(layer.id)}')">
                <span class="btn-text-full">${inCart ? (isAncientAesthetic ? '已在行囊' : '已在配置单') : (isAncientAesthetic ? '+ 收入行囊' : '+ 加入配置')}</span>
                <span class="btn-text-short">${inCart ? (isAncientAesthetic ? '已纳' : '已选') : (isAncientAesthetic ? '+ 收入' : '+ 选入')}</span>
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
            return `
              <tr data-id="${escapeHtml(l.id)}">
                <td style="font-weight: 500; color: var(--text-main);" class="table-layer-title-cell">
                  <a href="javascript:void(0)" class="table-layer-title-link" data-layer-id="${escapeHtml(l.id)}" onclick="openPreviewModal('${escapeAttrJs(l.id)}')" title="悬停看卡片预览图，点击打开交互式地图">
                    <span class="table-thumb-indicator" title="悬停快速预览">${ICONS.image}</span>
                    <span>${escapeHtml(l.name)}</span>
                  </a>
                  <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent-blue); margin-top: 3px; max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer;" title="点击一键复制 URL: ${escapeHtml(l.url)}" onclick="copyText('${escapeAttrJs(l.url)}', '已复制底图服务 URL')">
                    ${ICONS.copy} ${escapeHtml(l.url || '-')}
                  </div>
                </td>
                <td><span class="card-format-badge table-format-badge">${escapeHtml(l.interpretation ? `${l.format} (DEM)` : l.format)}</span></td>
                <td>
                  ${l.categories.map(c => `
                    <span class="tag tag-cat ${state.activeCategory === c ? 'active' : ''}"
                          onclick="handleTagClick(event, '${escapeAttrJs(c)}')"
                          title="按【${escapeHtml(c)}】分类筛选">
                      ${escapeHtml(c)}
                    </span>
                  `).join(' ')}
                </td>
                <td>
                  ${l.needs_vpn 
                    ? `<span class="tag tag-vpn ${state.filterVpnOnly ? 'active' : ''}" onclick="handleVpnClick(event)" title="按需代理底图筛选">需代理</span>` 
                    : `<span class="tag tag-direct ${state.filterDirectOnly ? 'active' : ''}" onclick="handleDirectClick(event)" title="按国内直连筛选">直连</span>`
                  }
                </td>
                <td>
                  ${l.has_boundary_issue 
                    ? `<span class="tag tag-boundary ${state.filterBoundaryOnly ? 'active' : ''}" onclick="handleBoundaryClick(event)" title="按边界警示筛选">边界警示</span> ` 
                    : ''
                  }
                  ${l.has_coordinate_drift 
                    ? `<span class="tag tag-drift ${state.filterDriftOnly ? 'active' : ''}" onclick="handleDriftClick(event)" title="按GCJ-02偏移筛选">GCJ-02</span>` 
                    : ''
                  }
                </td>
                <td>
                  <div style="display: inline-flex; align-items: center; gap: 8px;">
                    <span class="heat-badge" title="综合热度指数">${ICONS.flame} <span id="table-heat-${escapeHtml(l.id)}">${l.heat || 0}</span></span>
                    <button class="like-btn table-like-btn ${isLiked ? 'liked' : ''}" onclick="handleLike('${escapeAttrJs(l.id)}')" title="${isLiked ? '取消推荐' : '推荐此底图'}">
                      <span class="like-icon">${isLiked ? ICONS.heartFilled : ICONS.heartOutline}</span>
                      <span class="like-count" id="table-like-${escapeHtml(l.id)}">${l.likes || 0}</span>
                    </button>
                  </div>
                </td>
                <td style="text-align: right;">
                  <button class="add-cart-btn ${inCart ? 'added' : ''}" style="display: inline-flex;" onclick="toggleCart('${escapeAttrJs(l.id)}')">
                    ${inCart ? (isAncientAesthetic ? '已纳' : '已选') : (isAncientAesthetic ? '收入' : '加入')}
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
    showToast(isAncientAesthetic ? "已从百宝囊取出" : "已从配置单移除");
  } else {
    state.cart.add(layerId);
    showToast(isAncientAesthetic ? "已收入随身百宝囊" : "已添加到底图配置单");
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
    checkoutBtn.textContent = count > 0 
      ? (isAncientAesthetic ? `收入囊中 (生成脚本 · ${count} 卷)` : `结算生成 QGIS 导入脚本 (${count} 项)`) 
      : (isAncientAesthetic ? "囊中尚无舆图" : "请先添加底图");
  }
  const clearBtn = document.getElementById("drawer-clear-btn");
  if (clearBtn) {
    clearBtn.disabled = count === 0;
  }
}

function renderCartDrawer() {
  const listEl = document.getElementById("drawer-cart-list");
  if (state.cart.size === 0) {
    listEl.innerHTML = `<div class="drawer-empty">${isAncientAesthetic ? '囊中空空如也<br>少侠快去挑选舆图秘籍吧' : '未选择底图<br>请从列表中添加'}</div>`;
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
  showToast(isAncientAesthetic ? "两袖清风，行囊已空" : "已清空底图配置单");
}

// --- 全选当前显示结果 ---
function updateAddAllBtn(filtered) {
  const btn = document.getElementById("floating-addall-btn");
  const iconEl = document.getElementById("addall-icon");
  const labelEl = document.getElementById("addall-label");
  const countEl = document.getElementById("addall-count");
  if (!btn) return;

  filtered = filtered || getFilteredLayers();
  const total = filtered.length;

  if (total === 0) {
    btn.className = "floating-addall-btn";
    btn.title = isAncientAesthetic ? "当前无舆图可选" : "当前无底图可选";
    btn.disabled = true;
    if (labelEl) labelEl.textContent = isAncientAesthetic ? "尽收当前" : "全选当前";
    if (countEl) countEl.textContent = "";
    if (iconEl) iconEl.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
    return;
  }

  btn.disabled = false;
  const allInCart = filtered.every(l => state.cart.has(l.id));
  const hasFilter = state.activeCategory !== "全部" || state.searchQuery.trim() !== "" ||
    state.filterDirectOnly || state.filterVpnOnly || state.filterNoBoundary ||
    state.filterBoundaryOnly || state.filterNoDrift || state.filterDriftOnly || state.filterXyzOnly;

  if (allInCart) {
    btn.className = "floating-addall-btn all-selected";
    btn.title = isAncientAesthetic ? `从百宝囊移出当前 ${total} 卷舆图` : `取消全选当前 ${total} 款底图`;
    if (labelEl) labelEl.textContent = isAncientAesthetic ? "尽数纳毕" : "取消全选";
    if (countEl) countEl.textContent = total;
    if (iconEl) iconEl.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  } else {
    const notInCart = filtered.filter(l => !state.cart.has(l.id)).length;
    btn.className = "floating-addall-btn" + (hasFilter ? " has-filter" : "");
    btn.title = isAncientAesthetic ? `将当前显示的 ${total} 卷舆图全部收入囊中` : `将当前显示的 ${total} 款底图全部加入配置单`;
    if (labelEl) labelEl.textContent = isAncientAesthetic ? "尽收当前" : "全选当前";
    if (countEl) countEl.textContent = notInCart < total ? notInCart : total;
    if (iconEl) iconEl.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  }
}

function toggleAddAllFiltered() {
  const filtered = getFilteredLayers();
  if (filtered.length === 0) return;

  const allInCart = filtered.every(l => state.cart.has(l.id));

  if (allInCart) {
    // 取消全选：从购物车移除当前结果中的所有项
    filtered.forEach(l => state.cart.delete(l.id));
    showToast(isAncientAesthetic ? `已从百宝囊取出 ${filtered.length} 卷舆图` : `已从配置单移除 ${filtered.length} 款底图`);
  } else {
    // 全选：将当前结果中未入购物车的全部加入
    const added = filtered.filter(l => !state.cart.has(l.id));
    added.forEach(l => state.cart.add(l.id));
    showToast(isAncientAesthetic ? `已将 ${added.length} 卷舆图尽入囊中` : `已将 ${added.length} 款底图加入配置单`);
  }

  saveCart();
  updateCartBadge();
  renderLayers();
  renderCartDrawer();
}

function applyPreset(presetType) {
  if (presetType === "top10_direct") {
    // 精选推荐 10 款底图：
    // 1. esri影像 (layer_36)
    // 2. 谷歌影像 (layer_38)
    // 3. osm.de (layer_18)
    // 4. 星图地球 (layer_12)
    // 5. Esri_World_Light_Gray_Base (layer_15)
    // 6. Esri Topography Map地形图 (layer_13)
    // 7. 欧洲海洋观测EMODnet (layer_48)
    // 8. 高德卫星图 (layer_49)
    // 9. CycleOSM_Waymarked_Trails (layer_26)
    // 10. 高德矢量电子地图 (layer_51)
    const targetLayerIds = [
      "layer_36", // esri影像
      "layer_38", // 谷歌影像
      "layer_18", // osm.de
      "layer_12", // 星图地球
      "layer_15", // Esri World Light Gray Base
      "layer_13", // Esri Elevation World Hillshade
      "layer_48", // 欧洲海洋观测EMODnet
      "layer_49", // 高德卫星图 style=6
      "layer_26", // CycleOSM Waymarked Trails
      "layer_51"  // 高德矢量电子地图 style=7
    ];
    const top10 = [];
    targetLayerIds.forEach(id => {
      const match = state.layers.find(l => l.id === id);
      if (match && !top10.some(item => item.id === match.id)) {
        top10.push(match);
      }
    });
    // 容错补充（支持 URL 特征匹配）
    if (top10.length < 10) {
      const fallbackUrlKeywords = [
        "World_Imagery/MapServer",
        "mt1.google.com/vt/lyrs=s",
        "tile.openstreetmap.de",
        "geovisearth.com",
        "Canvas/World_Light_Gray_Base",
        "Elevation/World_Hillshade",
        "tiles.emodnet-bathymetry.eu",
        "autonavi.com/appmaptile?style=6",
        "waymarkedtrails.org/cycling",
        "autonavi.com/appmaptile?lang=zh_cn&size=1&style=7"
      ];
      fallbackUrlKeywords.forEach(kw => {
        if (top10.length >= 10) return;
        const match = state.layers.find(l => l.url && l.url.includes(kw) && !top10.some(item => item.id === l.id));
        if (match) top10.push(match);
      });
    }
    top10.forEach(l => state.cart.add(l.id));
    showToast(`已选入 ${top10.length} 款国内常用推荐底图`);
  } else if (presetType === "imagery") {
    const imags = state.layers.filter(l => l.categories.some(c => c.includes("影像")));
    imags.forEach(l => state.cart.add(l.id));
    showToast("已选入全部卫星影像");
  } else if (presetType === "compliant") {
    const comp = state.layers.filter(l => l.format !== "插件类" && !l.has_boundary_issue && !l.needs_vpn);
    comp.forEach(l => state.cart.add(l.id));
    showToast("已选入合规推荐底图");
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
    let res = await fetch("./like-animation.json").catch(() => null);
    if (!res || !res.ok) {
      res = await fetch("like-animation.json").catch(() => null);
    }
    if (!res || !res.ok) {
      res = await fetch("/like-animation.json").catch(() => null);
    }
    if (res && res.ok) {
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

// --- Likes (乐观 UI 更新：0ms 立即变色并播放动画，后台静默云端同步) ---
async function handleLike(layerId) {
  const vid = getVisitorId();
  const willLike = !state.liked.has(layerId);
  const action = willLike ? "like" : "unlike";

  const layer = state.layers.find(l => l.id === layerId);

  // 1. 【0ms 乐观更新】先立即更新内存与界面，零延迟响应用户交互
  if (willLike) {
    state.liked.add(layerId);
  } else {
    state.liked.delete(layerId);
  }
  localStorage.setItem("qgis_liked", JSON.stringify(Array.from(state.liked)));

  if (layer) {
    const currentLikes = typeof layer.likes === 'number' ? layer.likes : 0;
    layer.likes = Math.max(0, currentLikes + (willLike ? 1 : -1));
    layer.heat = layer.likes * 2 + (layer.downloads || 0) * 3;
  }

  // 2. 立即同步更新卡片视图 DOM 与播放动效
  const likeCountEl = document.getElementById(`like-${layerId}`);
  if (likeCountEl && layer) likeCountEl.textContent = layer.likes;

  const heatEl = document.getElementById(`heat-${layerId}`);
  if (heatEl && layer) heatEl.textContent = layer.heat;

  const card = document.querySelector(`.layer-card[data-id="${layerId}"] .like-btn`);
  if (card) {
    card.classList.toggle("liked", willLike);
    card.title = willLike ? "点赞中 · 点击取消点赞" : "点赞推荐此底图";
    const icon = card.querySelector(".like-icon");
    if (icon) {
      icon.innerHTML = willLike ? ICONS.heartFilled : ICONS.heartOutline;
      if (willLike) triggerLikeLottie(icon);
      else triggerUnlikeLottie(icon);
    }
  }

  // 3. 立即同步更新表格列表视图 DOM 与播放动效
  const tableLikeEl = document.getElementById(`table-like-${layerId}`);
  if (tableLikeEl && layer) tableLikeEl.textContent = layer.likes;

  const tableHeatEl = document.getElementById(`table-heat-${layerId}`);
  if (tableHeatEl && layer) tableHeatEl.textContent = layer.heat;

  const tableRowBtn = document.querySelector(`tr[data-id="${layerId}"] .like-btn`);
  if (tableRowBtn) {
    tableRowBtn.classList.toggle("liked", willLike);
    tableRowBtn.title = willLike ? "点赞中 · 点击取消点赞" : "点赞推荐此底图";
    const icon = tableRowBtn.querySelector(".like-icon");
    if (icon) {
      icon.innerHTML = willLike ? ICONS.heartFilled : ICONS.heartOutline;
      if (willLike) triggerLikeLottie(icon);
      else triggerUnlikeLottie(icon);
    }
  }

  showToast(isAncientAesthetic ? (willLike ? "敬大侠 🤜🤛" : "已取消敬意") : (willLike ? "已推荐" : "已取消推荐"));

  // 4. 【后台静默同步】不阻塞主线程，无需让用户等待网络响应
  (async () => {
    let finalLikes = null;
    let synced = false;

    // 若非本地 Python 环境，直接发给 Cloudflare Worker（跳过 404 的 ./api/like）
    const isLocalServer = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    if (isLocalServer) {
      try {
        const res = await fetch("./api/like", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ layer_id: layerId, visitor_id: vid, action })
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.code === 0 && json.data) {
            finalLikes = json.data.likes;
            synced = true;
          }
        }
      } catch (e) {}
    }

    if (!synced) {
      try {
        const res = await fetch(`${WORKER_BASE_URL}/like`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ layer_id: layerId, vid, action }),
          cache: "no-store"
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.code === 0 && json.data) {
            finalLikes = json.data.likes;
            synced = true;
          }
        }
      } catch (e) {}
    }

    if (synced && typeof finalLikes === 'number' && layer) {
      layer.likes = finalLikes;
      layer.heat = layer.likes * 2 + (layer.downloads || 0) * 3;
      try {
        const cachedLikes = JSON.parse(localStorage.getItem("qgis_cached_global_likes") || "{}");
        cachedLikes[layerId] = finalLikes;
        localStorage.setItem("qgis_cached_global_likes", JSON.stringify(cachedLikes));
      } catch (e) {}
      if (likeCountEl) likeCountEl.textContent = finalLikes;
      if (tableLikeEl) tableLikeEl.textContent = finalLikes;
      if (heatEl) heatEl.textContent = layer.heat;
      if (tableHeatEl) tableHeatEl.textContent = layer.heat;
      updateTotalLikesStat(true);
    }
  })();
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

    if (fmt === "VEC" || fmt === "VEC-A") {
      const urlLines = rawUrl.split("\n").map(u => u.trim()).filter(Boolean);
      const isArcGisVec = fmt === "VEC-A" || rawUrl.includes('arcgis.com') || rawUrl.includes('VectorTileServer') || rawUrl.includes('root.json');

      lines.push(`# >>> [${isArcGisVec ? 'VEC-A 矢量切片 - ArcGIS服务' : 'VEC 矢量切片'}] ${name}`);
      if (cats) lines.push(`#     分类: ${cats}`);
      if (desc) lines.push(`#     说明: ${desc}`);
      if (layer.has_boundary_issue) lines.push("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考");
      if (layer.has_coordinate_drift) lines.push("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准");
      if (layer.needs_vpn) lines.push("#     🌐 标注: 境外服务器源，加载需网络代理");
      lines.push("try:");
      lines.push(`    layer_name = '${name}'`);

      if (isArcGisVec) {
        let styleUrl = pySq(urlLines.find(u => u.includes('root.json') || u.includes('VectorTileServer')) || urlLines[0]);
        lines.push(`    style_url = '${styleUrl}'`);
        lines.push("    zmin = 0");
        lines.push("    zmax = 14");
        lines.push("    # Modern QGIS 3.28+ / 4.x (ArcGIS 专用矢量切片服务架构)");
        lines.push("    base_key = f'connections/vector-tile/items/{layer_name}'");
        lines.push("    settings.setValue(f'{base_key}/service-type', 'arcgis')");
        lines.push("    settings.setValue(f'{base_key}/type', 'xyz')");
        lines.push("    settings.setValue(f'{base_key}/url', style_url)");
        lines.push("    settings.setValue(f'{base_key}/styleUrl', style_url)");
        lines.push("    settings.setValue(f'{base_key}/zmin', zmin)");
        lines.push("    settings.setValue(f'{base_key}/zmax', zmax)");
        lines.push("    settings.setValue(f'{base_key}/http-header/referer', '')");
        lines.push("    # Legacy QGIS 3.x compatibility keys");
        lines.push("    for legacy_prefix in [f'connections-vector-tiles/{layer_name}', f'qgis/connections-vectortiles/{layer_name}']:");
        lines.push("        settings.setValue(f'{legacy_prefix}/service-type', 'arcgis')");
        lines.push("        settings.setValue(f'{legacy_prefix}/type', 'xyz')");
        lines.push("        settings.setValue(f'{legacy_prefix}/url', style_url)");
        lines.push("        settings.setValue(f'{legacy_prefix}/styleUrl', style_url)");
        lines.push("        settings.setValue(f'{legacy_prefix}/zmin', zmin)");
        lines.push("        settings.setValue(f'{legacy_prefix}/zmax', zmax)");
        lines.push("        settings.setValue(f'{legacy_prefix}/http-header/referer', '')");
      } else {
        let serviceUrl = pySq(urlLines[0]);
        let styleUrl = urlLines.length > 1 ? pySq(urlLines[1]) : "";
        lines.push(`    tile_url = '${serviceUrl}'`);
        lines.push(`    style_url = '${styleUrl}'`);
        lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/url', tile_url)");
        if (styleUrl) lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/styleUrl', style_url)");
        lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/zmin', 0)");
        lines.push("    settings.setValue(f'connections/vector-tile/items/{layer_name}/zmax', 14)");
        lines.push("    for legacy_prefix in [f'connections-vector-tiles/{layer_name}', f'qgis/connections-vectortiles/{layer_name}']:");
        lines.push("        settings.setValue(f'{legacy_prefix}/url', tile_url)");
        if (styleUrl) lines.push("        settings.setValue(f'{legacy_prefix}/styleUrl', style_url)");
        lines.push("        settings.setValue(f'{legacy_prefix}/zmin', 0)");
        lines.push("        settings.setValue(f'{legacy_prefix}/zmax', 14)");
      }

      if (addToCanvas) {
        lines.push("    if QgsVectorTileLayer:");
        if (isArcGisVec) {
          lines.push("        uri = f'serviceType=arcgis&type=xyz&url={style_url}&zmax=14&zmin=0&http-header:referer='");
        } else {
          lines.push("        uri = f'type=xyz&url={tile_url}&zmin=0&zmax=14'");
          if (styleUrl) lines.push("        if style_url: uri = f'styleUrl={style_url}&' + uri");
        }
        lines.push("        vl = QgsVectorTileLayer(uri, layer_name)");
        lines.push("        if vl.isValid():");
        if (isArcGisVec) {
          lines.push("            try:");
          lines.push("                vl.loadDefaultStyle()");
          lines.push("            except Exception:");
          lines.push("                pass");
        } else {
          lines.push("            if style_url and QgsMapBoxGlStyleConverter and (not hasattr(vl.renderer(), 'styles') or not vl.renderer().styles()):");
          lines.push("                try:");
          lines.push("                    ctx = ssl.create_default_context()");
          lines.push("                    ctx.check_hostname = False");
          lines.push("                    ctx.verify_mode = ssl.CERT_NONE");
          lines.push("                    req = urllib.request.Request(style_url, headers={'User-Agent': 'Mozilla/5.0 QGIS/3.x'})");
          lines.push("                    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:");
          lines.push("                        s_data = json.loads(resp.read().decode('utf-8'))");
          lines.push("                        conv = QgsMapBoxGlStyleConverter()");
          lines.push("                        if conv.convert(s_data) == QgsMapBoxGlStyleConverter.Success:");
          lines.push("                            vl.setRenderer(conv.renderer())");
          lines.push("                            if conv.labeling(): vl.setLabeling(conv.labeling())");
          lines.push("                except Exception:");
          lines.push("                    pass");
        }
        lines.push("            QgsProject.instance().addMapLayer(vl)");
        lines.push("            loaded_layers += 1");
        lines.push("            print(f'  [√] 成功添加矢量切片至画布: {layer_name}')");
        lines.push("        else:");
        lines.push("            print(f'  [+] 已注册 Vector Tiles 连接（画布初始化受限）: {layer_name}')");
      }

      lines.push("    vec_count += 1");
      lines.push("    print(f'  [√] 成功注册 Vector Tiles 矢量切片: {layer_name}')");
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
      if (addToCanvas) {
        const loadUri = layer.qgis_uri ? pySq(layer.qgis_uri) : cleanUrl;
        lines.push(`    rl = QgsRasterLayer('${loadUri}', layer_name, 'wms')`);
        lines.push("    if rl.isValid():");
        lines.push("        QgsProject.instance().addMapLayer(rl)");
        lines.push("        loaded_layers += 1");
        lines.push("        print(f'  [√] 成功添加 WMS 至画布: {layer_name}')");
      }
      lines.push("    wms_count += 1");
      lines.push("    print(f'  [√] 成功注册 WMS/WMTS 连接: {layer_name}')");
      lines.push("except Exception as err:");
      lines.push("    print(f'  [×] 注册 WMS/WMTS 失败: {layer_name}, 错误: {err}')");
      lines.push("");
    } else {
      const cleanUrl = pySq(rawUrl.split("\n")[0].trim());
      const zmin = typeof layer.zmin === "number" ? layer.zmin : 0;
      const zmax = typeof layer.zmax === "number" ? layer.zmax : 19;
      const interp = pySq(layer.interpretation || "default");
      lines.push(`# >>> [XYZ Tiles 标准瓦片] ${name}`);
      if (cats) lines.push(`#     分类: ${cats}`);
      if (desc) lines.push(`#     说明: ${desc}`);
      if (layer.interpretation) lines.push(`#     ⚙️ 高程解码: interpretation=${layer.interpretation}`);
      if (layer.has_boundary_issue) lines.push("#     ⚠️ 标注: 存在国界线/边界争议，仅供内部科研参考");
      if (layer.has_coordinate_drift) lines.push("#     ⚠️ 标注: 采用 GCJ-02 火星坐标系，需纠偏配准");
      if (layer.needs_vpn) lines.push("#     🌐 标注: 境外服务器源，加载需网络代理");
      lines.push("try:");
      lines.push(`    layer_name = '${name}'`);
      lines.push(`    layer_url = '${cleanUrl}'`);
      lines.push(`    zmin = ${zmin}`);
      lines.push(`    zmax = ${zmax}`);
      lines.push(`    interp = '${interp}'`);
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/url', layer_url)");
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/zmin', zmin)");
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/zmax', zmax)");
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/interpretation', interp)");
      lines.push("    settings.setValue(f'connections/xyz/items/{layer_name}/http-header/referer', '')");
      lines.push("    settings.setValue(f'qgis/connections-xyz/{layer_name}/url', layer_url)");
      lines.push("    settings.setValue(f'qgis/connections-xyz/{layer_name}/zmin', zmin)");
      lines.push("    settings.setValue(f'qgis/connections-xyz/{layer_name}/zmax', zmax)");
      if (addToCanvas) {
        lines.push("    if interp != 'default':");
        lines.push("        uri = f'interpretation={interp}&type=xyz&url={layer_url}&zmax={zmax}&zmin={zmin}&http-header:referer='");
        lines.push("    else:");
        lines.push("        uri = f'type=xyz&url={layer_url}&zmax={zmax}&zmin={zmin}&http-header:referer='");
        lines.push("    rl = QgsRasterLayer(uri, layer_name, 'wms')");
        lines.push("    if rl.isValid():");
        lines.push("        QgsProject.instance().addMapLayer(rl)");
        lines.push("        loaded_layers += 1");
        lines.push("        print(f'  [√] 成功添加栅格瓦片至画布: {layer_name}')");
      }
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
  lines.push("print('【OpenQGIS】底图导入完成')");
  lines.push(`print('  - 图源核验基准: ${checkTime}')`);
  lines.push("print(f'  - XYZ Tiles 注册: {xyz_count} 项')");
  lines.push("print(f'  - WMS/WMTS 注册: {wms_count} 项')");
  lines.push("print(f'  - Vector Tiles 矢量切片注册: {vec_count} 项')");
  lines.push("print(f'  - 直接加载到画布: {loaded_layers} 项')");
  lines.push("print('可在 QGIS【浏览器】面板对应分类中查看与调用。')");
  lines.push("print('=' * 60)");

  return lines.join("\n");
}

// --- 导出底图热力值与下载统计实时递增 ---
function applyExportHeat(layerIds, serverStats = null) {
  if (!Array.isArray(layerIds) || layerIds.length === 0) return;

  let cachedDownloads = {};
  try {
    cachedDownloads = JSON.parse(localStorage.getItem("qgis_cached_layer_downloads") || "{}");
  } catch (e) {}

  let hasChanges = false;

  layerIds.forEach(lid => {
    const layer = state.layers.find(l => l.id === lid);
    if (!layer) return;

    if (serverStats && serverStats[lid] && typeof serverStats[lid].downloads === "number") {
      layer.downloads = Math.max(layer.downloads || 0, serverStats[lid].downloads);
      layer.heat = typeof serverStats[lid].heat === "number"
        ? Math.max(layer.heat || 0, serverStats[lid].heat)
        : (layer.likes * 2 + layer.downloads * 3);
    } else {
      layer.downloads = (typeof layer.downloads === "number" ? layer.downloads : 0) + 1;
      layer.heat = (typeof layer.likes === "number" ? layer.likes : 0) * 2 + layer.downloads * 3;
    }

    cachedDownloads[lid] = layer.downloads;
    hasChanges = true;

    // 实时刷新卡片视图上的热力值数字与动效
    const heatEl = document.getElementById(`heat-${lid}`);
    if (heatEl) {
      heatEl.textContent = layer.heat;
      const badge = heatEl.closest(".heat-badge");
      if (badge) {
        badge.classList.remove("heat-bump");
        void badge.offsetWidth;
        badge.classList.add("heat-bump");
        setTimeout(() => badge.classList.remove("heat-bump"), 1200);
      }
    }

    // 实时刷新表格视图上的热力值数字与动效
    const tableHeatEl = document.getElementById(`table-heat-${lid}`);
    if (tableHeatEl) {
      tableHeatEl.textContent = layer.heat;
      const tableBadge = tableHeatEl.closest(".heat-badge");
      if (tableBadge) {
        tableBadge.classList.remove("heat-bump");
        void tableBadge.offsetWidth;
        tableBadge.classList.add("heat-bump");
        setTimeout(() => tableBadge.classList.remove("heat-bump"), 1200);
      }
    }
  });

  if (hasChanges) {
    try {
      localStorage.setItem("qgis_cached_layer_downloads", JSON.stringify(cachedDownloads));
    } catch (e) {}

    // 若当前为热度或下载量排序，重新渲染列表确保高热度底图实时上浮置顶
    if (state.currentSort === "heat" || state.currentSort === "downloads") {
      renderLayers();
    }
  }
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
      // 调用 Cloudflare Worker 追踪各图层导出次数，并取回全网真实热度统计
      try {
        const wRes = await fetch(`${WORKER_BASE_URL}/export`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ layer_ids: layerIds, vid }),
          cache: "no-store"
        });
        if (wRes.ok) {
          const wJson = await wRes.json();
          if (wJson.code === 0 && wJson.data) {
            // 用 Worker 返回的全网统计覆盖本地 layer_stats
            if (wJson.data.layer_stats && Object.keys(wJson.data.layer_stats).length > 0) {
              data.layer_stats = wJson.data.layer_stats;
            }
            // 同步顶部全站累计导出数展示
            const globalDl = wJson.data.downloads;
            if (typeof globalDl === "number") {
              localStorage.setItem("qgis_site_downloads", globalDl);
              updateCachedStat("downloads", globalDl);
              const dlEl = document.getElementById("stat-downloads");
              if (dlEl) animateCountUp(dlEl, globalDl, 500);
            }
          }
        }
      } catch (e) {}
    }

    if (data) {
      document.getElementById("export-count-text").textContent = `已生成 ${data.count} 款底图的导入代码`;
      document.getElementById("script-code-box").textContent = data.script;

      // 实时递增选定导出底图的热力值并持久化
      applyExportHeat(layerIds, data.layer_stats);


      
      const downloadBtn = document.getElementById("download-script-btn");
      downloadBtn.onclick = () => {
        const blob = new Blob([data.script], { type: "text/x-python;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = data.filename || "qgis_import_basemaps.py";
        a.click();
        URL.revokeObjectURL(url);
        showToast("脚本已下载");
        incrementLocalDownloads();
      };

      document.getElementById("copy-script-btn").onclick = () => {
        copyText(data.script, isAncientAesthetic ? "秘籍已铭记，速去 QGIS 传功！" : "脚本代码已复制");
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

// --- ArcGIS 矢量切片自适应解析缓存器 ---
const arcgisStyleCache = new Map();

async function getNormalizedArcgisStyle(styleUrl) {
  if (arcgisStyleCache.has(styleUrl)) {
    return arcgisStyleCache.get(styleUrl);
  }
  const fullUrl = styleUrl.includes('f=pjson') ? styleUrl : (styleUrl + (styleUrl.includes('?') ? '&f=pjson' : '?f=pjson'));
  const res = await fetch(fullUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();

  // 1. 展开 sources 中的 VectorTileServer 相对路径为绝对切片模板
  if (json.sources) {
    for (const [sKey, sVal] of Object.entries(json.sources)) {
      if (sVal && sVal.type === 'vector') {
        const sUrl = sVal.url || '';
        if (sUrl.includes('VectorTileServer')) {
          const base = sUrl.replace(/\/+$/, '');
          delete sVal.url;
          sVal.tiles = [`${base}/tile/{z}/{y}/{x}.pbf`];
          sVal.minzoom = sVal.minzoom || 0;
          sVal.maxzoom = sVal.maxzoom || 22;
        }
      }
    }
  }

  // 2. 规范化 sprite 路径（消除相对层级，且不可带 query string，防止拼接出 ?f=pjson.json 400 报错）
  if (json.sprite) {
    json.sprite = json.sprite.replace('/styles/../', '/');
    if (json.sprite.includes('?')) {
      json.sprite = json.sprite.split('?')[0];
    }
  }

  // 3. 补全字体 glyphs 默认源
  if (!json.glyphs) {
    json.glyphs = 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf';
  }

  // 4. 去除/重命名重复图层 ID（修复 Mapbox/MapLibre GL 遇到 duplicate layer id 时完全中断渲染的致命规范限制）
  const idCounts = {};
  if (json.layers && Array.isArray(json.layers)) {
    for (let i = 0; i < json.layers.length; i++) {
      const l = json.layers[i];
      if (!l || !l.id) continue;
      if (idCounts[l.id]) {
        idCounts[l.id]++;
        l.id = `${l.id}_${idCounts[l.id]}`;
      } else {
        idCounts[l.id] = 1;
      }
    }
  }

  arcgisStyleCache.set(styleUrl, json);
  return json;
}

// --- Native MapLibre GL 矢量切片专属渲染引擎 (方案 A: 双引擎隔离) ---
function addBoundaryGeoJsonToMapLibre(map) {
  const geojsonToggle = document.getElementById("toggle-boundary-geojson");
  const show = geojsonToggle ? geojsonToggle.checked : true;

  function injectLayers(data) {
    if (!map || !map.getSource) return;
    if (map.getSource('boundary-risk-source')) return;

    try {
      map.addSource('boundary-risk-source', {
        type: 'geojson',
        data: data
      });
      map.addLayer({
        id: 'boundary-risk-fill',
        type: 'fill',
        source: 'boundary-risk-source',
        layout: {
          visibility: show ? 'visible' : 'none'
        },
        paint: {
          'fill-color': '#ef4444',
          'fill-opacity': 0.22
        }
      });
      map.addLayer({
        id: 'boundary-risk-line',
        type: 'line',
        source: 'boundary-risk-source',
        layout: {
          visibility: show ? 'visible' : 'none'
        },
        paint: {
          'line-color': '#dc2626',
          'line-width': 2.5,
          'line-dasharray': [3, 2]
        }
      });
    } catch (err) {
      console.warn("MapLibre add boundary layers failed:", err);
    }
  }

  if (state.boundaryGeoJsonData) {
    injectLayers(state.boundaryGeoJsonData);
  } else {
    fetch("./geojson/boundary_issues_sample.geojson")
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(data => {
        state.boundaryGeoJsonData = data;
        injectLayers(data);
      })
      .catch(() => {
        if (typeof BOUNDARY_ISSUES_GEOJSON !== 'undefined') {
          state.boundaryGeoJsonData = BOUNDARY_ISSUES_GEOJSON;
          injectLayers(BOUNDARY_ISSUES_GEOJSON);
        }
      });
  }
}

async function initOrUpdateMapLibrePreview(layer) {
  const container = document.getElementById("maplibre-map");
  if (!container) return;

  // 1. 安全销毁旧 WebGL 实例释放显存
  if (state.maplibreMap) {
    try {
      state.maplibreMap.remove();
    } catch (e) {
      console.warn("MapLibre cleanup error:", e);
    }
    state.maplibreMap = null;
  }

  // 2. 准备状态药丸与代理遮罩
  const statusPill = document.getElementById("preview-map-status");
  const isArcgis = (layer.format === 'VEC-A' || (layer.url && (layer.url.includes('arcgis.com') || layer.url.includes('VectorTileServer') || layer.url.includes('root.json'))));
  
  if (statusPill) {
    if (layer.needs_vpn) {
      statusPill.className = "map-status-pill warn";
      statusPill.innerHTML = `<span class="status-dot warn"></span>🟡 境外矢量源连接中...`;
    } else {
      statusPill.className = "map-status-pill warn";
      statusPill.innerHTML = `<span class="status-dot warn"></span>矢量切片载入中...`;
    }
  }

  const rawLines = (layer.url || '').split('\n').map(l => l.trim()).filter(Boolean);
  const tileUrl = rawLines[0] || '';
  let styleUrl = rawLines[1] || '';
  if (!styleUrl) {
    if (tileUrl.includes('root.json') || tileUrl.includes('.json') || tileUrl.includes('VectorTileServer')) {
      styleUrl = tileUrl;
    } else {
      styleUrl = tileUrl;
    }
  }

  let styleParam = styleUrl;
  let transformFn = null;

  try {
    if (isArcgis) {
      styleParam = await getNormalizedArcgisStyle(styleUrl);
      transformFn = (reqUrl, resourceType) => {
        if (reqUrl.includes('arcgis.com')) {
          if (resourceType === 'SpriteJSON' || (reqUrl.includes('sprite') && reqUrl.endsWith('.json'))) {
            if (!reqUrl.includes('f=pjson')) {
              const sep = reqUrl.includes('?') ? '&' : '?';
              return { url: reqUrl + sep + 'f=pjson' };
            }
          }
        }
        return { url: reqUrl };
      };
    } else {
      // 通用 MVT：如果第一行是 .mvt，第二行是 .json 样式文件，优先提取样式
      const jsonLine = rawLines.find(l => l.endsWith('.json') || l.includes('/styles/'));
      if (jsonLine) {
        styleParam = jsonLine;
      }
    }

    const mapOptions = {
      container: 'maplibre-map',
      style: styleParam,
      center: [104, 35],
      zoom: 3,
      attributionControl: false
    };
    if (transformFn) {
      mapOptions.transformRequest = transformFn;
    }

    const map = new maplibregl.Map(mapOptions);
    state.maplibreMap = map;

    let renderedAny = false;
    const onGlSuccess = () => {
      if (renderedAny) return;
      renderedAny = true;
      if (vpnTimeoutTimer) {
        clearTimeout(vpnTimeoutTimer);
        vpnTimeoutTimer = null;
      }
      hideVpnFallbackOverlay();
      setPreviewTilesLoaded(true);
      if (statusPill) {
        statusPill.className = "map-status-pill ok";
        statusPill.innerHTML = `<span class="status-dot ok"></span>${isArcgis ? 'ArcGIS 矢量底图已连接' : 'MVT 矢量切片已连接'}`;
      }
    };

    map.once('render', onGlSuccess);
    map.once('load', () => {
      onGlSuccess();
      if (layer.has_boundary_issue) {
        addBoundaryGeoJsonToMapLibre(map);
      }
    });
    map.once('idle', onGlSuccess);

    map.on('error', (e) => {
      console.warn("MapLibre runtime error:", e);
      if (!renderedAny && layer.needs_vpn && e && e.sourceId) {
        showVpnFallbackOverlay(layer);
      }
    });

    applyLayerDefaultView(layer);

    setTimeout(() => {
      if (state.maplibreMap) {
        state.maplibreMap.resize();
        applyLayerDefaultView(layer);
      }
    }, 180);

  } catch (err) {
    console.error("MapLibre 初始化异常:", err);
    if (statusPill) {
      statusPill.className = "map-status-pill warn";
      statusPill.innerHTML = `<span class="status-dot warn"></span>矢量解析受限，请在 QGIS 中加载`;
    }
  }

  // 处理 GeoJSON 边界高亮开关显示
  const geojsonToggleWrap = document.getElementById("wrap-toggle-boundary-geojson");
  const geojsonToggle = document.getElementById("toggle-boundary-geojson");
  if (geojsonToggleWrap) {
    geojsonToggleWrap.style.display = layer.has_boundary_issue ? "" : "none";
  }
  if (geojsonToggle) {
    geojsonToggle.checked = !!layer.has_boundary_issue;
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

  // 1.5 矢量切片回退降级（若直接在 Leaflet 中调用，展示官方参考底图）
  if (layer.format === 'VEC' || layer.format === 'VEC-A') {
    const rawLines = (layer.url || '').split('\n').map(l => l.trim()).filter(Boolean);
    const tileUrl = rawLines[0] || '';
    const isArcGisVec = layer.format === 'VEC-A' || tileUrl.includes('arcgis.com') || tileUrl.includes('VectorTileServer');
    if (isArcGisVec) {
      return {
        layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 19,
          attribution: 'Esri, USGS, FAO'
        }),
        status: 'ok',
        statusText: 'ArcGIS 官方地形参考底图'
      };
    }
    return {
      layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { opacity: 0.65 }),
      status: 'warn',
      statusText: '矢量切片（Leaflet 降级模式）'
    };
  }

  // 1.8 AWS Mapzen Terrarium & GeoTIFF & Normal 高程与山体阴影渲染器 (HTML5 Canvas 实时解码真实地形)
  const isGeoTiff = (url.includes('/geotiff/') || url.endsWith('.tif'));
  const isTerrarium = (layer.interpretation === 'terrariumterrain' || url.includes('/terrarium/'));
  const isNormal = url.includes('/normal/');

  if (isTerrarium || isGeoTiff || isNormal) {
    const defaultMode = isNormal ? 'hillshade' : (isGeoTiff ? 'gray' : 'color');
    const renderMode = state.demRenderMode || defaultMode;
    const tileSubpath = (renderMode === 'hillshade') ? 'normal' : 'terrarium';

    const TerrariumDecodedLayer = L.GridLayer.extend({
      createTile: function(coords, done) {
        const tile = document.createElement('canvas');
        tile.width = 256;
        tile.height = 256;
        const ctx = tile.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
          ctx.drawImage(img, 0, 0);
          try {
            const imgData = ctx.getImageData(0, 0, 256, 256);
            const d = imgData.data;

            if (renderMode === 'hillshade') {
              // Normal 法线切片: R=X(-1..1), G=Y(南..北), B=Z(下..上)
              // 经典制图西北日照 (Azimuth 315°, Altitude 45°): L = (-0.5, 0.5, 0.7071)
              for (let i = 0; i < d.length; i += 4) {
                const nx = (d[i] - 128.0) / 127.0;
                const ny = (d[i+1] - 128.0) / 127.0;
                const nz = (d[i+2] - 128.0) / 127.0;
                const dot = nx * -0.5 + ny * 0.5 + nz * 0.7071;
                const intensity = Math.min(Math.max(0.18 + 0.82 * Math.max(0, dot), 0), 1);
                const v = Math.round(intensity * 255);
                d[i] = v;
                d[i+1] = v;
                d[i+2] = v;
              }
            } else {
              // Terrarium 高程切片解码: (R * 256 + G + B / 256) - 32768
              for (let i = 0; i < d.length; i += 4) {
                const r = d[i];
                const g = d[i+1];
                const b = d[i+2];
                const elev = (r * 256 + g + b / 256.0) - 32768.0;

                if (renderMode === 'gray') {
                  // 单波段灰度 DEM 模式 (等同于 QGIS singlebandgray)
                  let v;
                  if (elev < 0) {
                    v = 15; // 海洋为深灰近黑
                  } else {
                    const norm = Math.min(Math.max(elev / 6000.0, 0), 1);
                    v = Math.round(30 + norm * 225); // 陆地高程越亮
                  }
                  d[i] = v;
                  d[i+1] = v;
                  d[i+2] = v;
                } else {
                  // 彩色地貌着色模式 (海洋水深梯度 + 陆地经典高程色阶)
                  if (elev < 0) {
                    // 海洋水深: 从浅海到深海海沟
                    const seaNorm = Math.min(Math.max((-elev) / 6000.0, 0), 1);
                    d[i] = Math.round(180 - seaNorm * 162);   // 180 -> 18
                    d[i+1] = Math.round(218 - seaNorm * 173); // 218 -> 45
                    d[i+2] = Math.round(238 - seaNorm * 143); // 238 -> 95
                  } else {
                    // 陆地高程: 0m ~ 4800m
                    const norm = Math.min(Math.max(elev / 4800.0, 0), 1);
                    if (norm < 0.2) {
                      const t = norm / 0.2;
                      d[i] = Math.round(45 + t * 100);
                      d[i+1] = Math.round(145 + t * 50);
                      d[i+2] = Math.round(50 + t * 20);
                    } else if (norm < 0.5) {
                      const t = (norm - 0.2) / 0.3;
                      d[i] = Math.round(145 + t * 85);
                      d[i+1] = Math.round(195 + t * 0);
                      d[i+2] = Math.round(70 + t * 5);
                    } else if (norm < 0.8) {
                      const t = (norm - 0.5) / 0.3;
                      d[i] = Math.round(230 - t * 65);
                      d[i+1] = Math.round(195 - t * 110);
                      d[i+2] = Math.round(75 - t * 30);
                    } else {
                      const t = (norm - 0.8) / 0.2;
                      d[i] = Math.round(165 + t * 90);
                      d[i+1] = Math.round(85 + t * 170);
                      d[i+2] = Math.round(45 + t * 210);
                    }
                  }
                }
              }
            }
            ctx.putImageData(imgData, 0, 0);
          } catch(e) {}
          done(null, tile);
        };
        img.onerror = function(err) {
          done(err, tile);
        };
        img.src = `https://s3.amazonaws.com/elevation-tiles-prod/${tileSubpath}/${coords.z}/${coords.x}/${coords.y}.png`;
        return tile;
      }
    });

    const modeLabels = {
      color: 'DEM 实时高程彩色地貌',
      gray: 'DEM 实时单波段灰度高程',
      hillshade: 'DEM 实时立体山体阴影'
    };

    return {
      layer: new TerrariumDecodedLayer({ minZoom: 0, maxZoom: 15, attribution: 'AWS Mapzen Terrain' }),
      status: 'ok',
      statusText: modeLabels[renderMode] || 'DEM 实时高程彩色地貌'
    };
  }

  // 2. 针对已知 WMS/WMTS 标准服务适配为高清切片或 WMS 请求
  if (layer.format === 'WMS/WMTS' || (layer.url && (layer.url.includes('service=WMS') || layer.url.includes('WMTS') || layer.url.includes('service')))) {
    const cap = state.wmsCapabilities[layer.id];
    const sublayerId = targetSublayerId || state.activeSublayerId || (cap && cap.layers && cap.layers[0] ? cap.layers[0].id : null);

    if (url.includes('gebco.net')) {
      return {
        layer: L.tileLayer.wms('https://wms.gebco.net/mapserv?', {
          layers: 'GEBCO_LATEST_2',
          format: 'image/png',
          transparent: false,
          attribution: 'GEBCO Bathymetry',
          maxZoom: 14
        }),
        status: 'ok',
        statusText: 'GEBCO 全球海陆水深与高程 WMS 已连接'
      };
    }

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
        statusText: `哨兵2号 - ${sId}`
      };
    }
    if (url.includes('map.geoq.cn')) {
      return {
        layer: L.tileLayer('https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 18
        }),
        status: 'ok',
        statusText: 'GeoQ 在线底图已连接'
      };
    }
    if (url.includes('thematic.geoq.cn')) {
      return {
        layer: L.tileLayer('https://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 13
        }),
        status: 'ok',
        statusText: 'GeoQ 水系专题已连接'
      };
    }
    if (url.includes('wayback.maptiles.arcgis.com')) {
      return {
        layer: L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 18
        }),
        status: 'ok',
        statusText: 'Wayback 历史影像已连接'
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
        statusText: `terrestris WMS - ${sId}`
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
        statusText: `OSM土地利用 - ${sId}`
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
          statusText: `星图地球 - ${decodeURIComponent(sId)}`
        };
      }
      return {
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { opacity: 0.5 }),
        status: 'warn',
        statusText: '星图地球（需申请 Token，已展示参考底图）'
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
        statusText: `${cap.name || 'WMS'} - ${sId}`
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
      statusText: 'OSM 人道主义底图已连接'
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
  let statusText = '在线底图已连接';
  if (layer.needs_vpn) {
    statusClass = 'warn';
    statusText = '境外图源（国内网络加载需代理或较慢）';
  }
  if (layer.has_coordinate_drift) {
    statusText += ' [火星坐标系GCJ-02]';
  }

  // 针对微软 Bing Quadkey 格式瓦片支持 Web 端实时四叉树计算
  if (cleanUrl.includes('{q}')) {
    const tileLayer = L.tileLayer(cleanUrl, {
      maxZoom: 19,
      subdomains: ['0', '1', '2', '3']
    });
    tileLayer.getTileUrl = function(coords) {
      let quadKey = '';
      for (let i = coords.z; i > 0; i--) {
        let digit = 0;
        const mask = 1 << (i - 1);
        if ((coords.x & mask) !== 0) digit += 1;
        if ((coords.y & mask) !== 0) digit += 2;
        quadKey += digit;
      }
      let finalUrl = cleanUrl.replace('{q}', quadKey);
      if (finalUrl.includes('{s}')) {
        finalUrl = finalUrl.replace('{s}', this._getSubdomain(coords));
      }
      return finalUrl;
    };
    return {
      layer: tileLayer,
      status: statusClass,
      statusText: statusText
    };
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

// --- Map Preview Transparency Grid State Controller ---
function setPreviewTilesLoaded(loaded) {
  const mapContainer = document.getElementById("leaflet-map");
  if (mapContainer) {
    mapContainer.classList.toggle("tiles-loaded", !!loaded);
    const wrap = mapContainer.closest(".leaflet-container-wrap");
    if (wrap) {
      wrap.classList.toggle("tiles-loaded", !!loaded);
    }
  }
}

// --- Tile Network State Listener Engine ---
function attachTileNetworkListeners(tileLayer, resolved) {
  if (!tileLayer) return;

  const statusPill = document.getElementById("preview-map-status");
  const isVpnLayer = !!(state.activePreviewLayer && state.activePreviewLayer.needs_vpn);

  // 1. MapLibre GL 矢量图层状态监听
  if (resolved && resolved.isMaplibre) {
    let attempts = 0;
    const bindGlEvents = () => {
      const glMap = typeof tileLayer.getMaplibreMap === 'function' ? tileLayer.getMaplibreMap() : null;
      if (!glMap) {
        if (++attempts < 25) setTimeout(bindGlEvents, 100);
        return;
      }

      let renderedAny = false;

      const markSuccess = () => {
        if (renderedAny) return;
        renderedAny = true;
        setPreviewTilesLoaded(true);
        hideVpnFallbackOverlay();
        if (statusPill) {
          statusPill.className = "map-status-pill ok";
          statusPill.innerHTML = `<span class="status-dot ok"></span>MVT 矢量底图已连接${isVpnLayer ? '（代理已连通）' : ''}`;
        }
      };

      glMap.once('render', markSuccess);
      glMap.once('idle', markSuccess);
      glMap.once('load', markSuccess);

      if (typeof glMap.loaded === 'function' && glMap.loaded()) {
        markSuccess();
      }

      glMap.on('error', (e) => {
        // 忽略非核心静态资源（如字体包、雪碧图404）造成的偶发报错
        // 只有在从未成功渲染任何画面，且发生数据源级致命错误时才提示
        if (!renderedAny && e && e.sourceId && isVpnLayer) {
          showVpnFallbackOverlay(state.activePreviewLayer);
        }
      });
    };

    setTimeout(bindGlEvents, 50);
    return;
  }

  // 2. Leaflet 栅格/WMS 切片瓦片高容错监听引擎
  let loadedTilesCount = 0;
  let failedTilesCount = 0;
  let hasShownSuccess = false;

  const target = (resolved && resolved.wmsLayer) ? resolved.wmsLayer : tileLayer;
  if (!target) return;

  // 核心原则：只要有哪怕 1 个瓦片加载成功，即证明网络物理通畅、代理正在正常工作！
  const onTileLoadSuccess = () => {
    loadedTilesCount++;
    setPreviewTilesLoaded(true);

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
          ? "境外底图已连接"
          : (resolved.statusText || "在线底图已连接");
        statusPill.innerHTML = `<span class="status-dot ok"></span>${escapeHtml(successText)}`;
      }
    }
  };

  const onTileErrorFailure = () => {
    failedTilesCount++;

    // 如果已经有切片成功加载（哪怕局部或边缘存在个别 404 瓦片），坚决不弹“无代理”！
    if (loadedTilesCount > 0) return;

    // 只有在从未成功加载过任何切片、且连续失败 4 个以上瓦片时，才推定当前网络受限
    if (failedTilesCount >= 4 && isVpnLayer) {
      showVpnFallbackOverlay(state.activePreviewLayer);
    }
  };

  const bindEvents = (layerObj) => {
    if (!layerObj) return;
    if (typeof layerObj.on === 'function') {
      layerObj.on('tileload', onTileLoadSuccess);
      layerObj.on('tileerror', onTileErrorFailure);
    }
    if (typeof layerObj.eachLayer === 'function') {
      layerObj.eachLayer(bindEvents);
    }
  };

  bindEvents(target);
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
    statusPill.innerHTML = `<span class="status-dot warn"></span>境外图源响应超时`;
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

// 格式化子图层友好简明标题，剔除冗余前缀与过长技术废话，防止移动端下拉弹窗文字过长撑爆屏幕
function formatSublayerDisplayTitle(sl, layerId) {
  if (!sl) return '';
  const id = sl.id || '';
  const title = (sl.title || '').trim();

  if (layerId === 'layer_6') {
    const mYear = title.match(/Sentinel-2\s+cloudless(?:\s+layer)?\s+(?:for\s+)?(\d{4})/i) || id.match(/s2cloudless-(\d{4})/i) || id.match(/s2cloudless_(\d{4})/i);
    const mEpsg = title.match(/(\d{4})$/) || id.match(/(\d{4})$/);
    const epsgStr = mEpsg ? mEpsg[1] : '';

    if (mYear) return `哨兵2号 ${mYear[1]}无云${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('streets') || title.toLowerCase().includes('streets')) return `街道路网${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('graticules') || title.toLowerCase().includes('graticules')) return `经纬度网格${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('coastline') || title.toLowerCase().includes('coastline')) return `海岸线图层${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('hydrography') || title.toLowerCase().includes('hydrography')) return `水系水文图层${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('overlay_bright') || title.toLowerCase().includes('bright overlay')) return `明亮路网叠加${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('overlay_base') || title.toLowerCase().includes('overlay base')) return `基础路网叠加${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('overlay') || title.toLowerCase().includes('overlay')) return `标准路网叠加${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('bluemarble')) return `NASA蓝色大理石${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('blackmarble')) return `NASA黑色大理石夜光${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('terrain-light')) return `浅色地形底图${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('terrain')) return `晕渲地形底图${epsgStr ? ` (${epsgStr})` : ''}`;
    if (id.includes('osm')) return `OSM基础底图${epsgStr ? ` (${epsgStr})` : ''}`;
  }

  if (title && title !== id) {
    if (title.startsWith(id)) return title;
    if (title.startsWith('World Imagery (Wayback')) {
      const m = title.match(/Wayback\s+[^)]+/);
      if (m) return m[0];
    }
    if (title.includes('by terrestris')) {
      return title.replace(' - by terrestris', '');
    }
    return title;
  }
  return id;
}

function updateSublayerMetaDisplay(layerId, sublayerId) {
  const capData = findWmsCapabilityForLayer({ id: layerId });
  const sublayerObj = capData && capData.layers ? capData.layers.find(s => s.id === sublayerId) : null;
  const sublayerTitle = sublayerObj ? formatSublayerDisplayTitle(sublayerObj, layerId) : (sublayerId || "");

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
        const displayTitle = formatSublayerDisplayTitle(sl, layerId);
        const cleanAbs = (sl.abstract || '').replace(/<[^>]+>/g, '').trim();
        const fullTooltip = sl.id && sl.id !== displayTitle ? `${sl.id} · ${cleanAbs || sl.title || sl.id}` : (cleanAbs || sl.title || sl.id);
        return `<option value="${escapeHtml(sl.id)}" title="${escapeHtml(fullTooltip)}">${escapeHtml(displayTitle)}</option>`;
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

  const titleEl = document.getElementById("preview-modal-title");
  if (titleEl) {
    titleEl.innerHTML = `<span class="preview-title-name">${escapeHtml(layer.name)}</span>`;
  }
  const formatEl = document.getElementById("preview-meta-format");
  if (formatEl) formatEl.textContent = layer.format || "-";
  const urlEl = document.getElementById("preview-meta-url");
  if (urlEl) {
    urlEl.textContent = layer.url || "无URL";
    urlEl.title = layer.url ? `点击直接复制 URL:\n${layer.url}` : "";
  }
  const previewDescEl = document.getElementById("preview-meta-desc");
  if (previewDescEl) {
    previewDescEl.innerHTML = formatDescWithLinks(layer.description || "在线瓦片服务，支持在 QGIS 中加载。");
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
      boundaryAlertText.innerHTML = `<span class="svg-icon" style="display:inline-flex; align-items:center; margin-right:5px; vertical-align:-1px;">${ICONS.warning}</span>该图源国界线画法不规范（涉及藏南、阿克赛钦、南海诸岛等）`;
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

  // 切换子图层时重置瓦片状态（加载前保持灰色，加载成功后呈现棋盘格透明底）
  setPreviewTilesLoaded(false);

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
        statusPill.innerHTML = `<span class="status-dot ok"></span>${escapeHtml(sublayerId)}`;
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
  const leafletContainer = document.getElementById("leaflet-map");
  const maplibreContainer = document.getElementById("maplibre-map");
  if (!leafletContainer && !maplibreContainer) return;

  // 打开新底图或切换图层时重置瓦片状态（加载前保持灰色，加载成功后呈现棋盘格透明底）
  setPreviewTilesLoaded(false);

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

  const isVectorTile = (layer.format === 'VEC' || layer.format === 'VEC-A');

  if (isVectorTile) {
    state.activeEngine = 'maplibre';
    if (leafletContainer) leafletContainer.style.display = 'none';
    if (maplibreContainer) maplibreContainer.style.display = 'block';

    if (state.activeTileLayer && state.previewMap) {
      state.previewMap.removeLayer(state.activeTileLayer);
      state.activeTileLayer = null;
    }

    initOrUpdateMapLibrePreview(layer);
    return;
  }

  // 栅格切片流程：Leaflet 原生接管
  state.activeEngine = 'leaflet';
  if (maplibreContainer) maplibreContainer.style.display = 'none';
  if (leafletContainer) leafletContainer.style.display = 'block';

  if (state.maplibreMap) {
    try { state.maplibreMap.remove(); } catch (e) {}
    state.maplibreMap = null;
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

  // 处理 DEM 渲染模式切换按钮（对支持高程与山体阴影的 Terrarium、GeoTIFF 与 Normal 图源显示）
  const isDem = (layer.interpretation === 'terrariumterrain' || (layer.url && (layer.url.includes('/geotiff/') || layer.url.includes('/terrarium/') || layer.url.includes('/normal/'))));
  const demModeWrap = document.getElementById("preview-dem-mode-wrap");
  if (demModeWrap) {
    demModeWrap.style.display = isDem ? "inline-flex" : "none";
    if (isDem && !state.demRenderMode) {
      if (layer.url && layer.url.includes('/normal/')) {
        state.demRenderMode = 'hillshade';
      } else if (layer.url && layer.url.includes('/geotiff/')) {
        state.demRenderMode = 'gray';
      } else {
        state.demRenderMode = 'color';
      }
    }
    updateDemModeButtonsUI();
  }
}

function updateDemModeButtonsUI() {
  const isNorm = state.activePreviewLayer && state.activePreviewLayer.url && state.activePreviewLayer.url.includes('/normal/');
  const isGeo = state.activePreviewLayer && state.activePreviewLayer.url && state.activePreviewLayer.url.includes('/geotiff/');
  const defaultMode = isNorm ? 'hillshade' : (isGeo ? 'gray' : 'color');
  const mode = state.demRenderMode || defaultMode;
  ['color', 'gray', 'hillshade'].forEach(m => {
    const btn = document.getElementById(`btn-dem-${m}`);
    if (btn) {
      if (m === mode) {
        btn.classList.add('active');
        btn.style.background = 'var(--accent-green)';
        btn.style.color = '#fff';
      } else {
        btn.classList.remove('active');
        btn.style.background = 'var(--bg-card)';
        btn.style.color = 'var(--text-main)';
      }
    }
  });
}

function switchDemRenderMode(mode) {
  if (state.demRenderMode === mode) return;
  state.demRenderMode = mode;
  updateDemModeButtonsUI();

  if (state.previewMap && state.activePreviewLayer) {
    if (state.activeTileLayer) {
      state.previewMap.removeLayer(state.activeTileLayer);
      state.activeTileLayer = null;
    }
    const resolved = resolveLeafletTileLayer(state.activePreviewLayer);
    state.activeTileLayer = resolved.layer;
    attachTileNetworkListeners(state.activeTileLayer, resolved);
    state.activeTileLayer.addTo(state.previewMap);
    const statusPill = document.getElementById("preview-map-status");
    if (statusPill) {
      statusPill.className = `map-status-pill ${resolved.status}`;
      statusPill.innerHTML = `<span class="status-dot ${resolved.status}"></span>${escapeHtml(resolved.statusText)}`;
    }
  }
}
window.switchDemRenderMode = switchDemRenderMode;

function toggleBoundaryGeoJson(show) {
  if (state.activeEngine === "maplibre" && state.maplibreMap) {
    const map = state.maplibreMap;
    if (map.getLayer('boundary-risk-line')) {
      map.setLayoutProperty('boundary-risk-line', 'visibility', show ? 'visible' : 'none');
      map.setLayoutProperty('boundary-risk-fill', 'visibility', show ? 'visible' : 'none');
    } else if (show) {
      addBoundaryGeoJsonToMapLibre(map);
    }
    return;
  }

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

  if (state.boundaryGeoJsonData) {
    renderBoundaryGeoJson(state.boundaryGeoJsonData);
  } else {
    fetch("./geojson/boundary_issues_sample.geojson")
      .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then(data => {
        state.boundaryGeoJsonData = data;
        renderBoundaryGeoJson(data);
      })
      .catch(() => {
        if (typeof BOUNDARY_ISSUES_GEOJSON !== 'undefined') {
          state.boundaryGeoJsonData = BOUNDARY_ISSUES_GEOJSON;
          renderBoundaryGeoJson(BOUNDARY_ISSUES_GEOJSON);
        }
      });
  }
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
    setPreviewTilesLoaded(false);

    // 释放 MapLibre WebGL 显存
    if (state.maplibreMap) {
      try { state.maplibreMap.remove(); } catch (e) {}
      state.maplibreMap = null;
    }
    const maplibreContainer = document.getElementById("maplibre-map");
    if (maplibreContainer) maplibreContainer.style.display = "none";
    const leafletContainer = document.getElementById("leaflet-map");
    if (leafletContainer) leafletContainer.style.display = "block";
    state.activeEngine = "leaflet";

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
    if (state.maplibreMap) state.maplibreMap.resize();
  }, 220);
}

function openCart() {
  document.body.classList.add("cart-open");
  const fc = document.getElementById("floating-cart-container");
  if (fc) fc.classList.add("drawer-open");
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.style.transform = "";
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

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerHTML = `<span class="toast-dot" aria-hidden="true"></span><span class="toast-text">${escapeHtml(msg)}</span>`;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
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

  // 搜索（桌面端与移动端双向同步 + 隐秘暗号支持）
  const searchInput = document.getElementById("search-input");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const handleEggKeydown = e => {
    if (e.key === "Enter") {
      if (checkSearchEasterEgg(e.target.value)) {
        e.preventDefault();
        e.stopPropagation();
        e.target.value = "";
        state.searchQuery = "";
        if (searchInput) searchInput.value = "";
        if (mobileSearchInput) mobileSearchInput.value = "";
        renderLayers();
      }
    }
  };
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      state.searchQuery = e.target.value.trim();
      if (mobileSearchInput && mobileSearchInput.value !== e.target.value) {
        mobileSearchInput.value = e.target.value;
      }
      renderLayers();
    });
    searchInput.addEventListener("keydown", handleEggKeydown);
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", e => {
      state.searchQuery = e.target.value.trim();
      if (searchInput && searchInput.value !== e.target.value) {
        searchInput.value = e.target.value;
      }
      renderLayers();
    });
    mobileSearchInput.addEventListener("keydown", handleEggKeydown);
  }

  // 排序（桌面端与移动端双向同步）
  const sortSelect = document.getElementById("sort-select");
  const mobileSortSelect = document.getElementById("mobile-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      state.currentSort = e.target.value;
      if (mobileSortSelect && mobileSortSelect.value !== e.target.value) {
        mobileSortSelect.value = e.target.value;
      }
      syncMobileSortDropdown();
      renderLayers();
    });
  }
  if (mobileSortSelect) {
    mobileSortSelect.addEventListener("change", e => {
      state.currentSort = e.target.value;
      if (sortSelect && sortSelect.value !== e.target.value) {
        sortSelect.value = e.target.value;
      }
      syncMobileSortDropdown();
      renderLayers();
    });
  }

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

  // 手机端【标签】下拉选择器
  const mobileCatSelect = document.getElementById("mobile-category-select");
  if (mobileCatSelect) {
    mobileCatSelect.addEventListener("change", e => {
      toggleCategoryFilter(e.target.value);
    });
  }

  // 手机端【筛选】特性下拉选择器
  const mobileFilterSelect = document.getElementById("mobile-filter-select");
  if (mobileFilterSelect) {
    mobileFilterSelect.addEventListener("change", e => {
      applyMobileFilterSelect(e.target.value);
    });
  }

  // 桌面端过滤复选框
  const chkDirect = document.getElementById("chk-direct");
  if (chkDirect) {
    chkDirect.addEventListener("change", e => {
      state.filterDirectOnly = e.target.checked;
      if (state.filterDirectOnly) state.filterVpnOnly = false;
      syncMobileFilterDropdown();
      renderLayers();
    });
  }

  const chkBoundary = document.getElementById("chk-boundary");
  if (chkBoundary) {
    chkBoundary.addEventListener("change", e => {
      state.filterNoBoundary = e.target.checked;
      if (state.filterNoBoundary) state.filterBoundaryOnly = false;
      syncMobileFilterDropdown();
      renderLayers();
    });
  }

  const chkDrift = document.getElementById("chk-drift");
  if (chkDrift) {
    chkDrift.addEventListener("change", e => {
      state.filterNoDrift = e.target.checked;
      if (state.filterNoDrift) state.filterDriftOnly = false;
      syncMobileFilterDropdown();
      renderLayers();
    });
  }

  const chkXyz = document.getElementById("chk-xyz");
  if (chkXyz) {
    chkXyz.addEventListener("change", e => {
      state.filterXyzOnly = e.target.checked;
      syncMobileFilterDropdown();
      renderLayers();
    });
  }

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
      showToast("已切换至中国视野");
    });
  }

  const btnResetWorld = document.getElementById("btn-reset-world-view");
  if (btnResetWorld) {
    btnResetWorld.addEventListener("click", () => {
      resetToWorldView();
      showToast("已切换至全球视野");
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
    const handleClose = e => {
      e.stopPropagation();
      e.preventDefault();
      wmsDock.classList.remove("expanded");
      if (wmsToggleBtn) wmsToggleBtn.setAttribute("aria-expanded", "false");
    };
    wmsCloseBtn.addEventListener("click", handleClose);
    wmsCloseBtn.addEventListener("touchend", handleClose);
  }

  // 点击地图画布或弹窗空白处、触摸外部区域自动收起子图层悬浮下拉
  const previewMapWrap = document.getElementById("leaflet-map");
  if (previewMapWrap && wmsDock) {
    previewMapWrap.addEventListener("click", () => {
      if (wmsDock.classList.contains("expanded")) {
        wmsDock.classList.remove("expanded");
        if (wmsToggleBtn) wmsToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 移动端全局监听：展开子图层悬浮窗后，轻触弹窗内地图或任意外部区域立即收起折叠
  document.addEventListener("pointerdown", e => {
    if (wmsDock && wmsDock.classList.contains("expanded")) {
      if (!wmsDock.contains(e.target)) {
        wmsDock.classList.remove("expanded");
        if (wmsToggleBtn) wmsToggleBtn.setAttribute("aria-expanded", "false");
      }
    }
  });

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
        showToast(val ? "Token 已保存，切片已刷新" : "Token 已清除");
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
        showToast(`已切换为直连底图：${alt.name}`);
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
      showToast("已保留当前视图");
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
  const onSuccess = () => showToast(successMsg || "已复制到剪贴板");
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
    descEl.textContent = (layer.description || "在线瓦片服务，支持在 QGIS 中加载。").replace(/<[^>]*>/g, "");

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

  // 确保每次打开页面始终默认出现在右下角，清除历史残留的记忆位置，不记录悬浮窗口位置
  try {
    localStorage.removeItem("qgis_cart_btn_pos");
  } catch (e) {}

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

      // 不记录悬浮窗口位置：当次拖拽吸附仅作临时避让，不持久化，重新加载或下次打开页面始终重置在右下角
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



// --- 全网累计导出计数器（Cloudflare Worker） ---
let lastTrackedExportTime = 0;

// syncGlobalDownloads 已整合进 loadStats()，此函数保留为空壳以兼容旧调用点
async function syncGlobalDownloads() {}

async function incrementLocalDownloads() {
  // 本地即时响应 +1（保证下载/复制动作有即时视觉反馈）
  // 注：全站 Worker 计数已在 handleCheckout 生成脚本时统一上报，此处不再重复
  let localDl = parseInt(localStorage.getItem("qgis_site_downloads") || "28", 10) + 1;
  localStorage.setItem("qgis_site_downloads", localDl);
  updateCachedStat("downloads", localDl);
  const dlEl = document.getElementById("stat-downloads");
  if (dlEl) animateCountUp(dlEl, localDl, 500);
}

// ==========================================================================
// 全局主题匹配自定义 Tooltip 提示窗 (Anti-AI Crafted Design)
// 替换浏览器原生默认 title 黄色提示窗，支持黑白主题自适应、智能避让与高质感微投影
// 区分两类交互模式：
// 1. 卡片区域 (.layer-card)：跟随鼠标指针 (Follow Cursor)，不带箭头，视口边缘智能避让
// 2. 顶部工具栏/状态栏/控制按钮：吸附锚定 (Anchor)，居中对齐，带微型指示三角
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
  let currentMode = "anchor"; // "anchor" | "follow"
  let lastMouseX = 0;
  let lastMouseY = 0;
  let rafId = null;

  function hideTooltip() {
    clearTimeout(showTimer);
    showTimer = null;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (tooltipEl.classList.contains("visible")) {
      tooltipEl.classList.remove("visible");
      tooltipEl.setAttribute("aria-hidden", "true");
    }
    activeTarget = null;
  }

  // 计算并更新跟随鼠标模式下的坐标
  function updateFollowPosition(clientX, clientY) {
    if (!tooltipEl || currentMode !== "follow" || !tooltipEl.classList.contains("visible")) return;

    const tipWidth = tooltipEl.offsetWidth;
    const tipHeight = tooltipEl.offsetHeight;
    const gapX = 14;
    const gapY = 16;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 默认在鼠标光标右下方
    let left = clientX + gapX;
    let top = clientY + gapY;

    // 边缘避让：超出右边缘则翻转到光标左侧
    if (left + tipWidth > viewportWidth - 10) {
      left = clientX - tipWidth - 12;
    }
    // 超出底边缘则翻转到光标上方
    if (top + tipHeight > viewportHeight - 10) {
      top = clientY - tipHeight - 12;
    }

    // 视口安全边距夹紧
    left = Math.max(8, Math.min(viewportWidth - tipWidth - 8, left));
    top = Math.max(8, Math.min(viewportHeight - tipHeight - 8, top));

    tooltipEl.style.left = `${Math.round(left)}px`;
    tooltipEl.style.top = `${Math.round(top)}px`;
  }

  function showTooltip(target, text, clientX, clientY) {
    if (!text || !text.trim()) return;
    textEl.textContent = text.trim();

    // 预渲染测量尺寸
    tooltipEl.style.left = "-9999px";
    tooltipEl.style.top = "-9999px";
    tooltipEl.classList.remove("placement-top", "placement-bottom", "mode-follow");

    // 判定是否在卡片内部（底图卡片区域）
    const isCard = !!target.closest(".layer-card");

    if (isCard) {
      // --- 模式 1：跟随鼠标模式 (Follow Cursor) ---
      currentMode = "follow";
      tooltipEl.classList.add("mode-follow");

      const posX = typeof clientX === "number" ? clientX : lastMouseX;
      const posY = typeof clientY === "number" ? clientY : lastMouseY;

      tooltipEl.classList.add("visible");
      tooltipEl.setAttribute("aria-hidden", "false");
      updateFollowPosition(posX, posY);
    } else {
      // --- 模式 2：吸附锚定模式 (Anchor - 工具栏、状态栏、操作按钮等) ---
      currentMode = "anchor";

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
  }

  // 统一事件委托处理 mouseover
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-tooltip], [title]");
    if (!target) return;

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

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

    const isCard = !!target.closest(".layer-card");

    // 如果已经在同一个目标元素上且已可见，仅更新坐标（跟随模式）
    if (activeTarget === target && tooltipEl.classList.contains("visible")) {
      if (isCard) {
        updateFollowPosition(e.clientX, e.clientY);
      }
      return;
    }

    clearTimeout(showTimer);
    activeTarget = target;
    const targetX = e.clientX;
    const targetY = e.clientY;

    // 卡片提示增加 350ms 悬停停留延时，避免快速扫过误触发；工具栏保留 150ms 舒适微延时
    const delay = isCard ? 350 : 150;
    showTimer = setTimeout(() => {
      if (activeTarget === target) {
        showTooltip(target, tipText, lastMouseX, lastMouseY);
      }
    }, delay);
  }, { passive: true });

  // 监听 mousemove：在卡片跟随模式下流畅跟踪鼠标指针
  document.addEventListener("mousemove", (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (activeTarget && currentMode === "follow" && tooltipEl.classList.contains("visible")) {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateFollowPosition(lastMouseX, lastMouseY);
      });
    }
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


