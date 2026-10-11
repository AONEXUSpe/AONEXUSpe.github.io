/* =========================================================
   AO NEXUS — Tests del catálogo
   Se corren con:  node --test   (desde la carpeta del proyecto)
   No necesitan instalar nada: cargan categorias.js y app.js
   con un navegador simulado y un catálogo de ejemplo.
   ========================================================= */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const leer = archivo => readFileSync(new URL('../' + archivo, import.meta.url), 'utf8');

/* Catálogo de ejemplo (stock 0 = agotado, no debe verse en la web) */
let id = 0;
const prod = (category, name, price, stock = 1) => ({ id: ++id, name, brand: 'X', category, price, stock, sub: '', specs: {} });
const CATALOGO = [
  prod('amd', 'RYZEN 7 9800X3D', 1800),
  prod('amd', 'RYZEN 7 7700X', 900),
  prod('amd', 'RYZEN 5 5500', 340),
  prod('amd', 'RYZEN 9 9950X3D', 2600, 0),
  prod('intel', 'ULTRA 9 285K', 2100),
  prod('intel', 'ULTRA 7 265K', 1500),
  prod('placa-am5', 'B850 TUF', 800),
  prod('placa-am5', 'B650 ROG', 950),
  prod('placa-am4', 'B550 TUF', 450),
  prod('placa-lga1851', 'Z890 PRO', 1100),
  prod('placa-lga1700', 'B760 PRIME', 500, 0),
  prod('ddr5', 'FURY 32GB DDR5', 420),
  prod('ddr5', 'VULCAN 16GB DDR5', 230),
  prod('ddr4', 'FURY 16GB DDR4', 180),
  prod('gpu', 'RTX 5070', 2800),
  prod('gpu', 'RTX 5060', 1400),
  prod('refrigeracion-liquida', 'MAG A13 240MM', 320),
  prod('refrigeracion-aire', 'AK400', 120, 0),
  prod('monitor', 'CATEGORIA DESCONOCIDA', 999)
];

function elementoFalso(){
  return {
    innerHTML: '', value: '', hidden: false, style: {}, dataset: {},
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
    addEventListener(){}, before(){}, remove(){}, focus(){}, scrollIntoView(){}
  };
}

/* Carga la tienda como lo haría el navegador y devuelve helpers para inspeccionarla */
async function abrirTienda(catalogo = CATALOGO){
  const elementos = new Map();
  const document = {
    hidden: false,
    getElementById: id => { if(!elementos.has(id)) elementos.set(id, elementoFalso()); return elementos.get(id); },
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener(){},
    createElement: () => elementoFalso(),
    body: { appendChild(){}, style: {} }
  };
  const window = { scrollTo(){}, addEventListener(){}, scrollY: 0 };
  const fetch = async () => ({ ok: true, json: async () => ({ productos: structuredClone(catalogo) }) });
  const ctx = vm.createContext({ document, window, fetch, AbortSignal, console, setTimeout, clearTimeout, requestAnimationFrame: f => f() });
  vm.runInContext(leer('categorias.js'), ctx, { filename: 'categorias.js' });
  vm.runInContext(leer('app.js'), ctx, { filename: 'app.js' });
  const run = codigo => vm.runInContext(codigo, ctx);
  await run('loadCatalog()');
  const html = () => document.getElementById('productsContainer').innerHTML;
  return {
    run,
    html,
    nombres: () => [...html().matchAll(/<h4 class="p-name"[^>]*>([^<]*)<\/h4>/g)].map(m => m[1]),
    secciones: () => [...html().matchAll(/<h3 class="subcat-title">([^<]*)</g)].map(m => m[1].trim()),
    contador: () => Number((html().match(/<strong>(\d+)<\/strong> producto\(s\)/) || [])[1])
  };
}

const nombresDe = (...cats) => CATALOGO.filter(p => cats.includes(p.category) && p.stock > 0).map(p => p.name).sort();

/* ---------- Configuración de categorías ---------- */

test('las claves de categoría no cambian (las usa AO Nexus Central)', async () => {
  const t = await abrirTienda();
  assert.deepEqual([...t.run('Object.keys(CATEGORIAS)')], [
    'amd', 'intel', 'placa-am5', 'placa-am4', 'placa-lga1851', 'placa-lga1700', 'gpu',
    'ddr5', 'ddr4', 'almacenamiento', 'fuente', 'refrigeracion-liquida', 'refrigeracion-aire', 'gabinete'
  ]);
});

test('cada categoría tiene lo que necesita el panel de stock', async () => {
  const t = await abrirTienda();
  const cats = t.run('CATEGORIAS'), grupos = t.run('GRUPOS');
  for(const [k, c] of Object.entries(cats)){
    assert.ok(grupos[c.grupo], `${k}: grupo "${c.grupo}" no existe en GRUPOS`);
    assert.ok(c.label, `${k}: falta label`);
    assert.ok(c.carpeta, `${k}: falta carpeta`);
    assert.ok(Array.isArray(c.datos), `${k}: faltan datos`);
  }
});

/* ---------- Catálogo ---------- */

test('solo se cargan productos con stock y de categorías conocidas', async () => {
  const t = await abrirTienda();
  const cargados = [...t.run('products.map(p => p.name)')].sort();
  assert.deepEqual(cargados, CATALOGO.filter(p => p.stock > 0 && p.category !== 'monitor').map(p => p.name).sort());
});

