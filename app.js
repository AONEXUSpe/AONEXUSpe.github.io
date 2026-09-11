 /* =========================================================
   AO NEXUS — Lógica del sitio
   ========================================================= */

const WA_NUMBER = '51936177329';

/* ---------- Etiquetas de categoría ---------- */
const categoryLabels = {
  "amd":"Procesador AMD",
  "intel":"Procesador Intel",
  "placa-am4":"Placa Madre · AM4",
  "placa-am5":"Placa Madre · AM5",
  "placa-lga1851":"Placa Madre · LGA1851",
  "ddr4":"Memoria RAM DDR4",
  "ddr5":"Memoria RAM DDR5",
  "almacenamiento":"Almacenamiento SSD",
  "fuente-bronze":"Fuente de Poder · Bronze",
  "fuente-silver":"Fuente de Poder · Silver",
  "fuente-gold":"Fuente de Poder · Gold",
  "fuente-platinum":"Fuente de Poder · Platinum",
  "refrigeracion-liquida":"Refrigeración Líquida",
  "refrigeracion-aire":"Refrigeración de Aire"
};

/* ---------- Grupos de la barra superior ---------- */
const groups = {
  procesador:     { label:'Procesadores',      cats:['amd','intel'] },
  placas:         { label:'Placas Madre',      cats:['placa-am4','placa-am5','placa-lga1851'] },
  ram:            { label:'Memorias RAM',      cats:['ddr4','ddr5'] },
  almacenamiento: { label:'Almacenamiento',    cats:['almacenamiento'] },
  fuente:         { label:'Fuentes de Poder',  cats:['fuente-bronze','fuente-silver','fuente-gold','fuente-platinum'] },
  refrigeracion:  { label:'Refrigeración',     cats:['refrigeracion-liquida','refrigeracion-aire'] }
};

/* ---------- Subgrupos: cada categoría de la barra que debe verse
   dividida en secciones separadas dentro del catálogo ---------- */
const subGroups = {
  procesador:    [ { label:'AMD',                    cats:['amd'] },
                   { label:'Intel',                  cats:['intel'] } ],
  placas:        [ { label:'AMD · Socket AM5',        cats:['placa-am5'] },
                   { label:'AMD · Socket AM4',        cats:['placa-am4'] },
                   { label:'Intel · Socket LGA1851',  cats:['placa-lga1851'] } ],
  ram:           [ { label:'DDR5',                    cats:['ddr5'] },
                   { label:'DDR4',                    cats:['ddr4'] } ],
  refrigeracion: [ { label:'Refrigeración Líquida',   cats:['refrigeracion-liquida'] },
                   { label:'Torre de Aire',            cats:['refrigeracion-aire'] } ]
};

