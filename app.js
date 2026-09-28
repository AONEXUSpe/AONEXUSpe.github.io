 /* =========================================================
   AO NEXUS — Lógica del sitio
   ========================================================= */

const WA_NUMBER = '51936177329';

/* ---------- Etiquetas de categoría ---------- */
const categoryLabels = {
  "amd":"Procesador AMD",
  "intel":"Procesador Intel",
  "gpu":"Tarjeta de Video",
  "placa-am4":"Placa Madre · AM4",
  "placa-am5":"Placa Madre · AM5",
  "placa-lga1851":"Placa Madre · LGA1851",
  "ddr4":"Memoria RAM DDR4",
  "ddr5":"Memoria RAM DDR5",
  "almacenamiento":"Almacenamiento SSD",
  "refrigeracion-liquida":"Refrigeración Líquida",
  "refrigeracion-aire":"Refrigeración de Aire"
};

/* ---------- Icono por categoría (se usa cuando falta la foto) ---------- */
const categoryIcons = {
  "amd":"fa-microchip", "intel":"fa-microchip", "gpu":"fa-display",
  "placa-am4":"fa-server", "placa-am5":"fa-server", "placa-lga1851":"fa-server",
  "ddr4":"fa-memory", "ddr5":"fa-memory", "almacenamiento":"fa-hard-drive",
  "refrigeracion-liquida":"fa-fan", "refrigeracion-aire":"fa-fan"
};

/* ---------- Grupos de la barra superior (en este orden se muestra el catálogo) ---------- */
const groups = {
  procesador:     { label:'Procesadores',      cats:['amd','intel'] },
  placas:         { label:'Placas Madre',      cats:['placa-am5','placa-am4','placa-lga1851'] },
  gpu:            { label:'Tarjetas de Video', cats:['gpu'] },
  ram:            { label:'Memorias RAM',      cats:['ddr5','ddr4'] },
  almacenamiento: { label:'Almacenamiento',    cats:['almacenamiento'] },
  refrigeracion:  { label:'Refrigeración',     cats:['refrigeracion-liquida','refrigeracion-aire'] }
};

/* ---------- Subgrupos: cada categoría de la barra que debe verse
   dividida en secciones separadas dentro del catálogo ---------- */
const subGroups = {
  procesador:    [ { label:'AMD Ryzen',               cats:['amd'] },
                   { label:'Intel Core',              cats:['intel'] } ],
  placas:        [ { label:'AMD · Socket AM5',        cats:['placa-am5'] },
                   { label:'AMD · Socket AM4',        cats:['placa-am4'] },
                   { label:'Intel · Socket LGA1851',  cats:['placa-lga1851'] } ],
  ram:           [ { label:'DDR5',                    cats:['ddr5'] },
                   { label:'DDR4',                    cats:['ddr4'] } ],
  refrigeracion: [ { label:'Refrigeración Líquida',   cats:['refrigeracion-liquida'] },
                   { label:'Torre de Aire',            cats:['refrigeracion-aire'] } ]
};

/* ---------- Catálogo ----------
   isNew:true    -> aparece en "Nuevos ingresos" con la etiqueta NUEVO
   featured:true -> aparece en "Destacados"
   best:true     -> aparece en "Más vendidos"
   Si falta la foto de un producto, la web muestra una tarjeta con su marca
   hasta que subas la imagen a /img/<CATEGORÍA>/ con el nombre indicado en "image". */
