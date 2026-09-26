/* ==========================================================================
   Registro central de fotografías (Unsplash — licencia gratuita)
   --------------------------------------------------------------------------
   · Todas las fotos se sirven desde el CDN de Unsplash (images.unsplash.com),
     que redimensiona y convierte a AVIF/WebP automáticamente (auto=format).
   · Para cambiar una foto: sustituye `src` por otra ruta de Unsplash
     (la parte "photo-XXXXXXXX" de la URL de la imagen).
   · Licencia: https://unsplash.com/license — uso comercial gratuito, sin
     atribución obligatoria (la incluimos en /legal/aviso-legal por cortesía).
   ========================================================================== */

export interface PhotoDef {
  src: string; // ruta en images.unsplash.com
  alt: { es: string; en: string };
  /** punto focal para object-position */
  focus?: string;
}

export const photos = {
  heroField: {
    src: 'photo-1509391366360-2e959784a276',
    alt: { es: 'Filas de paneles solares bajo el cielo', en: 'Rows of solar panels under the sky' },
  },
  aerialPlant: {
    src: 'photo-1642950863398-1fc3600a5313',
    alt: { es: 'Vista aérea de una planta fotovoltaica', en: 'Aerial view of a photovoltaic plant' },
  },
  desertArray: {
    src: 'photo-1674606071893-2a9023075f70',
    alt: { es: 'Gran planta solar en un paisaje árido', en: 'Large solar array in an arid landscape' },
  },
  panelsSky: {
    src: 'photo-1508514177221-188b1cf16e9d',
    alt: { es: 'Panel solar bajo cielo azul', en: 'Solar panel under a blue sky' },
  },
  panelsGrass: {
    src: 'photo-1629726797843-618688139f5a',
    alt: { es: 'Paneles solares sobre pradera verde', en: 'Solar panels on a green meadow' },
  },
  panelTop: {
    src: 'photo-1670519808965-16b9b2f724af',
    alt: { es: 'Detalle cenital de un módulo fotovoltaico', en: 'Top-down detail of a PV module' },
  },
  windSolar: {
    src: 'photo-1762381157166-f51ac99ab412',
    alt: { es: 'Aerogeneradores y paneles solares en un paisaje rural', en: 'Wind turbines and solar panels in a rural landscape' },
  },
  windGolden: {
    src: 'photo-1466611653911-95081537e5b7',
    alt: { es: 'Aerogenerador al atardecer', en: 'Wind turbine at golden hour' },
  },
  windFog: {
    src: 'photo-1615209853186-e4bd66602508',
    alt: { es: 'Aerogenerador emergiendo de la niebla al amanecer', en: 'Wind turbine emerging from fog at sunrise' },
  },
  windAerial: {
    src: 'photo-1452179535021-368bb0edc3a8',
    alt: { es: 'Vista aérea de un parque eólico', en: 'Aerial photo of a wind farm' },
  },
  installer: {
    src: 'photo-1624397640148-949b1732bb0a',
    alt: { es: 'Técnico instalando un panel solar en una cubierta', en: 'Technician installing a solar panel on a roof' },
  },
  hardhat: {
    src: 'photo-1648135327756-b606e2eb8caa',
    alt: { es: 'Casco de obra sobre un panel solar', en: 'Hard hat resting on a solar panel' },
  },
  rooftopIndustrial: {
    src: 'photo-1707247111552-aaf74241058b',
    alt: { es: 'Cubierta industrial con paneles solares', en: 'Industrial rooftop covered with solar panels' },
  },
  rooftopRows: {
    src: 'photo-1694327671725-e2a81cda3436',
    alt: { es: 'Filas de paneles en una cubierta', en: 'Rows of panels on a rooftop' },
  },
  workerPanel: {
    src: 'photo-1668097613572-40b7c11c8727',
    alt: { es: 'Técnica trabajando en un panel solar', en: 'Technician working on a solar panel' },
  },
  batteries: {
    src: 'photo-1742899273038-67ff67477663',
    alt: { es: 'Filas de módulos de baterías', en: 'Rows of battery modules' },
  },
  serverRoom: {
    src: 'photo-1584169417032-d34e8d805e8b',
    alt: { es: 'Pasillo de racks de equipos', en: 'Aisle of equipment racks' },
  },
  engineers: {
    src: 'photo-1581094482523-8555833e6aba',
    alt: { es: 'Ingenieros con casco en campo', en: 'Engineers with helmets on site' },
  },
  teamTable: {
    src: 'photo-1581091212911-f4efc3f71c48',
    alt: { es: 'Equipo reunido alrededor de una mesa con portátiles', en: 'Team gathered around a table with laptops' },
  },
  teamSite: {
    src: 'photo-1581094376368-ae9f64e15985',
    alt: { es: 'Equipo técnico visitando un emplazamiento', en: 'Technical team visiting a site' },
  },
  engineerSafety: {
    src: 'photo-1688841747582-41097036109d',
    alt: { es: 'Ingeniero con casco y equipo de seguridad', en: 'Engineer wearing a hard hat and safety gear' },
  },
  fieldSunset: {
    src: 'photo-1500382017468-9049fed747ef',
    alt: { es: 'Campo agrícola bajo la luz de la tarde', en: 'Farm field in afternoon light' },
  },
  grassSunset: {
    src: 'photo-1595495745827-85bcc5c9a028',
    alt: { es: 'Pradera al atardecer', en: 'Grass field at sunset' },
  },
  horizon: {
    src: 'photo-1494548162494-384bba4ab999',
    alt: { es: 'Sol sobre el horizonte', en: 'Sun over the horizon' },
  },
  mountainsDawn: {
    src: 'photo-1519414442781-fbd745c5b497',
    alt: { es: 'Amanecer sobre montañas', en: 'Sunrise over mountains' },
  },
} satisfies Record<string, PhotoDef>;

export type PhotoKey = keyof typeof photos;

export const unsplashUrl = (src: string, w: number, h?: number, q = 72) =>
  `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=${q}`;