/* ---------- Catálogo ---------- */
const products = [
  // ---- AMD ----
  { id:1, name:"RYZEN 5 9600X", category:"amd", price:700, stock:5, featured:true, best:true,
    sub:"6 núcleos / 12 hilos · AM5", image:"img/RYZEN_5_9600X.jpg",
    specs:{ "Familia":"Ryzen 5 9600X","Cores/Threads":"6C/12T","Frecuencia Base":"4.4 GHz","Socket":"AM5","TDP":"65W" } },

  { id:2, name:"RYZEN 7 7800X3D", category:"amd", price:1450, stock:1, featured:true, best:true,
    sub:"8 núcleos / 16 hilos · 3D V-Cache", image:"img/RYZEN_7_7800X3D.jpg",
    specs:{ "Familia":"Ryzen 7 7800X3D","Cores/Threads":"8C/16T","Frecuencia Base":"4.2 GHz","Socket":"AM5","TDP":"120W","3D V-Cache":"Sí" } },

  { id:3, name:"RYZEN 7 9800X3D", category:"amd", price:1700, stock:1, featured:true, best:true,
    sub:"8 núcleos / 16 hilos · AM5", image:"img/RYZEN_7_9800X3D.jpg",
    specs:{ "Familia":"Ryzen 7 9800X3D","Cores/Threads":"8C/16T","Frecuencia Base":"4.7 GHz","Socket":"AM5","TDP":"120W","3D V-Cache":"Sí" } },

  { id:4, name:"RYZEN 9 9950X3D", category:"amd", price:2700, stock:1, featured:true, best:false,
    sub:"16 núcleos / 32 hilos · AM5", image:"img/RYZEN_9_9500X3D.jpg",
    specs:{ "Familia":"Ryzen 9 9950X3D","Cores/Threads":"16C/32T","Frecuencia Base":"4.3 GHz","Socket":"AM5","TDP":"120W","3D V-Cache":"Sí" } },

  { id:18, name:"RYZEN 9 9900X", category:"amd", price:1500, stock:1, featured:true, best:false, isNew:true,
    sub:"12 núcleos / 24 hilos · AM5", image:"img/RYZEN_9_9900X.jpg",
    specs:{ "Familia":"Ryzen 9 9900X","Cores/Threads":"12C/24T","Frecuencia Base":"3.9 GHz","Socket":"AM5","TDP":"120W" } },

  // ---- INTEL ----
  { id:5, name:"INTEL CORE ULTRA 5 225F", category:"intel", price:550, stock:2, featured:false, best:true,
    sub:"6 núcleos / 8 hilos · LGA1851", image:"img/ULTRA_5_225F.jpg",
    specs:{ "Familia":"Core Ultra 5 225F","Cores/Threads":"6C/8T","Frecuencia Base":"3.7 GHz","Socket":"LGA1851","TDP":"58W" } },

  { id:6, name:"INTEL CORE ULTRA 7 270K PLUS", category:"intel", price:1150, stock:1, featured:true, best:false,
    sub:"8 núcleos / 12 hilos · LGA1851", image:"img/ULTRA_7_270K_PLUS.jpg",
    specs:{ "Familia":"Core Ultra 7 270K PLUS","Cores/Threads":"8C/12T","Frecuencia Base":"3.6 GHz","Socket":"LGA1851","TDP":"125W" } },

  { id:7, name:"INTEL CORE ULTRA 9 285K", category:"intel", price:2100, stock:1, featured:true, best:true,
    sub:"24 núcleos · LGA1851", image:"img/ULTRA_9_285K.jpg",
    specs:{ "Familia":"Core Ultra 9 285K","Cores/Threads":"24C/24T","Frecuencia Base":"3.7 GHz","Socket":"LGA1851","TDP":"125W" } },

  // ---- PLACAS MADRE ----
  { id:8, name:"B550-PLUS ASUS TUF WIFI II", category:"placa-am4", price:480, stock:2, featured:true, best:true,
    sub:"Socket AM4 · ATX · WiFi 6", image:"img/B550_PLUS_WIFI_ll.jpg",
    specs:{ "Modelo":"B550-PLUS WIFI II ASUS TUF GAMING","Socket":"AM4","Chipset":"B550","Factor Forma":"ATX","WiFi":"WiFi 6" } },

  { id:9, name:"B850M-E ASUS TUF WIFI", category:"placa-am5", price:650, stock:1, featured:true, best:false,
    sub:"Socket AM5 · Micro-ATX · WiFi 7", image:"img/B850M-E_ASUS_TUF_WIFI.jpg",
    specs:{ "Modelo":"B850M-E ASUS TUF WIFI","Socket":"AM5","Chipset":"B850M","Factor Forma":"Micro-ATX","WiFi":"WiFi 7" } },

  { id:10, name:"B850 MAX GAMING WIFI W", category:"placa-am5", price:670, stock:1, featured:false, best:false,
    sub:"Socket AM5 · ATX · WiFi 6E", image:"img/B850_MAX_GAMING_WIFI_W.jpg",
    specs:{ "Modelo":"B850 MAX GAMING WIFI W","Socket":"AM5","Chipset":"B850","Factor Forma":"ATX","WiFi":"WiFi 6E" } },

  { id:19, name:"B850-S MSI PRO WIFI6E", category:"placa-am5", price:580, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · ATX · WiFi 6E", image:"img/B850-S_MSI_PRO_WIFI6E.jpg",
    specs:{ "Modelo":"MSI PRO B850-S WIFI6E","Socket":"AM5","Chipset":"B850","Factor Forma":"ATX","WiFi":"WiFi 6E" } },

  { id:21, name:"GIGABYTE B650 GAMING", category:"placa-am5", price:550, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · ATX", image:"img/GIGABYTE_B650_GAMING.jpg",
    specs:{ "Modelo":"Gigabyte B650 GAMING X","Socket":"AM5","Chipset":"B650","Factor Forma":"ATX" } },

  // ---- RAM ----
  { id:11, name:"NETAC 2X16GB 3200MHZ DDR4", category:"ddr4", price:650, stock:1, featured:false, best:false,
    sub:"32GB (2x16GB) DDR4 3200MHz", image:"img/NETAC_2X16GB_3200MHZ.jpg",
    specs:{ "Capacidad":"2x16GB (32GB Total)","Tipo":"DDR4","Velocidad":"3200 MHz","CAS Latency":"CL 16","Voltaje":"1.35V" } },

  { id:12, name:"TEAMGROUP T-FORCE VULCAN 2x8GB DDR5", category:"ddr5", price:720, stock:1, featured:false, best:true,
    sub:"16GB (2x8GB) DDR5 5200MHz", image:"img/TEAMGROUP_TFORCE_VULCAN_DDR5.jpg",
    specs:{ "Capacidad":"2x8GB (16GB Total)","Tipo":"DDR5","Velocidad":"5200 MHz","CAS Latency":"CL 24","Voltaje":"1.25V" } },

  // ---- ALMACENAMIENTO ----
  { id:13, name:"SSD SAMSUNG 9100 PRO 1TB", category:"almacenamiento", price:950, stock:1, featured:true, best:true,
    sub:"M.2 NVMe PCIe 5.0 · 14,800 MB/s", image:"img/SSD_SAMSUNG_9100_PRO_1TB.jpg",
    specs:{ "Capacidad":"1TB","Interfaz":"NVMe PCIe Gen 5.0","Factor Forma":"M.2 2280","Lectura":"14,800 MB/s","Escritura":"13,400 MB/s" } },

  { id:14, name:"SSD T-FORCE G50 4TB", category:"almacenamiento", price:2100, stock:1, featured:false, best:false,
    sub:"M.2 NVMe PCIe 4.0 · 4TB", image:"img/SSD_T-FORCE_G50_4TB.jpg",
    specs:{ "Capacidad":"4TB","Interfaz":"NVMe PCIe Gen 4.0","Factor Forma":"M.2 2280","Lectura":"5,000 MB/s","Escritura":"4,500 MB/s" } },

  // ---- FUENTES ----
  { id:15, name:"CORSAIR CX750 750W", category:"fuente-bronze", price:200, stock:1, featured:true, best:true,
    sub:"750W · 80 Plus Bronze", image:"img/CORSAIR_CX750_750W.jpg",
    specs:{ "Potencia":"750W","Certificación":"80+ Bronze","Tipo":"No Modular","Factor Forma":"ATX","Garantía":"1 año" } },

  // ---- REFRIGERACIÓN ----
  { id:16, name:"COOLERMASTER ELITE 240MM", category:"refrigeracion-liquida", price:120, stock:3, featured:true, best:false,
    sub:"Líquida AIO 240mm · Intel & AMD", image:"img/COOLERMASTER_ELITE_240MM.jpg",
    specs:{ "Tipo":"Liquid Cooler AIO","Tamaño":"240mm","TDP":"Hasta 250W","Compatibilidad":"Intel & AMD","Garantía":"1 año" } },

  { id:20, name:"THERMALRIGHT ELITE VISION 360 ARGB WHITE", category:"refrigeracion-liquida", price:350, stock:1, featured:true, best:false, isNew:true,
    sub:"Líquida AIO 360mm · ARGB Blanco", image:"img/THERMALRIGHT_ELITE_VISION_360_ARGB_WHITE.jpg",
    specs:{ "Tipo":"Liquid Cooler AIO","Tamaño":"360mm","Ventiladores":"3x 120mm ARGB","Compatibilidad":"Intel & AMD","Color":"Blanco","Garantía":"1 año" } },

  { id:17, name:"THERMALRIGHT PEERLESS ASSASSIN 120 DIGITAL ARGB WHITE", category:"refrigeracion-aire", price:170, stock:2, featured:false, best:true,
    sub:"Dual Tower · 245W · ARGB Blanco", image:"img/THERMALRIGHT_RGB.jpg",
    specs:{ "Tipo":"Refrigeración por Aire Dual Tower","TDP":"245W","Ventiladores":"2x 120mm ARGB","Compatibilidad":"Intel LGA115X/1200/1700/1851 & AMD AM4/AM5","Color":"Blanco","Pantalla":"Digital CPU/GPU" } }
];