const products = [
  // ---- PROCESADORES AMD ----
  { id:1, name:"RYZEN 7 9800X3D", brand:"AMD", category:"amd", price:1750, stock:1, featured:true,
    sub:"8 núcleos / 16 hilos · 3D V-Cache · AM5", image:"img/PROCESADOR/RYZEN_7_9800X3d.webp",
    specs:{ "Núcleos / Hilos":"8C / 16T","Frecuencia base":"4.7 GHz","Frecuencia turbo":"Hasta 5.2 GHz","Socket":"AM5","TDP":"120W","3D V-Cache":"Sí" } },

  { id:2, name:"RYZEN 9 9950X3D", brand:"AMD", category:"amd", price:2600, stock:1, featured:true,
    sub:"16 núcleos / 32 hilos · 3D V-Cache · AM5", image:"img/PROCESADOR/RYZEN_9_9500X3D.webp",
    specs:{ "Núcleos / Hilos":"16C / 32T","Frecuencia base":"4.3 GHz","Frecuencia turbo":"Hasta 5.7 GHz","Socket":"AM5","TDP":"170W","3D V-Cache":"Sí" } },

  { id:3, name:"RYZEN 7 7800X3D", brand:"AMD", category:"amd", price:1450, stock:1, best:true,
    sub:"8 núcleos / 16 hilos · 3D V-Cache · AM5", image:"img/PROCESADOR/RYZEN_7_7800X3D.webp",
    specs:{ "Núcleos / Hilos":"8C / 16T","Frecuencia base":"4.2 GHz","Frecuencia turbo":"Hasta 5.0 GHz","Socket":"AM5","TDP":"120W","3D V-Cache":"Sí" } },

  { id:4, name:"RYZEN 9 9900X", brand:"AMD", category:"amd", price:1400, stock:1,
    sub:"12 núcleos / 24 hilos · AM5", image:"img/PROCESADOR/RYZEN_9_9900X.webp",
    specs:{ "Núcleos / Hilos":"12C / 24T","Frecuencia base":"4.4 GHz","Frecuencia turbo":"Hasta 5.6 GHz","Socket":"AM5","TDP":"120W" } },

  { id:5, name:"RYZEN 7 7700X", brand:"AMD", category:"amd", price:900, stock:1, isNew:true,
    sub:"8 núcleos / 16 hilos · AM5", image:"img/PROCESADOR/RYZEN_7_7700X.webp",
    specs:{ "Núcleos / Hilos":"8C / 16T","Frecuencia base":"4.5 GHz","Frecuencia turbo":"Hasta 5.4 GHz","Socket":"AM5","TDP":"105W" } },

  { id:6, name:"RYZEN 5 9600X", brand:"AMD", category:"amd", price:700, stock:5, best:true,
    sub:"6 núcleos / 12 hilos · AM5", image:"img/PROCESADOR/RYZEN_5_9600X.webp",
    specs:{ "Núcleos / Hilos":"6C / 12T","Frecuencia base":"3.9 GHz","Frecuencia turbo":"Hasta 5.4 GHz","Socket":"AM5","TDP":"65W" } },

  { id:7, name:"RYZEN 5 5500", brand:"AMD", category:"amd", price:340, stock:1, isNew:true,
    sub:"6 núcleos / 12 hilos · AM4", image:"img/PROCESADOR/Ryzen_5_5500.webp",
    specs:{ "Núcleos / Hilos":"6C / 12T","Frecuencia base":"3.6 GHz","Frecuencia turbo":"Hasta 4.2 GHz","Socket":"AM4","TDP":"65W","Cooler":"Incluido (Wraith Stealth)" } },

  // ---- PROCESADORES INTEL ----
  { id:8, name:"INTEL CORE I7 14700K", brand:"Intel", category:"intel", price:1400, stock:1, isNew:true,
    sub:"20 núcleos / 28 hilos · LGA1700", image:"img/PROCESADOR/INTEL_CORE_I7_14700K.webp",
    specs:{ "Núcleos / Hilos":"20C (8P + 12E) / 28T","Frecuencia turbo":"Hasta 5.6 GHz","Socket":"LGA1700","TDP":"125W","Gráficos integrados":"Intel UHD 770" } },

  { id:9, name:"INTEL CORE ULTRA 7 270K PLUS", brand:"Intel", category:"intel", price:1300, stock:1,
    sub:"24 núcleos / 24 hilos · LGA1851", image:"img/PROCESADOR/ULTRA_7_270K_PLUS.webp",
    specs:{ "Núcleos / Hilos":"24C (8P + 16E) / 24T","Socket":"LGA1851","TDP":"125W","Multiplicador":"Desbloqueado (K)" } },

  { id:10, name:"INTEL CORE ULTRA 5 225F", brand:"Intel", category:"intel", price:500, stock:2,
    sub:"10 núcleos / 10 hilos · LGA1851", image:"img/PROCESADOR/ULTRA_5_225F.webp",
    specs:{ "Núcleos / Hilos":"10C (6P + 4E) / 10T","Frecuencia turbo":"Hasta 4.9 GHz","Socket":"LGA1851","TDP":"65W","Gráficos":"Requiere tarjeta de video" } },

  // ---- TARJETAS DE VIDEO ----
  { id:11, name:"RTX 5060 ASUS DUAL 8GB", brand:"ASUS", category:"gpu", price:1500, stock:1, isNew:true,
    sub:"8GB GDDR7 · DLSS 4 · Ray Tracing", image:"img/GRAFICAS/RTX_5060_8GB.webp",
    specs:{ "GPU":"NVIDIA GeForce RTX 5060","Memoria":"8GB GDDR7","Bus de memoria":"128-bit","Interfaz":"PCIe 5.0","Tecnologías":"DLSS 4 · Ray Tracing","Ventiladores":"2 (Dual)","Fuente recomendada":"550W" } },

  // ---- PLACAS MADRE ----
  { id:12, name:"B850-F ASUS ROG STRIX GAMING WIFI7 NEO", brand:"ASUS", category:"placa-am5", price:800, stock:1, isNew:true,
    sub:"Socket AM5 · ATX · DDR5 · WiFi 7", image:"img/PLACA/B850-F_ASUS_ROG_STRIX_GAMING_WIFI7_NEO.webp",
    specs:{ "Modelo":"ASUS ROG STRIX B850-F GAMING WIFI NEO","Socket":"AM5","Chipset":"B850","Factor forma":"ATX","Memoria":"DDR5","WiFi":"WiFi 7" } },

  { id:13, name:"B850 GIGABYTE EAGLE ICE WIFI7", brand:"Gigabyte", category:"placa-am5", price:750, stock:1, isNew:true,
    sub:"Socket AM5 · ATX · DDR5 · WiFi 7 · Blanca", image:"img/PLACA/B850_GIGABYTE_EAGLE_ICE_WIFI7.webp",
    specs:{ "Modelo":"GIGABYTE B850 EAGLE WIFI7 ICE","Socket":"AM5","Chipset":"B850","Factor forma":"ATX","Memoria":"DDR5","WiFi":"WiFi 7","Color":"Blanco" } },

  { id:14, name:"B850M-E ASUS TUF GAMING WIFI", brand:"ASUS", category:"placa-am5", price:700, stock:0, best:true,
    sub:"Socket AM5 · Micro-ATX · DDR5 · WiFi 7", image:"img/PLACA/B850M-E_ASUS_TUF_WIFI.webp",
    specs:{ "Modelo":"ASUS TUF GAMING B850M-E WIFI","Socket":"AM5","Chipset":"B850","Factor forma":"Micro-ATX","Memoria":"DDR5","WiFi":"WiFi 7" } },

  { id:15, name:"B850M GIGABYTE EAGLE WIFI6E", brand:"Gigabyte", category:"placa-am5", price:650, stock:1, isNew:true,
    sub:"Socket AM5 · Micro-ATX · DDR5 · WiFi 6E", image:"img/PLACA/GIGABYTE_B850M_EAGLE_WIFI6E.webp",
    specs:{ "Modelo":"GIGABYTE B850M EAGLE WIFI6E","Socket":"AM5","Chipset":"B850","Factor forma":"Micro-ATX","Memoria":"DDR5","WiFi":"WiFi 6E" } },

  { id:16, name:"B850-S MSI PRO WIFI6E", brand:"MSI", category:"placa-am5", price:580, stock:1, featured:true,
    sub:"Socket AM5 · ATX · DDR5 · WiFi 6E", image:"img/PLACA/B850-S_MSI_PRO_WIFI6E.webp",
    specs:{ "Modelo":"MSI PRO B850-S WIFI6E","Socket":"AM5","Chipset":"B850","Factor forma":"ATX","Memoria":"DDR5","WiFi":"WiFi 6E" } },

  { id:17, name:"B650 GIGABYTE GAMING X AX", brand:"Gigabyte", category:"placa-am5", price:600, stock:1,
    sub:"Socket AM5 · ATX · DDR5 · WiFi 6E", image:"img/PLACA/GIGABYTE_B650_GAMING_X_AX.webp",
    specs:{ "Modelo":"GIGABYTE B650 GAMING X AX","Socket":"AM5","Chipset":"B650","Factor forma":"ATX","Memoria":"DDR5","WiFi":"WiFi 6E" } },

  { id:18, name:"B550-PLUS ASUS TUF GAMING WIFI II", brand:"ASUS", category:"placa-am4", price:500, stock:2,
    sub:"Socket AM4 · ATX · DDR4 · WiFi 6", image:"img/PLACA/B550_PLUS_WIFI_ll.webp",
    specs:{ "Modelo":"ASUS TUF GAMING B550-PLUS WIFI II","Socket":"AM4","Chipset":"B550","Factor forma":"ATX","Memoria":"DDR4","WiFi":"WiFi 6" } },

  // ---- MEMORIAS RAM ----
  { id:19, name:"CORSAIR VENGEANCE RGB 2X16GB DDR5 6400MHZ CL36 BLACK", brand:"Corsair", category:"ddr5", price:1900, stock:1, isNew:true,
    sub:"32GB (2x16GB) DDR5 6400MHz CL36 · RGB", image:"img/RAM/CORSAIR_VENGEANCE_RGB_DDR5_6400.webp",
    specs:{ "Capacidad":"32GB (2x16GB)","Tipo":"DDR5","Velocidad":"6400 MHz","Latencia":"CL36","Iluminación":"RGB","Color":"Negro" } },

  { id:20, name:"TEAMGROUP T-FORCE VULCAN 2X8GB DDR5 5200MHZ", brand:"TeamGroup", category:"ddr5", price:750, stock:1, best:true,
    sub:"16GB (2x8GB) DDR5 5200MHz", image:"img/RAM/TEAMGROUP_TFORCE_VULCAN_DDR5.webp",
    specs:{ "Capacidad":"16GB (2x8GB)","Tipo":"DDR5","Velocidad":"5200 MHz","Voltaje":"1.25V","Color":"Negro" } },

  { id:21, name:"NETAC WHITE 2X16GB DDR4 3200MHZ", brand:"Netac", category:"ddr4", price:700, stock:1,
    sub:"32GB (2x16GB) DDR4 3200MHz · Blanca", image:"img/RAM/NETAC_2X16GB_3200MHZ.webp",
    specs:{ "Capacidad":"32GB (2x16GB)","Tipo":"DDR4","Velocidad":"3200 MHz","Latencia":"CL16","Voltaje":"1.35V","Color":"Blanco" } },

  // ---- ALMACENAMIENTO ----
  { id:22, name:"SSD M.2 4TB TEAMGROUP T-FORCE G50", brand:"TeamGroup", category:"almacenamiento", price:2100, stock:1, featured:true,
    sub:"NVMe PCIe 4.0 · 4TB · 5,000 MB/s", image:"img/SSD/SSD_T-FORCE_G50_4TB.webp",
    specs:{ "Capacidad":"4TB","Interfaz":"NVMe PCIe Gen 4.0","Factor forma":"M.2 2280","Lectura":"5,000 MB/s","Escritura":"4,500 MB/s" } },

  { id:23, name:"SSD M.2 1TB ADATA LEGEND 860", brand:"ADATA", category:"almacenamiento", price:580, stock:1, isNew:true,
    sub:"NVMe PCIe 4.0 x4 · 1TB · M.2 2280", image:"img/SSD/SSD_ADATA_LEGEND_860_1TB.webp",
    specs:{ "Capacidad":"1TB (1000GB)","Interfaz":"NVMe PCIe Gen 4.0 x4","Factor forma":"M.2 2280","Lectura":"Hasta 6,000 MB/s" } },

  { id:24, name:"SSD M.2 512GB HIKSEMI WAVE", brand:"Hiksemi", category:"almacenamiento", price:330, stock:1, isNew:true,
    sub:"NVMe PCIe 3.0 · 512GB · M.2 2280", image:"img/SSD/SSD_HIKSEMI_WAVE_512GB.webp",
    specs:{ "Capacidad":"512GB","Interfaz":"NVMe PCIe Gen 3.0","Factor forma":"M.2 2280" } },

  // ---- REFRIGERACIÓN ----
  { id:25, name:"THERMALRIGHT ELITE VISION 360 ARGB WHITE", brand:"Thermalright", category:"refrigeracion-liquida", price:370, stock:1, featured:true,
    sub:"Líquida AIO 360mm · ARGB · Blanco", image:"img/REFRIGERACION/THERMALRIGHT_ELITE_VISION_360_ARGB_WHITE.webp",
    specs:{ "Tipo":"Refrigeración líquida AIO","Radiador":"360mm","Ventiladores":"3x 120mm ARGB","Compatibilidad":"Intel & AMD","Color":"Blanco" } },

  { id:26, name:"COOLERMASTER ELITE 240MM BLACK", brand:"Cooler Master", category:"refrigeracion-liquida", price:120, stock:3,
    sub:"Líquida AIO 240mm · Negro", image:"img/REFRIGERACION/COOLERMASTER_ELITE_240MM.webp",
    specs:{ "Tipo":"Refrigeración líquida AIO","Radiador":"240mm","Ventiladores":"2x 120mm","Compatibilidad":"Intel & AMD","Color":"Negro" } },

  { id:27, name:"THERMALRIGHT PEERLESS ASSASSIN 120 DIGITAL ARGB WHITE", brand:"Thermalright", category:"refrigeracion-aire", price:170, stock:2, best:true,
    sub:"Doble torre · Pantalla digital · ARGB · Blanco", image:"img/REFRIGERACION/THERMALRIGHT_RGB.webp",
    specs:{ "Tipo":"Disipador por aire doble torre","TDP":"245W","Ventiladores":"2x 120mm ARGB","Pantalla":"Digital (temperatura CPU)","Compatibilidad":"Intel LGA1700/1851 & AMD AM4/AM5","Color":"Blanco" } }
];