test('una categoría solo muestra productos de su grupo', async () => {
  const t = await abrirTienda();
  for(const g of ['procesador', 'placas', 'ram', 'gpu', 'refrigeracion']){
    t.run(`filterByGroup('${g}')`);
    const delGrupo = t.run(`products.filter(p => groups['${g}'].cats.includes(p.category)).map(p => p.name)`);
    for(const n of t.nombres()) assert.ok(delGrupo.includes(n), `${n} no pertenece a ${g}`);
    assert.ok(t.nombres().length > 0, `${g} no muestra productos`);
  }
});

test('una categoría sin subcategorías muestra una sola grilla', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('gpu')`);
  assert.deepEqual(t.nombres().sort(), nombresDe('gpu'));
  assert.deepEqual(t.secciones(), []);
  assert.doesNotMatch(t.html(), /subcat-tab/);
});

test('ordenar por precio funciona dentro de una categoría', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('gpu')`);
  t.run(`onSortChange({ value: 'price-asc' })`);
  assert.deepEqual(t.nombres(), ['RTX 5060', 'RTX 5070']);
});

test('"Ver todo" muestra todos los productos con stock, una sección por grupo', async () => {
  const t = await abrirTienda();
  t.run('showAllProducts()');
  assert.equal(t.nombres().length, t.run('products.length'));
  assert.deepEqual(t.secciones(), ['Procesadores', 'Placas Madre', 'Tarjetas de Video', 'Memorias RAM', 'Refrigeración']);
});

test('la búsqueda muestra una lista plana con todo lo que coincide', async () => {
  const t = await abrirTienda();
  t.run(`onSearch('ryzen')`);
  assert.deepEqual(t.nombres().sort(), ['RYZEN 5 5500', 'RYZEN 7 7700X', 'RYZEN 7 9800X3D']);
  assert.deepEqual(t.secciones(), []);
});

/* ---------- Pestañas dentro de una categoría ---------- */

const pestanas = t => [...t.html().matchAll(/<button class="subcat-tab ([^"]*)"[^>]*>([^<]*)<small>(\d+)<\/small>/g)]
  .map(m => ({ label: m[2], n: Number(m[3]), activa: m[1].includes('active') }));

test('todo grupo con varias categorías tiene pestañas definidas', async () => {
  const t = await abrirTienda();
  const cats = t.run('CATEGORIAS');
  for(const [g, info] of Object.entries(t.run('groups'))){
    if(info.cats.length < 2) continue;
    for(const c of info.cats) assert.ok(cats[c].pestana, `${c} (grupo ${g}) no tiene "pestana"`);
  }
});

test('Procesadores abre en AMD y no muestra los Intel', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('procesador')`);
  assert.deepEqual(pestanas(t), [
    { label: 'AMD Ryzen', n: 3, activa: true },
    { label: 'Intel Core', n: 2, activa: false }
  ]);
  assert.deepEqual(t.nombres().sort(), nombresDe('amd'));
  assert.equal(t.contador(), 3);
  assert.deepEqual(t.secciones(), [], 'una pestaña con una sola categoría no lleva subtítulo');
});

test('al elegir la pestaña Intel solo se ven los Intel', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('procesador')`);
  t.run('selectTab(1)');
  assert.deepEqual(t.nombres().sort(), nombresDe('intel'));
  assert.equal(t.contador(), 2);
  assert.deepEqual(pestanas(t).map(p => p.activa), [false, true]);
});

test('Placas: AMD separa por socket; Intel oculta el socket sin stock', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('placas')`);
  assert.deepEqual(pestanas(t).map(p => [p.label, p.n]), [['AMD', 3], ['Intel', 1]]);
  assert.deepEqual(t.secciones(), ['Socket AM5', 'Socket AM4']);
  assert.deepEqual(t.nombres().sort(), nombresDe('placa-am5', 'placa-am4'));
  t.run('selectTab(1)');
  assert.deepEqual(t.secciones(), ['Socket LGA1851']);
  assert.deepEqual(t.nombres(), ['Z890 PRO']);
});

test('RAM separa DDR5 y DDR4', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('ram')`);
  assert.deepEqual(pestanas(t).map(p => p.label), ['DDR5', 'DDR4']);
  assert.deepEqual(t.nombres().sort(), nombresDe('ddr5'));
  t.run('selectTab(1)');
  assert.deepEqual(t.nombres(), ['FURY 16GB DDR4']);
});

test('si solo una pestaña tiene stock no se muestra la barra de pestañas', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('refrigeracion')`);
  assert.deepEqual(pestanas(t), []);
  assert.deepEqual(t.nombres(), ['MAG A13 240MM']);
});

test('ordenar y la recarga automática mantienen la pestaña elegida', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('procesador')`);
  t.run('selectTab(1)');
  t.run(`onSortChange({ value: 'price-asc' })`);
  assert.deepEqual(t.nombres(), ['ULTRA 7 265K', 'ULTRA 9 285K']);
  await t.run('refreshCatalogue()');
  assert.deepEqual(t.nombres(), ['ULTRA 7 265K', 'ULTRA 9 285K']);
});

test('si la pestaña elegida se queda sin stock se abre la primera con productos', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('procesador')`);
  t.run('selectTab(1)');
  t.run(`products = products.filter(p => p.category !== 'intel'); renderCatalog()`);
  assert.deepEqual(t.nombres().sort(), nombresDe('amd'));
  assert.deepEqual(pestanas(t), []);
});

test('volver a entrar a la categoría la abre en la primera pestaña', async () => {
  const t = await abrirTienda();
  t.run(`filterByGroup('procesador')`);
  t.run('selectTab(1)');
  t.run(`filterByGroup('procesador')`);
  assert.deepEqual(t.nombres().sort(), nombresDe('amd'));
});