/* ---------- Categorías populares (imagen tomada de un producto real) ---------- */
const popularCategories = [
  { group:'procesador',     label:'Procesadores',     img:'img/RYZEN_7_9800X3D.jpg' },
  { group:'placas',         label:'Placas Madre',     img:'img/B850M-E_ASUS_TUF_WIFI.jpg' },
  { group:'ram',            label:'Memorias RAM',     img:'img/TEAMGROUP_TFORCE_VULCAN_DDR5.jpg' },
  { group:'almacenamiento', label:'Almacenamiento',   img:'img/SSD_SAMSUNG_9100_PRO_1TB.jpg' },
  { group:'fuente',         label:'Fuentes de Poder', img:'img/CORSAIR_CX750_750W.jpg' },
  { group:'refrigeracion',  label:'Refrigeración',    img:'img/COOLERMASTER_ELITE_240MM.jpg' }
];

/* ---------- Estado ---------- */
let currentProduct = null;
let currentGroup   = null;
let currentSort    = 'default';
let onlyInStock    = false;
let searchTerm     = '';
const cart         = new Map();   // id -> qty
const favorites    = new Set();

const PLACEHOLDER = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22300%22%20height=%22300%22%3E%3Crect%20fill=%22%23131a2e%22%20width=%22300%22%20height=%22300%22/%3E%3Ctext%20x=%22150%22%20y=%22155%22%20font-family=%22sans-serif%22%20font-size=%2216%22%20fill=%22%235a678c%22%20text-anchor=%22middle%22%3EAO%20NEXUS%3C/text%3E%3C/svg%3E";