/* ---------- Categorías populares (imagen tomada de un producto real) ---------- */
const popularCategories = [
  { group:'procesador',     label:'Procesadores',      img:'img/PROCESADOR/RYZEN_7_9800X3d.webp' },
  { group:'placas',         label:'Placas Madre',      img:'img/PLACA/B850M-E_ASUS_TUF_WIFI.webp' },
  { group:'gpu',            label:'Tarjetas de Video', img:'img/GRAFICAS/RTX_5060_8GB.webp', icon:'fa-display' },
  { group:'ram',            label:'Memorias RAM',      img:'img/RAM/TEAMGROUP_TFORCE_VULCAN_DDR5.webp' },
  { group:'almacenamiento', label:'Almacenamiento',    img:'img/SSD/SSD_T-FORCE_G50_4TB.webp' },
  { group:'refrigeracion',  label:'Refrigeración',     img:'img/REFRIGERACION/THERMALRIGHT_ELITE_VISION_360_ARGB_WHITE.webp' }
];

/* ---------- Estado ---------- */
let currentProduct = null;
let currentGroup   = null;
let currentSort    = 'default';
let onlyInStock    = false;
let searchTerm     = '';
const cart         = new Map();   // id -> qty
const favorites    = new Set();

const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

/* =========================================================
   UTILIDADES
   ========================================================= */
