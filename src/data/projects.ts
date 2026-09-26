/* ==========================================================================
   Proyectos (ficticios) — alimentan el mapa, el listado y las fichas.
   ========================================================================== */
import type { L10n } from '../i18n';
import type { PhotoKey } from './images';

export type ProjectType = 'utility' | 'selfconsumption' | 'storage' | 'om';

export interface Project {
  slug: L10n;
  name: string;
  type: ProjectType;
  location: L10n;
  country: L10n;
  lon: number;
  lat: number;
  capacity: string;
  year: number;
  status: 'operating' | 'construction' | 'development';
  photo: PhotoKey;
  summary: L10n;
  body: L10n<string[]>;
  facts: { value: string; label: L10n }[];
}

export const statusLabel: Record<Project['status'], L10n> = {
  operating: { es: 'En operación', en: 'Operating' },
  construction: { es: 'En construcción', en: 'Under construction' },
  development: { es: 'En desarrollo', en: 'In development' },
};

export const typeLabel: Record<ProjectType, L10n> = {
  utility: { es: 'Gran escala', en: 'Utility-scale' },
  selfconsumption: { es: 'Autoconsumo', en: 'Self-consumption' },
  storage: { es: 'Almacenamiento', en: 'Storage' },
  om: { es: 'O&M', en: 'O&M' },
};