/* =========================================================
   UTILIDADES
   ========================================================= */
const money = n => 'S/ ' + n.toLocaleString('es-PE');

function stockInfo(stock){
  if(stock === 0) return { cls:'no', text:'Sin stock' };
  return { cls:'ok', text:'En stock' };
}

function toast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<i class="fas fa-circle-check"></i> ${msg}`;
  requestAnimationFrame(()=> t.classList.add('show'));
  clearTimeout(t._tm);
  t._tm = setTimeout(()=> t.classList.remove('show'), 2400);
}

function scrollTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
function focusSearch(){ document.getElementById('searchInput').focus(); }
function toggleNav(){ document.getElementById('catNav').classList.toggle('open'); }
function toggleTerms(){
  const box = document.getElementById('termsBox');
  box.hidden = !box.hidden;
  if(!box.hidden) box.scrollIntoView({behavior:'smooth', block:'center'});
}

/* =========================================================
   TARJETAS
   ========================================================= */
function productCard(p){
  const s = stockInfo(p.stock);
  const cat = categoryLabels[p.category] || '';
  const hasSale = p.oldPrice && p.oldPrice > p.price;
  const off = hasSale ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

  return `
  <article class="p-card">
    <div class="p-media" onclick="openModal(${p.id})">
      ${hasSale ? `<span class="p-badge">-${off}%</span>` : ''}
      <button class="p-fav ${favorites.has(p.id)?'on':''}" onclick="event.stopPropagation();toggleFav(${p.id},this)" title="Guardar">
        <i class="fa${favorites.has(p.id)?'s':'r'} fa-heart"></i>
      </button>
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
    </div>
    <div class="p-body">
      <span class="p-cat">${cat}</span>
      <h4 class="p-name" onclick="openModal(${p.id})" style="cursor:pointer">${p.name}</h4>
      <p class="p-spec">${p.sub || ''}</p>
      <div class="p-stock ${s.cls}"><span class="dot"></span>${s.text}</div>
      <div class="p-prices">
        <span class="p-price ${hasSale?'sale':''}">${money(p.price)}</span>
        ${hasSale ? `<span class="p-old">${money(p.oldPrice)}</span>` : ''}
      </div>
      <button class="p-btn" onclick="openModal(${p.id})">
        <i class="fas fa-cart-shopping"></i> VER DETALLES
      </button>
    </div>
  </article>`;
}

function toggleFav(id, el){
  if(favorites.has(id)){ favorites.delete(id); el.classList.remove('on'); el.innerHTML = '<i class="far fa-heart"></i>'; }
  else { favorites.add(id); el.classList.add('on'); el.innerHTML = '<i class="fas fa-heart"></i>'; toast('Guardado en favoritos'); }
}

function sortList(list, mode){
  const out = [...list];
  if(mode === 'price-asc')  out.sort((a,b)=> a.price - b.price);
  if(mode === 'price-desc') out.sort((a,b)=> b.price - a.price);
  if(mode === 'name-asc')   out.sort((a,b)=> a.name.localeCompare(b.name));
  if(mode === 'stock')      out.sort((a,b)=> b.stock - a.stock);
  return out;
}

/* =========================================================
   HOME
   ========================================================= */
function renderHome(){
  document.getElementById('featuredGrid').innerHTML =
    products.filter(p => p.featured).slice(0,5).map(productCard).join('');

  document.getElementById('bestsellersGrid').innerHTML =
    products.filter(p => p.best).slice(0,5).map(productCard).join('');

  document.getElementById('categoryGrid').innerHTML = popularCategories.map(c => `
    <div class="c-card" onclick="filterByGroup('${c.group}')">
      <img src="${c.img}" alt="${c.label}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
      <div class="c-label">${c.label} <i class="fas fa-arrow-right"></i></div>
    </div>`).join('');
}

const homeSections = ['heroSection','featuredSection','categoriesSection','bestsellersSection','helpCtaSection'];

function showHomeSections(show){
  homeSections.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.style.display = show ? '' : 'none';
  });
  const bm = document.querySelector('.benefits-mobile');
  if(bm) bm.style.display = show ? '' : 'none';
  document.getElementById('productsSection').style.display = show ? 'none' : 'block';
}

function goHome(){
  currentGroup = null;
  searchTerm = '';
  currentSort = 'default';
  onlyInStock = false;
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  document.querySelector('.cat-link').classList.add('active');
  document.getElementById('catNav').classList.remove('open');
  showHomeSections(true);
  scrollTop();
}

/* =========================================================
   CATÁLOGO
   ========================================================= */
function filterByGroup(group){
  currentGroup = group;
  searchTerm = '';
  const si = document.getElementById('searchInput');
  if(si) si.value = '';

  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  const links = [...document.querySelectorAll('.cat-link')];
  const match = links.find(l => (l.getAttribute('onclick')||'').includes(`'${group}'`));
  if(match) match.classList.add('active');

  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML =
    `Categoría <span>${groups[group] ? groups[group].label : ''}</span>`;

  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

function showAllProducts(){
  currentGroup = null;
  searchTerm = '';
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML = 'Todos los <span>Productos</span>';
  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

function getFilteredList(){
  let list = products;

  if(searchTerm){
    const t = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(t) ||
      (p.sub||'').toLowerCase().includes(t) ||
      (categoryLabels[p.category]||'').toLowerCase().includes(t) ||
      Object.values(p.specs).join(' ').toLowerCase().includes(t)
    );
  } else if(currentGroup && groups[currentGroup]){
    list = list.filter(p => groups[currentGroup].cats.includes(p.category));
  }

  if(onlyInStock) list = list.filter(p => p.stock > 0);
  return sortList(list, currentSort);
}

function filtersBarHtml(count){
  return `
    <div class="filters-bar">
      <label class="filter-toggle">
        <input type="checkbox" ${onlyInStock?'checked':''} onchange="onStockFilter(this)">
        Solo mostrar con stock
      </label>
      <span class="results-info"><strong>${count}</strong> producto(s)${searchTerm?` para "<strong>${searchTerm}</strong>"`:''}</span>
      <select class="sort-select" onchange="onSortChange(this)">
        <option value="default"    ${currentSort==='default'?'selected':''}>Ordenar por: Relevancia</option>
        <option value="price-asc"  ${currentSort==='price-asc'?'selected':''}>Precio: menor a mayor</option>
        <option value="price-desc" ${currentSort==='price-desc'?'selected':''}>Precio: mayor a menor</option>
        <option value="name-asc"   ${currentSort==='name-asc'?'selected':''}>Nombre: A – Z</option>
        <option value="stock"      ${currentSort==='stock'?'selected':''}>Mayor stock</option>
      </select>
    </div>`;
}

function emptyStateHtml(){
  return `
    <div class="empty-state">
      <i class="fas fa-box-open"></i>
      <p>No encontramos productos</p>
      <small>Prueba con otra búsqueda o revisa otra categoría</small>
    </div>`;
}

function renderCatalog(){
  const box = document.getElementById('productsContainer');
  const sub = (!searchTerm && currentGroup) ? subGroups[currentGroup] : null;

  // ---- Vista dividida por subcategorías (Procesadores, Placas, RAM, Refrigeración) ----
  if(sub){
    const sections = sub.map(s => {
      let items = products.filter(p => s.cats.includes(p.category));
      if(onlyInStock) items = items.filter(p => p.stock > 0);
      items = sortList(items, currentSort);
      return { label: s.label, items };
    }).filter(s => s.items.length > 0);

    const total = sections.reduce((a, s) => a + s.items.length, 0);
    let html = filtersBarHtml(total);

    if(sections.length === 0){
      html += emptyStateHtml();
    } else {
      html += sections.map(s => `
        <h3 class="subcat-title">${s.label}</h3>
        <div class="p-grid">${s.items.map(productCard).join('')}</div>
      `).join('');
    }
    box.innerHTML = html;
    return;
  }

  // ---- Vista plana (búsqueda, "todos los productos", almacenamiento, fuentes) ----
  const list = getFilteredList();
  let html = filtersBarHtml(list.length);

  if(list.length === 0){
    html += emptyStateHtml();
  } else {
    html += `<div class="p-grid">${list.map(productCard).join('')}</div>`;
  }
  box.innerHTML = html;
}

function onStockFilter(cb){ onlyInStock = cb.checked; renderCatalog(); }
function onSortChange(sel){ currentSort = sel.value; renderCatalog(); }

/* =========================================================
   BÚSQUEDA
   ========================================================= */
function onSearch(value){
  searchTerm = value.trim();
  if(!searchTerm){
    if(currentGroup) { renderCatalog(); }
    else { goHome(); }
    return;
  }
  currentGroup = null;
  document.getElementById('catalogTitle').innerHTML = 'Resultados de <span>Búsqueda</span>';
  showHomeSections(false);
  renderCatalog();
}

/* =========================================================
   MODAL DE PRODUCTO
   ========================================================= */
function openModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  currentProduct = p;

  const s = stockInfo(p.stock);
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalImage').onerror = function(){ this.onerror = null; this.src = PLACEHOLDER; };
  document.getElementById('modalImage').alt = p.name;
  document.getElementById('modalCat').textContent  = categoryLabels[p.category] || '';
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalStock').innerHTML  = `<span class="p-stock ${s.cls}"><span class="dot"></span>${s.text}</span>`;
  document.getElementById('modalPrice').textContent = money(p.price);
  document.getElementById('modalSpecs').innerHTML = Object.entries(p.specs)
    .map(([k,v]) => `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`).join('');

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function contactWhatsApp(){
  if(!currentProduct) return;
  const msg = `Hola AO NEXUS, me interesa el *${currentProduct.name}* (${money(currentProduct.price)}) que vi en su web. ¿Está disponible?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* =========================================================
   COTIZACIÓN (carrito)
   ========================================================= */