const money = n => 'S/ ' + n.toLocaleString('es-PE');
const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId = id => products.find(x => x.id === id);
const groupOf = cat => Object.keys(groups).find(g => groups[g].cats.includes(cat));
const iconOf = cat => categoryIcons[cat] || 'fa-microchip';
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

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

/* Si una foto no existe (o no carga) se muestra la tarjeta de marca */
function imgFallback(img){
  img.onerror = null;
  if(img.parentElement) img.parentElement.classList.add('noimg');
}

/* Tarjeta de marca para productos que aún no tienen foto */
function placeholderHtml(p){
  return `<div class="ph">
      <i class="fas ${iconOf(p.category)}"></i>
      <span class="ph-brand">${esc(p.brand || 'AO NEXUS')}</span>
      <small>Nuevo y sellado</small>
    </div>`;
}

/* Reparte una lista para que no salgan varios productos seguidos de la misma categoría */
function diversify(list){
  const buckets = Object.keys(groups).map(g =>
    list.filter(p => groupOf(p.category) === g).sort((a,b)=> b.price - a.price));
  const out = [];
  while(buckets.some(b => b.length)) buckets.forEach(b => { if(b.length) out.push(b.shift()); });
  return out;
}

/* =========================================================
   TARJETAS
   ========================================================= */