export const projects: Project[] = [
  {
    slug: { es: 'los-llanos-albacete', en: 'los-llanos-albacete' },
    name: 'Los Llanos',
    type: 'utility',
    location: { es: 'Albacete', en: 'Albacete' },
    country: { es: 'España', en: 'Spain' },
    lon: -1.86, lat: 38.99,
    capacity: '150 MWp',
    year: 2026,
    status: 'operating',
    photo: 'aerialPlant',
    summary: { es: 'Nuestra mayor planta hasta la fecha: 150 MWp con seguidores a un eje y módulos bifaciales.', en: 'Our largest plant to date: 150 MWp with single-axis trackers and bifacial modules.' },
    body: {
      es: [
        'Los Llanos se construyó en 13 meses sobre 210 hectáreas de secano. La planta combina 272.000 módulos bifaciales con seguidores a un eje que siguen al sol de este a oeste, lo que aumenta la producción un 21 % respecto a una estructura fija.',
        'El diseño reserva corredores de biodiversidad y un rebaño de 600 ovejas mantiene la vegetación sin herbicidas. Durante la obra trabajaron 420 personas, el 60 % de la comarca.',
      ],
      en: [
        'Los Llanos was built in 13 months on 210 hectares of dryland. The plant combines 272,000 bifacial modules with single-axis trackers that follow the sun east to west, raising output by 21% versus fixed-tilt.',
        'The layout keeps biodiversity corridors and a flock of 600 sheep manages vegetation without herbicides. Construction employed 420 people, 60% of them from the local area.',
      ],
    },
    facts: [
      { value: '285 GWh', label: { es: 'producción anual', en: 'annual output' } },
      { value: '81.000', label: { es: 'hogares equivalentes', en: 'homes powered' } },
      { value: '57 kt', label: { es: 'CO₂ evitado / año', en: 'CO₂ avoided / year' } },
    ],
  },
  {
    slug: { es: 'hibridacion-guadiana', en: 'guadiana-hybrid' },
    name: 'Guadiana Híbrida',
    type: 'storage',
    location: { es: 'Badajoz', en: 'Badajoz' },
    country: { es: 'España', en: 'Spain' },
    lon: -6.35, lat: 38.88,
    capacity: '90 MWp + 40 MWh',
    year: 2026,
    status: 'construction',
    photo: 'batteries',
    summary: { es: 'Primera hibridación de la compañía: baterías LFP de 4 horas añadidas a una planta existente.', en: 'Our first hybridisation: 4-hour LFP batteries added to an operating plant.' },
    body: {
      es: ['Guadiana añade 40 MWh de almacenamiento a una planta de 90 MWp sin ampliar el punto de conexión. Las baterías cargan al mediodía y descargan en la punta de la tarde, cuando el precio es mayor.', 'El sistema se opera con el EMS propio de GEOLight, que decide cada 15 minutos la estrategia óptima entre mercado diario, intradiario y servicios de ajuste.'],
      en: ['Guadiana adds 40 MWh of storage to a 90 MWp plant without enlarging the grid connection. Batteries charge at midday and discharge into the evening peak, when prices are highest.', 'The system runs on GEOLight’s in-house EMS, which chooses the optimal strategy across day-ahead, intraday and balancing markets every 15 minutes.'],
    },
    facts: [
      { value: '4 h', label: { es: 'duración', en: 'duration' } },
      { value: '+18 %', label: { es: 'ingresos por MWh', en: 'revenue per MWh' } },
      { value: 'LFP', label: { es: 'química', en: 'chemistry' } },
    ],
  },
  {
    slug: { es: 'castell-ceramica-vila-real', en: 'castell-ceramica-vila-real' },
    name: 'Castell Ceràmica',
    type: 'selfconsumption',
    location: { es: 'Vila-real, Castellón', en: 'Vila-real, Castellón' },
    country: { es: 'España', en: 'Spain' },
    lon: -0.1, lat: 39.94,
    capacity: '6,2 MWp',
    year: 2025,
    status: 'operating',
    photo: 'rooftopIndustrial',
    summary: { es: 'Autoconsumo en cubierta para una fábrica cerámica de consumo intensivo, con PPA on-site a 15 años.', en: 'Rooftop self-consumption for an energy-intensive ceramics plant, under a 15-year on-site PPA.' },
    body: {
      es: ['Cuatro naves, 11.800 módulos y cero inversión para el cliente. La instalación cubre el 31 % del consumo eléctrico anual de la planta y el 100 % de sus horas centrales en verano.', 'La obra se ejecutó por fases sin detener la producción, con líneas de vida permanentes que ahora usa el equipo de mantenimiento del propio cliente.'],
      en: ['Four warehouses, 11,800 modules and zero capex for the client. The system covers 31% of the plant’s annual electricity use and 100% of its midday summer demand.', 'Works were phased with no production stoppage, installing permanent lifelines now also used by the client’s own maintenance team.'],
    },
    facts: [
      { value: '−34 %', label: { es: 'coste eléctrico', en: 'electricity cost' } },
      { value: '9,1 GWh', label: { es: 'producción anual', en: 'annual output' } },
      { value: '0 €', label: { es: 'inversión cliente', en: 'client capex' } },
    ],
  },
  {
    slug: { es: 'alentejo-solar-evora', en: 'alentejo-solar-evora' },
    name: 'Alentejo Solar',
    type: 'utility',
    location: { es: 'Évora', en: 'Évora' },
    country: { es: 'Portugal', en: 'Portugal' },
    lon: -7.91, lat: 38.57,
    capacity: '120 MWp',
    year: 2024,
    status: 'operating',
    photo: 'desertArray',
    summary: { es: 'Planta con PPA corporativo a 12 años con una cadena de supermercados ibérica.', en: 'Plant backed by a 12-year corporate PPA with an Iberian supermarket chain.' },
    body: {
      es: ['Alentejo Solar fue nuestro primer gran proyecto fuera de España. El 70 % de su producción está contratada a precio fijo con un comprador corporativo, lo que permitió cerrar la financiación en 5 meses.', 'La planta incorpora estaciones meteorológicas propias y un sistema de limpieza en seco que evita consumir agua en una región con estrés hídrico.'],
      en: ['Alentejo Solar was our first large project outside Spain. 70% of its output is sold at a fixed price to a corporate offtaker, which allowed financing to close in 5 months.', 'The plant has its own weather stations and a dry-cleaning system that avoids water use in a water-stressed region.'],
    },
    facts: [
      { value: '232 GWh', label: { es: 'producción anual', en: 'annual output' } },
      { value: '12 años', label: { es: 'PPA corporativo', en: 'corporate PPA' } },
      { value: '0 m³', label: { es: 'agua de limpieza', en: 'cleaning water' } },
    ],
  },
  {
    slug: { es: 'puglia-agrivoltaica', en: 'puglia-agrivoltaic' },
    name: 'Tavoliere Agrivoltaico',
    type: 'utility',
    location: { es: 'Foggia, Puglia', en: 'Foggia, Apulia' },
    country: { es: 'Italia', en: 'Italy' },
    lon: 15.55, lat: 41.46,
    capacity: '45 MWp',
    year: 2025,
    status: 'operating',
    photo: 'fieldSunset',
    summary: { es: 'Agrivoltaica elevada: trigo duro y paneles bifaciales compartiendo el mismo suelo.', en: 'Elevated agrivoltaics: durum wheat and bifacial panels sharing the same land.' },
    body: {
      es: ['Las estructuras se elevan 4,5 metros para que la maquinaria agrícola trabaje debajo. El agricultor mantiene su cosecha y cobra un arrendamiento estable durante 30 años.', 'Un convenio con la Universidad de Foggia mide cómo la sombra parcial reduce la evaporación y el estrés térmico del cultivo.'],
      en: ['Structures stand 4.5 metres high so farm machinery can work underneath. The farmer keeps the harvest and earns a stable lease for 30 years.', 'A partnership with the University of Foggia measures how partial shade reduces evaporation and heat stress on the crop.'],
    },
    facts: [
      { value: '4,5 m', label: { es: 'altura libre', en: 'clearance' } },
      { value: '−22 %', label: { es: 'evaporación', en: 'evaporation' } },
      { value: '30 años', label: { es: 'arrendamiento', en: 'lease' } },
    ],
  },
  {
    slug: { es: 'plataforma-logistica-zaragoza', en: 'zaragoza-logistics-hub' },
    name: 'Nodo Logístico Ebro',
    type: 'selfconsumption',
    location: { es: 'Zaragoza', en: 'Zaragoza' },
    country: { es: 'España', en: 'Spain' },
    lon: -0.95, lat: 41.65,
    capacity: '4,8 MWp',
    year: 2024,
    status: 'operating',
    photo: 'rooftopRows',
    summary: { es: 'Cubierta solar y 60 puntos de recarga para la flota eléctrica de un operador logístico.', en: 'Rooftop solar and 60 chargers for a logistics operator’s electric fleet.' },
    body: {
      es: ['La instalación alimenta la climatización del almacén durante el día y la recarga de 60 furgonetas eléctricas por la tarde, priorizando la energía solar almacenada.'],
      en: ['The system powers warehouse HVAC during the day and charges 60 electric vans in the afternoon, prioritising stored solar energy.'],
    },
    facts: [
      { value: '60', label: { es: 'puntos de recarga', en: 'chargers' } },
      { value: '−41 %', label: { es: 'coste energético', en: 'energy cost' } },
      { value: '5,2 años', label: { es: 'retorno', en: 'payback' } },
    ],
  },
  {
    slug: { es: 'cartera-om-andalucia', en: 'andalusia-om-portfolio' },
    name: 'Cartera Guadalquivir',
    type: 'om',
    location: { es: 'Sevilla y Córdoba', en: 'Seville & Córdoba' },
    country: { es: 'España', en: 'Spain' },
    lon: -5.6, lat: 37.6,
    capacity: '320 MWp',
    year: 2023,
    status: 'operating',
    photo: 'workerPanel',
    summary: { es: 'O&M integral de 9 plantas de terceros con GEOLight Pulse y termografía con drones.', en: 'Full-scope O&M of 9 third-party plants with GEOLight Pulse and drone thermography.' },
    body: {
      es: ['En los primeros 12 meses tras asumir la cartera, la disponibilidad media pasó del 97,1 % al 99,4 % y se recuperaron 11 GWh anuales de pérdidas no detectadas.'],
      en: ['Within 12 months of taking over the portfolio, average availability rose from 97.1% to 99.4% and 11 GWh per year of undetected losses were recovered.'],
    },
    facts: [
      { value: '9', label: { es: 'plantas', en: 'plants' } },
      { value: '99,4 %', label: { es: 'disponibilidad', en: 'availability' } },
      { value: '+11 GWh', label: { es: 'recuperados / año', en: 'recovered / year' } },
    ],
  },
  {
    slug: { es: 'bess-sagunt', en: 'sagunt-bess' },
    name: 'BESS Sagunt',
    type: 'storage',
    location: { es: 'Sagunt, València', en: 'Sagunt, Valencia' },
    country: { es: 'España', en: 'Spain' },
    lon: -0.27, lat: 39.68,
    capacity: '20 MW / 80 MWh',
    year: 2027,
    status: 'development',
    photo: 'serverRoom',
    summary: { es: 'Batería stand-alone junto a una subestación industrial para dar firmeza a la red.', en: 'Stand-alone battery next to an industrial substation to firm up the grid.' },
    body: {
      es: ['Proyecto con acceso a red concedido y tramitación ambiental en curso. Prestará servicios de control de tensión y reserva al operador del sistema.'],
      en: ['Grid access has been granted and environmental permitting is under way. It will provide voltage control and reserve services to the system operator.'],
    },
    facts: [
      { value: '80 MWh', label: { es: 'capacidad', en: 'capacity' } },
      { value: '2027', label: { es: 'puesta en marcha', en: 'COD' } },
      { value: '4 h', label: { es: 'duración', en: 'duration' } },
    ],
  },
];

export const getProject = (slug: string, lang: 'es' | 'en') => projects.find((p) => p.slug[lang] === slug);