function addToCartFromModal(){
  if(currentProduct) addToCart(currentProduct.id);
}

function addToCart(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  if(p.stock === 0){ toast('Producto sin stock — consulta por WhatsApp'); return; }
  const qty = cart.get(id) || 0;
  if(qty >= p.stock){ toast(`Solo hay ${p.stock} unidad(es) disponibles`); return; }
  cart.set(id, qty + 1);
  updateCart();
  toast('Agregado a tu cotización');
}

function changeQty(id, delta){
  const p = products.find(x => x.id === id);
  const qty = (cart.get(id) || 0) + delta;
  if(qty <= 0){ cart.delete(id); }
  else if(p && qty > p.stock){ toast(`Solo hay ${p.stock} unidad(es)`); return; }
  else cart.set(id, qty);
  updateCart();
}

function removeFromCart(id){ cart.delete(id); updateCart(); }
function clearCart(){ cart.clear(); updateCart(); }

function updateCart(){
  const items = [...cart.entries()].map(([id,qty]) => ({ p: products.find(x=>x.id===id), qty })).filter(x=>x.p);
  const count = items.reduce((a,i)=> a + i.qty, 0);
  const total = items.reduce((a,i)=> a + i.p.price * i.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = money(total);

  const box = document.getElementById('cartItems');
  if(items.length === 0){
    box.innerHTML = `<div class="cart-empty"><i class="fas fa-cart-shopping"></i>Tu cotización está vacía.<br>Agrega productos para enviarlos por WhatsApp.</div>`;
  } else {
    box.innerHTML = items.map(({p,qty}) => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${money(p.price * qty)}</div>
          <div class="ci-qty">
            <button onclick="changeQty(${p.id},-1)"><i class="fas fa-minus"></i></button>
            <span>${qty}</span>
            <button onclick="changeQty(${p.id},1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <button class="ci-del" onclick="removeFromCart(${p.id})"><i class="fas fa-trash"></i></button>
      </div>`).join('');
  }

  const lines = items.map(({p,qty}) => `• ${qty} x ${p.name} — ${money(p.price*qty)}`).join('\n');
  const msg = items.length
    ? `Hola AO NEXUS, quisiera cotizar:\n\n${lines}\n\n*Total estimado: ${money(total)}*`
    : 'Hola AO NEXUS, quisiera cotizar unos componentes.';
  document.getElementById('cartWaBtn').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  updateCart();

  const si = document.getElementById('searchInput');
  if(si){
    let t;
    si.addEventListener('input', e => {
      clearTimeout(t);
      const v = e.target.value;
      t = setTimeout(()=> onSearch(v), 220);
    });
    si.addEventListener('keydown', e => { if(e.key === 'Enter') onSearch(e.target.value); });
  }

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){ closeModal(); closeCart(); }
  });

  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  }, { passive:true });

  document.querySelector('.cat-link').classList.add('active');
});