function productCard(p){
  const s = stockInfo(p.stock);
  const cat = categoryLabels[p.category] || '';
  const hasSale = p.oldPrice && p.oldPrice > p.price;
  const off = hasSale ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const badge = hasSale ? `<span class="p-badge">-${off}%</span>`
              : p.isNew ? `<span class="p-badge new">NUEVO</span>` : '';

  return `
  <article class="p-card">
    <div class="p-media" onclick="openModal(${p.id})">
      ${badge}
      <button class="p-fav ${favorites.has(p.id)?'on':''}" onclick="event.stopPropagation();toggleFav(${p.id},this)" title="Guardar" aria-label="Guardar en favoritos">
        <i class="fa${favorites.has(p.id)?'s':'r'} fa-heart"></i>
      </button>
      ${placeholderHtml(p)}
      <img src="${p.image}" alt="${esc(p.name)}" loading="lazy" onerror="imgFallback(this)">
    </div>
    <div class="p-body">
      <span class="p-cat">${cat}</span>
      <h4 class="p-name" onclick="openModal(${p.id})">${esc(p.name)}</h4>
      <p class="p-spec">${esc(p.sub || '')}</p>
      <div class="p-meta">
        <div class="p-prices">
          <span class="p-price ${hasSale?'sale':''}">${money(p.price)}</span>
          ${hasSale ? `<span class="p-old">${money(p.oldPrice)}</span>` : ''}
        </div>
        <div class="p-stock ${s.cls}"><span class="dot"></span>${s.text}</div>
      </div>
      <div class="p-actions">
        <button class="p-btn" onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i> AGREGAR</button>
        <button class="p-wa" onclick="askWhatsApp(${p.id})" title="Consultar por WhatsApp" aria-label="Consultar por WhatsApp"><i class="fab fa-whatsapp"></i></button>
      </div>
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
  // Cada producto aparece una sola vez en el inicio
  const shown = new Set();
  const pick = (test, n) => {
    const list = diversify(products.filter(p => test(p) && !shown.has(p.id))).slice(0, n);
    list.forEach(p => shown.add(p.id));
    return list;
  };

  const fill = (gridId, sectionId, list) => {
    document.getElementById(gridId).innerHTML = list.map(productCard).join('');
    document.getElementById(sectionId).hidden = list.length === 0;
  };
  fill('newGrid',         'newSection',         pick(p => p.isNew,    10));
  fill('featuredGrid',    'featuredSection',    pick(p => p.featured,  5));
  fill('bestsellersGrid', 'bestsellersSection', pick(p => p.best,      5));

  document.getElementById('categoryGrid').innerHTML = popularCategories.map(c => {
    const n = products.filter(p => groups[c.group].cats.includes(p.category)).length;
    if(!n) return '';
    return `
    <div class="c-card" onclick="filterByGroup('${c.group}')">
      <div class="c-ph"><i class="fas ${c.icon || iconOf(groups[c.group].cats[0])}"></i></div>
      <img src="${c.img}" alt="${c.label}" loading="lazy" onerror="imgFallback(this)">
      <div class="c-label">
        <div><b>${c.label}</b><small>${plural(n, 'producto', 'productos')}</small></div>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>`;
  }).join('');

  const brands = {};
  products.forEach(p => { if(p.brand) brands[p.brand] = (brands[p.brand] || 0) + 1; });
  document.getElementById('brandRow').innerHTML = Object.entries(brands)
    .sort((a,b)=> b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([b,n]) => `<button class="brand-chip" onclick="searchBrand('${esc(b)}')">${esc(b)}<small>${n}</small></button>`)
    .join('');

}

const homeSections = ['heroSection','newSection','featuredSection','categoriesSection',
                      'bestsellersSection','brandsSection','orderSection','helpCtaSection'];

function showHomeSections(show){
  homeSections.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.style.display = show ? '' : 'none';
  });
  const bm = document.querySelector('.benefits-mobile');
  if(bm) bm.style.display = show ? '' : 'none';
  document.getElementById('productsSection').style.display = show ? 'none' : 'block';
}

function setActiveLink(match){
  document.querySelectorAll('.cat-link').forEach(l => l.classList.toggle('active', l === match));
}

function goHome(){
  currentGroup = null;
  searchTerm = '';
  currentSort = 'default';
  onlyInStock = false;
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  setActiveLink(document.querySelector('.cat-link'));
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

  const links = [...document.querySelectorAll('.cat-link')];
  setActiveLink(links.find(l => (l.getAttribute('onclick')||'').includes(`'${group}'`)));

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
  setActiveLink(null);
  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML = 'Todos los <span>Productos</span>';
  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

function searchBrand(brand){
  const si = document.getElementById('searchInput');
  if(si) si.value = brand;
  onSearch(brand);
  window.scrollTo({top:0, behavior:'smooth'});
}

function getFilteredList(){
  let list = products;

  if(searchTerm){
    const t = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(t) ||
      (p.brand||'').toLowerCase().includes(t) ||
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
      <span class="results-info"><strong>${count}</strong> producto(s)${searchTerm?` para "<strong>${esc(searchTerm)}</strong>"`:''}</span>
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
  const msg = `Hola AO NEXUS, estoy buscando ${searchTerm ? `"${searchTerm}"` : 'un componente'} ¿lo pueden conseguir?`;
  return `
    <div class="empty-state">
      <i class="fas fa-box-open"></i>
      <p>No lo tenemos en stock ahora mismo</p>
      <small>Pero lo podemos conseguir por pedido. Escríbenos y te cotizamos.</small>
      <a class="btn-wa" href="${WA_BASE}${encodeURIComponent(msg)}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Pedir por WhatsApp</a>
    </div>`;
}

function sectionsHtml(sections){
  return sections.map(s => `
    <h3 class="subcat-title">${s.label}<small>${plural(s.items.length, 'producto', 'productos')}</small></h3>
    <div class="p-grid">${s.items.map(productCard).join('')}</div>
  `).join('');
}

function renderCatalog(){
  const box = document.getElementById('productsContainer');

  // ---- Secciones: subcategorías de un grupo, o todos los grupos en "Todos los productos" ----
  let defs = null;
  if(!searchTerm && currentGroup && subGroups[currentGroup]) defs = subGroups[currentGroup];
  else if(!searchTerm && !currentGroup) defs = Object.values(groups);

  if(defs){
    const sections = defs.map(s => {
      let items = products.filter(p => s.cats.includes(p.category));
      if(onlyInStock) items = items.filter(p => p.stock > 0);
      return { label: s.label, items: sortList(items, currentSort) };
    }).filter(s => s.items.length > 0);

    const total = sections.reduce((a, s) => a + s.items.length, 0);
    box.innerHTML = filtersBarHtml(total) + (sections.length ? sectionsHtml(sections) : emptyStateHtml());
    return;
  }

  // ---- Vista plana (búsqueda y grupos sin subcategorías) ----
  const list = getFilteredList();
  box.innerHTML = filtersBarHtml(list.length) +
    (list.length ? `<div class="p-grid">${list.map(productCard).join('')}</div>` : emptyStateHtml());
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
  setActiveLink(null);
  document.getElementById('catalogTitle').innerHTML = 'Resultados de <span>Búsqueda</span>';
  showHomeSections(false);
  renderCatalog();
}

/* =========================================================
   MODAL DE PRODUCTO
   ========================================================= */
function openModal(id){
  const p = byId(id);
  if(!p) return;
  currentProduct = p;

  const s = stockInfo(p.stock);
  const media = document.querySelector('.modal-media');
  media.classList.remove('noimg');
  document.getElementById('modalPh').outerHTML = placeholderHtml(p).replace('class="ph"', 'class="ph" id="modalPh"');
  const img = document.getElementById('modalImage');
  img.onerror = function(){ imgFallback(this); };
  img.src = p.image;
  img.alt = p.name;
  document.getElementById('modalCat').textContent  = categoryLabels[p.category] || '';
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalStock').innerHTML  = `<span class="p-stock ${s.cls}"><span class="dot"></span>${s.text}</span>`
    + (p.isNew ? '<span class="p-badge new static">NUEVO INGRESO</span>' : '');
  document.getElementById('modalPrice').textContent = money(p.price);
  document.getElementById('modalSpecs').innerHTML = Object.entries(p.specs)
    .map(([k,v]) => `<div class="spec-row"><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join('');

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function productMessage(p){
  return `Hola AO NEXUS, me interesa el *${p.name}* (${money(p.price)}) que vi en su web. ¿Está disponible?`;
}

function askWhatsApp(id){
  const p = byId(id);
  if(p) window.open(WA_BASE + encodeURIComponent(productMessage(p)), '_blank');
}

function contactWhatsApp(){
  if(currentProduct) askWhatsApp(currentProduct.id);
}

/* =========================================================
   COTIZACIÓN (carrito)
   ========================================================= */
function addToCartFromModal(){
  if(currentProduct) addToCart(currentProduct.id);
}

function addToCart(id){
  const p = byId(id);
  if(!p) return;
  if(p.stock === 0){ toast('Producto sin stock — consulta por WhatsApp'); return; }
  const qty = cart.get(id) || 0;
  if(qty >= p.stock){ toast(`Solo hay ${plural(p.stock, 'unidad disponible', 'unidades disponibles')}`); return; }
  cart.set(id, qty + 1);
  updateCart();
  toast('Agregado a tu cotización');
  const btn = document.querySelector('.cart-btn');
  if(btn){ btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); }
}

