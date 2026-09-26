/* ==========================================================================
   Soluciones / líneas de negocio — alimentan menú, home y páginas de detalle.
   ========================================================================== */
import type { L10n } from '../i18n';
import type { PhotoKey } from './images';

export interface Solution {
  key: string;
  slug: L10n;
  icon: string;
  photo: PhotoKey;
  code: string; // etiqueta tipo "ficha técnica"
  title: L10n;
  short: L10n;
  intro: L10n;
  metric: { value: string; label: L10n };
  capabilities: { icon: string; title: L10n; text: L10n }[];
  specs: { label: L10n; value: L10n }[];
  faqs: { q: L10n; a: L10n }[];
}

export const solutions: Solution[] = [
  {
    key: 'utility',
    slug: { es: 'solar-gran-escala', en: 'utility-scale-solar' },
    icon: 'solar-panel',
    photo: 'aerialPlant',
    code: 'HL-01',
    title: { es: 'Solar a gran escala', en: 'Utility-scale solar' },
    short: {
      es: 'Desarrollo, ingeniería y construcción EPC de plantas fotovoltaicas de 5 a 300 MWp.',
      en: 'Development, engineering and EPC construction of PV plants from 5 to 300 MWp.',
    },
    intro: {
      es: 'Acompañamos cada planta desde la búsqueda de terreno hasta la conexión a red: permisos, acceso y conexión, ingeniería de detalle, compras y construcción. Un único interlocutor responsable del plazo, del coste y del rendimiento garantizado.',
      en: 'We take every plant from land search to grid connection: permitting, grid access, detailed engineering, procurement and construction. One accountable partner for schedule, cost and guaranteed performance.',
    },
    metric: { value: '1.8 GW', label: { es: 'desarrollados', en: 'developed' } },
    capabilities: [
      { icon: 'map-trifold', title: { es: 'Originación de suelo', en: 'Land origination' }, text: { es: 'Análisis GIS, contratos con propietarios y due diligence ambiental.', en: 'GIS screening, landowner agreements and environmental due diligence.' } },
      { icon: 'broadcast', title: { es: 'Acceso y conexión', en: 'Grid access' }, text: { es: 'Tramitación de nudos, estudios de red y avales ante el operador.', en: 'Node applications, grid studies and guarantees with the TSO/DSO.' } },
      { icon: 'circuitry', title: { es: 'Ingeniería de detalle', en: 'Detailed engineering' }, text: { es: 'Seguidores a un eje, módulos bifaciales y optimización del ratio DC/AC.', en: 'Single-axis trackers, bifacial modules and DC/AC ratio optimisation.' } },
      { icon: 'hard-hat', title: { es: 'Construcción EPC', en: 'EPC construction' }, text: { es: 'Llave en mano con precio cerrado y penalizaciones por rendimiento.', en: 'Turnkey, fixed price with performance-backed liquidated damages.' } },
      { icon: 'handshake', title: { es: 'PPA y financiación', en: 'PPAs & financing' }, text: { es: 'Estructuración de PPAs corporativos y project finance con banca.', en: 'Corporate PPA structuring and bank-backed project finance.' } },
      { icon: 'plant', title: { es: 'Agrivoltaica', en: 'Agrivoltaics' }, text: { es: 'Diseños compatibles con pastoreo, cultivos y corredores de biodiversidad.', en: 'Layouts compatible with grazing, crops and biodiversity corridors.' } },
    ],
    specs: [
      { label: { es: 'Rango de potencia', en: 'Capacity range' }, value: { es: '5 – 300 MWp', en: '5 – 300 MWp' } },
      { label: { es: 'Tecnología', en: 'Technology' }, value: { es: 'Bifacial + seguidor 1 eje', en: 'Bifacial + 1-axis tracker' } },
      { label: { es: 'Plazo típico de obra', en: 'Typical build time' }, value: { es: '9 – 14 meses', en: '9 – 14 months' } },
      { label: { es: 'Disponibilidad garantizada', en: 'Guaranteed availability' }, value: { es: '≥ 99,2 %', en: '≥ 99.2%' } },
    ],
    faqs: [
      { q: { es: '¿Cuánto terreno necesita una planta de 50 MWp?', en: 'How much land does a 50 MWp plant need?' }, a: { es: 'Con seguidores a un eje, en torno a 70–90 hectáreas, según la pendiente, las sombras y los retranqueos exigidos.', en: 'With single-axis trackers, roughly 70–90 hectares depending on slope, shading and required setbacks.' } },
      { q: { es: '¿Compráis proyectos en fase de desarrollo?', en: 'Do you acquire projects under development?' }, a: { es: 'Sí. Evaluamos proyectos con acceso a red concedido o en tramitación avanzada y podemos entrar como socio o comprador.', en: 'Yes. We assess projects with granted or advanced grid access and can join as a partner or buyer.' } },
      { q: { es: '¿Ofrecéis garantía de rendimiento?', en: 'Do you offer a performance guarantee?' }, a: { es: 'Todos nuestros contratos EPC incluyen un Performance Ratio garantizado y test de aceptación a 12 meses.', en: 'All our EPC contracts include a guaranteed Performance Ratio and a 12-month acceptance test.' } },
    ],
  },
  {
    key: 'selfconsumption',
    slug: { es: 'autoconsumo-industrial', en: 'industrial-self-consumption' },
    icon: 'factory',
    photo: 'rooftopIndustrial',
    code: 'HL-02',
    title: { es: 'Autoconsumo industrial', en: 'Industrial self-consumption' },
    short: {
      es: 'Energía solar en cubierta o suelo para industria y logística, con o sin inversión inicial.',
      en: 'Rooftop and ground-mounted solar for industry and logistics, with or without upfront capex.',
    },
    intro: {
      es: 'Reducimos la factura eléctrica de naves, plantas de producción y centros logísticos con instalaciones dimensionadas a su curva de consumo real. Puedes comprar la instalación o pagar solo por la energía que consumes mediante un PPA on-site.',
      en: 'We cut the power bill of factories, plants and logistics hubs with systems sized to their real load profile. Buy the system outright or pay only for the energy you use through an on-site PPA.',
    },
    metric: { value: '−38 %', label: { es: 'factura media', en: 'average bill' } },
    capabilities: [
      { icon: 'chart-line-up', title: { es: 'Estudio de curva de carga', en: 'Load-profile study' }, text: { es: 'Datos cuartohorarios de 12 meses para dimensionar sin excedentes inútiles.', en: '12 months of 15-minute data to size without useless surplus.' } },
      { icon: 'buildings', title: { es: 'Cubierta y marquesina', en: 'Roof & carports' }, text: { es: 'Estudio estructural, líneas de vida y soluciones sin perforación.', en: 'Structural study, lifelines and non-penetrating mounting.' } },
      { icon: 'currency-eur', title: { es: 'PPA on-site', en: 'On-site PPA' }, text: { es: 'Cero inversión: pagas un precio fijo por kWh durante 15 años.', en: 'Zero capex: pay a fixed price per kWh for 15 years.' } },
      { icon: 'certificate', title: { es: 'Ayudas y deducciones', en: 'Grants & tax credits' }, text: { es: 'Gestionamos subvenciones, bonificaciones de IBI/ICIO y CAEs.', en: 'We handle grants, local tax rebates and energy-saving certificates.' } },
      { icon: 'plug-charging', title: { es: 'Recarga de flota', en: 'Fleet charging' }, text: { es: 'Puntos de recarga para flota eléctrica gestionados con la producción solar.', en: 'EV chargers for electric fleets managed against solar output.' } },
      { icon: 'gauge', title: { es: 'Monitorización', en: 'Monitoring' }, text: { es: 'Panel en tiempo real con producción, ahorro y CO₂ evitado.', en: 'Real-time dashboard showing output, savings and CO₂ avoided.' } },
    ],
    specs: [
      { label: { es: 'Rango de potencia', en: 'Capacity range' }, value: { es: '100 kWp – 10 MWp', en: '100 kWp – 10 MWp' } },
      { label: { es: 'Retorno típico', en: 'Typical payback' }, value: { es: '4 – 6 años', en: '4 – 6 years' } },
      { label: { es: 'Modalidades', en: 'Models' }, value: { es: 'Compra · PPA · Renting', en: 'Purchase · PPA · Lease' } },
      { label: { es: 'Vida útil', en: 'Service life' }, value: { es: '30 años', en: '30 years' } },
    ],
    faqs: [
      { q: { es: '¿Qué pasa con la energía que no consumo?', en: 'What happens to the energy I do not use?' }, a: { es: 'Se vierte a la red con compensación de excedentes o se almacena en baterías si el perfil de consumo lo justifica.', en: 'It is exported to the grid under net billing, or stored in batteries when the load profile justifies it.' } },
      { q: { es: '¿Mi cubierta aguanta el peso?', en: 'Can my roof hold the weight?' }, a: { es: 'Un sistema coplanar añade unos 12–15 kg/m². Siempre hacemos un estudio estructural antes de ofertar.', en: 'A flush-mounted system adds about 12–15 kg/m². We always run a structural study before quoting.' } },
      { q: { es: '¿Cuánto tarda la instalación?', en: 'How long does installation take?' }, a: { es: 'Entre 6 y 16 semanas desde la firma, incluida la legalización, según la potencia.', en: 'Between 6 and 16 weeks from signature, permitting included, depending on size.' } },
    ],
  },
  {
    key: 'storage',
    slug: { es: 'almacenamiento-baterias', en: 'battery-storage' },
    icon: 'battery-charging',
    photo: 'batteries',
    code: 'HL-03',
    title: { es: 'Almacenamiento BESS', en: 'Battery storage (BESS)' },
    short: {
      es: 'Baterías stand-alone e hibridadas para desplazar energía, estabilizar la red y capturar precio.',
      en: 'Stand-alone and hybrid batteries to shift energy, support the grid and capture price spreads.',
    },
    intro: {
      es: 'La solar produce cuando brilla el sol; el mercado paga cuando cae la tarde. Nuestros sistemas de baterías cierran esa brecha: hibridamos plantas existentes y desarrollamos BESS independientes con estrategias de operación optimizadas por algoritmo.',
      en: 'Solar produces when the sun shines; the market pays when the sun sets. Our battery systems close that gap: we hybridise existing plants and develop stand-alone BESS operated by optimised trading strategies.',
    },
    metric: { value: '420 MWh', label: { es: 'en cartera', en: 'in pipeline' } },
    capabilities: [
      { icon: 'lightning', title: { es: 'Hibridación', en: 'Hybridisation' }, text: { es: 'Añadimos baterías a plantas en operación aprovechando el mismo punto de conexión.', en: 'We add batteries to operating plants using the same grid connection.' } },
      { icon: 'chart-pie-slice', title: { es: 'Arbitraje y servicios', en: 'Arbitrage & services' }, text: { es: 'Operación en mercado diario, intradiario y servicios de ajuste.', en: 'Day-ahead, intraday and balancing-services operation.' } },
      { icon: 'shield-check', title: { es: 'Seguridad LFP', en: 'LFP safety' }, text: { es: 'Química LFP, detección de gases y extinción por contenedor.', en: 'LFP chemistry, gas detection and per-container suppression.' } },
      { icon: 'cpu', title: { es: 'EMS propio', en: 'In-house EMS' }, text: { es: 'Nuestro software decide cada 15 minutos cuándo cargar y descargar.', en: 'Our software decides every 15 minutes when to charge and discharge.' } },
      { icon: 'thermometer', title: { es: 'Gestión térmica', en: 'Thermal management' }, text: { es: 'Refrigeración líquida para alargar la vida útil de las celdas.', en: 'Liquid cooling to extend cell life.' } },
      { icon: 'recycle', title: { es: 'Segunda vida', en: 'Second life' }, text: { es: 'Plan de reciclaje y reutilización definido desde el diseño.', en: 'Recycling and reuse plan defined from day one.' } },
    ],
    specs: [
      { label: { es: 'Duración', en: 'Duration' }, value: { es: '2 – 4 horas', en: '2 – 4 hours' } },
      { label: { es: 'Química', en: 'Chemistry' }, value: { es: 'LFP', en: 'LFP' } },
      { label: { es: 'Eficiencia round-trip', en: 'Round-trip efficiency' }, value: { es: '≈ 88 %', en: '≈ 88%' } },
      { label: { es: 'Ciclos garantizados', en: 'Guaranteed cycles' }, value: { es: '7.000+', en: '7,000+' } },
    ],
    faqs: [
      { q: { es: '¿Se puede añadir batería a una planta ya construida?', en: 'Can a battery be added to an existing plant?' }, a: { es: 'Sí, siempre que el permiso de acceso lo permita. Estudiamos el acoplamiento en AC o DC según el caso.', en: 'Yes, as long as the grid permit allows it. We assess AC or DC coupling case by case.' } },
      { q: { es: '¿Cuál es la vida útil de una batería LFP?', en: 'What is the life of an LFP battery?' }, a: { es: 'Entre 15 y 20 años con un ciclo diario, con reemplazos parciales de módulos si es necesario.', en: 'Between 15 and 20 years at one cycle per day, with partial module augmentation if needed.' } },
    ],
  },
  {
    key: 'om',
    slug: { es: 'operacion-mantenimiento', en: 'operations-maintenance' },
    icon: 'gear-six',
    photo: 'workerPanel',
    code: 'HL-04',
    title: { es: 'O&M y activos digitales', en: 'O&M & digital assets' },
    short: {
      es: 'Operación, mantenimiento predictivo y gestión de activos con nuestra plataforma Pulse.',
      en: 'Operations, predictive maintenance and asset management powered by our Pulse platform.',
    },
    intro: {
      es: 'Una planta rinde lo que rinde su mantenimiento. Operamos 1,1 GW de terceros y propios con un centro de control 24/7, termografía con drones y Pulse, nuestra plataforma que detecta pérdidas antes de que aparezcan en la factura.',
      en: 'A plant performs as well as it is maintained. We operate 1.1 GW of third-party and own assets from a 24/7 control room, with drone thermography and Pulse — our platform that spots losses before they show up on the invoice.',
    },
    metric: { value: '1.1 GW', label: { es: 'bajo O&M', en: 'under O&M' } },
    capabilities: [
      { icon: 'pulse', title: { es: 'Centro de control 24/7', en: '24/7 control room' }, text: { es: 'Supervisión SCADA y respuesta en campo en menos de 4 horas.', en: 'SCADA supervision and field response in under 4 hours.' } },
      { icon: 'eye', title: { es: 'Termografía con drones', en: 'Drone thermography' }, text: { es: 'Detección de puntos calientes y módulos degradados a escala de planta.', en: 'Hotspot and degraded-module detection at plant scale.' } },
      { icon: 'cpu', title: { es: 'Mantenimiento predictivo', en: 'Predictive maintenance' }, text: { es: 'Modelos que anticipan fallos en inversores y seguidores.', en: 'Models that anticipate inverter and tracker failures.' } },
      { icon: 'drop', title: { es: 'Limpieza robotizada', en: 'Robotic cleaning' }, text: { es: 'Robots en seco que reducen el consumo de agua a cero.', en: 'Dry-cleaning robots that bring water use to zero.' } },
      { icon: 'chart-line-up', title: { es: 'Asset management', en: 'Asset management' }, text: { es: 'Reporting técnico-financiero para fondos y propietarios.', en: 'Technical and financial reporting for funds and owners.' } },
      { icon: 'wrench', title: { es: 'Repotenciación', en: 'Repowering' }, text: { es: 'Sustitución de equipos para plantas con más de 10 años.', en: 'Equipment upgrades for plants older than 10 years.' } },
    ],
    specs: [
      { label: { es: 'Potencia gestionada', en: 'Capacity managed' }, value: { es: '1,1 GW', en: '1.1 GW' } },
      { label: { es: 'Tiempo de respuesta', en: 'Response time' }, value: { es: '< 4 h', en: '< 4 h' } },
      { label: { es: 'Disponibilidad media', en: 'Average availability' }, value: { es: '99,4 %', en: '99.4%' } },
      { label: { es: 'Plataforma', en: 'Platform' }, value: { es: 'GEOLight Pulse 3.0', en: 'GEOLight Pulse 3.0' } },
    ],
    faqs: [
      { q: { es: '¿Operáis plantas que no habéis construido?', en: 'Do you operate plants you did not build?' }, a: { es: 'Sí, más de la mitad de nuestra cartera de O&M es de terceros. Hacemos una auditoría de entrada de 60 días.', en: 'Yes, over half of our O&M portfolio belongs to third parties. We run a 60-day onboarding audit.' } },
      { q: { es: '¿Pulse se integra con mi SCADA?', en: 'Does Pulse integrate with my SCADA?' }, a: { es: 'Pulse lee Modbus, OPC-UA y las APIs de los principales fabricantes de inversores.', en: 'Pulse reads Modbus, OPC-UA and the APIs of the main inverter manufacturers.' } },
    ],
  },
];

export const getSolution = (slug: string, lang: 'es' | 'en') => solutions.find((s) => s.slug[lang] === slug);
