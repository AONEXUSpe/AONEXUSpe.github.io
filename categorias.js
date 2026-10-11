/* =========================================================
   AO NEXUS — Categorías de la tienda
   Las usan la web (app.js) y el panel de stock (admin.js).

   GRUPOS     -> botones del menú, en este orden de izquierda a derecha.
                 Un grupo solo aparece en la web si tiene productos en stock.
   CATEGORIAS -> en qué grupo va cada producto, en qué carpeta de /img
                 va su foto y qué datos técnicos se piden al agregarlo.
                 pestana: si un grupo tiene varias categorías, la web muestra
                          una pestaña por cada "pestana" (AMD / Intel, DDR5 / DDR4…)
                          y solo los productos de la pestaña elegida.
                 seccion: si varias categorías comparten pestaña, se muestran
                          en secciones con este título (Socket AM5, Socket AM4…).
                 Pestañas y secciones salen en este mismo orden.
   ========================================================= */

const GRUPOS = {
  procesador:     { label:'Procesadores',      menu:'Procesadores',      icon:'fa-microchip' },
  placas:         { label:'Placas Madre',      menu:'Placas',            icon:'fa-server' },
  gpu:            { label:'Tarjetas de Video', menu:'Tarjetas de Video', icon:'fa-display' },
  ram:            { label:'Memorias RAM',      menu:'RAM',               icon:'fa-memory' },
  almacenamiento: { label:'Almacenamiento',    menu:'SSD',               icon:'fa-hard-drive' },
  fuente:         { label:'Fuentes de Poder',  menu:'Fuentes',           icon:'fa-plug' },
  refrigeracion:  { label:'Refrigeración',     menu:'Refrigeración',     icon:'fa-fan' },
  gabinete:       { label:'Gabinetes',         menu:'Gabinetes',         icon:'fa-computer' }
};

const DATOS_CPU   = ['Núcleos / Hilos','Frecuencia base','Frecuencia turbo','Socket','TDP'];
const DATOS_PLACA = ['Modelo','Socket','Chipset','Factor forma','Memoria','WiFi'];

const CATEGORIAS = {
  'amd':                   { grupo:'procesador',     label:'Procesador AMD',        pestana:'AMD Ryzen',                         carpeta:'PROCESADOR',    datos:DATOS_CPU },
  'intel':                 { grupo:'procesador',     label:'Procesador Intel',      pestana:'Intel Core',                        carpeta:'PROCESADOR',    datos:DATOS_CPU },
  'placa-am5':             { grupo:'placas',         label:'Placa Madre · AM5',     pestana:'AMD',   seccion:'Socket AM5',       carpeta:'PLACA',         datos:DATOS_PLACA },
  'placa-am4':             { grupo:'placas',         label:'Placa Madre · AM4',     pestana:'AMD',   seccion:'Socket AM4',       carpeta:'PLACA',         datos:DATOS_PLACA },
  'placa-lga1851':         { grupo:'placas',         label:'Placa Madre · LGA1851', pestana:'Intel', seccion:'Socket LGA1851',   carpeta:'PLACA',         datos:DATOS_PLACA },
  'placa-lga1700':         { grupo:'placas',         label:'Placa Madre · LGA1700', pestana:'Intel', seccion:'Socket LGA1700',   carpeta:'PLACA',         datos:DATOS_PLACA },
  'gpu':                   { grupo:'gpu',            label:'Tarjeta de Video',                                                   carpeta:'GRAFICAS',      datos:['GPU','Memoria','Bus de memoria','Interfaz','Tecnologías','Fuente recomendada'] },
  'ddr5':                  { grupo:'ram',            label:'Memoria RAM DDR5',      pestana:'DDR5',                              carpeta:'RAM',           datos:['Capacidad','Tipo','Velocidad','Latencia','Iluminación','Color'] },
  'ddr4':                  { grupo:'ram',            label:'Memoria RAM DDR4',      pestana:'DDR4',                              carpeta:'RAM',           datos:['Capacidad','Tipo','Velocidad','Latencia','Iluminación','Color'] },
  'almacenamiento':        { grupo:'almacenamiento', label:'Almacenamiento SSD',                                                 carpeta:'SSD',           datos:['Capacidad','Interfaz','Factor forma','Lectura','Escritura'] },
  'fuente':                { grupo:'fuente',         label:'Fuente de Poder',                                                    carpeta:'FUENTES',       datos:['Potencia','Certificación','Modular','Factor forma'] },
  'refrigeracion-liquida': { grupo:'refrigeracion',  label:'Refrigeración Líquida', pestana:'Líquida',                           carpeta:'REFRIGERACION', datos:['Tipo','Radiador','Ventiladores','Compatibilidad','Color'] },
  'refrigeracion-aire':    { grupo:'refrigeracion',  label:'Refrigeración de Aire', pestana:'Aire',                              carpeta:'REFRIGERACION', datos:['Tipo','TDP','Ventiladores','Compatibilidad','Color'] },
  'gabinete':              { grupo:'gabinete',       label:'Gabinete',                                                           carpeta:'GABINETE',      datos:['Formato','Placas compatibles','Ventiladores incluidos','Panel lateral','Color'] }
};

/* Un producto se muestra en la web solo si tiene unidades en stock */
const enStock = p => (p.stock ?? 1) > 0;