function changeQty(id, delta){
  const p = byId(id);
  const qty = (cart.get(id) || 0) + delta;
  if(qty <= 0){ cart.delete(id); }
  else if(p && qty > p.stock){ toast(`Solo hay ${plural(p.stock, 'unidad', 'unidades')}`); return; }
  else cart.set(id, qty);
  updateCart();
}

function removeFromCart(id){ cart.delete(id); updateCart(); }
function clearCart(){ cart.clear(); updateCart(); }

function updateCart(){
  const items = [...cart.entries()].map(([id,qty]) => ({ p: byId(id), qty })).filter(x=>x.p);
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
        <div class="ci-media"><i class="fas ${iconOf(p.category)}"></i><img src="${p.image}" alt="${esc(p.name)}" onerror="imgFallback(this)"></div>
        <div class="ci-info">
          <div class="ci-name">${esc(p.name)}</div>
          <div class="ci-price">${money(p.price * qty)}</div>
          <div class="ci-qty">
            <button onclick="changeQty(${p.id},-1)" aria-label="Quitar uno"><i class="fas fa-minus"></i></button>
            <span>${qty}</span>
            <button onclick="changeQty(${p.id},1)" aria-label="Agregar uno"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <button class="ci-del" onclick="removeFromCart(${p.id})" aria-label="Eliminar"><i class="fas fa-trash"></i></button>
      </div>`).join('');
  }

  const lines = items.map(({p,qty}) => `• ${qty} x ${p.name} — ${money(p.price*qty)}`).join('\n');
  const msg = items.length
    ? `Hola AO NEXUS, quisiera cotizar:\n\n${lines}\n\n*Total estimado: ${money(total)}*`
    : 'Hola AO NEXUS, quisiera cotizar unos componentes.';
  document.getElementById('cartWaBtn').href = WA_BASE + encodeURIComponent(msg);
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

  setActiveLink(document.querySelector('.cat-link'));
});
