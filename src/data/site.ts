/* ==========================================================================
   Datos globales de la compañía (ficticia) — edita aquí nombre, contacto, etc.
   ========================================================================== */
import type { L10n } from '../i18n';

export const site = {
  name: 'GEOLight',
  legalName: 'GEOLight Energía, S.L.',
  url: 'https://www.geolight.com',
  founded: 2011,
  email: 'hola@geolight.com',
  careersEmail: 'talento@geolight.com',
  phone: '+34 960 000 000',
  phoneHref: '+34960000000',
  address: {
    street: 'Avinguda del Sol, 48',
    postalCode: '46021',
    city: 'València',
    region: 'Comunitat Valenciana',
    country: 'ES',
  },
  geo: { lat: 39.4699, lon: -0.3763 },
  social: {
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
  /** Endpoint del formulario (Formspree, Netlify Forms, Web3Forms, tu API…). */
  formEndpoint: 'https://formspree.io/f/your-form-id',
  tagline: {
    es: 'La energía del sol, diseñada para durar.',
    en: 'Solar energy, engineered to last.',
  } satisfies L10n,
  description: {
    es: 'GEOLight desarrolla, construye y opera plantas solares, autoconsumo industrial y almacenamiento con baterías en el sur de Europa. 1,8 GW desarrollados desde 2011.',
    en: 'GEOLight develops, builds and operates utility-scale solar, industrial self-consumption and battery storage across Southern Europe. 1.8 GW developed since 2011.',
  } satisfies L10n,
};

export const offices = [
  { city: 'València', role: { es: 'Sede central', en: 'Headquarters' }, address: 'Avinguda del Sol, 48 · 46021', country: { es: 'España', en: 'Spain' } },
  { city: 'Madrid', role: { es: 'Desarrollo de negocio', en: 'Business development' }, address: 'Calle de Alcalá, 200 · 28028', country: { es: 'España', en: 'Spain' } },
  { city: 'Lisboa', role: { es: 'Iberia Oeste', en: 'Iberia West' }, address: 'Av. da Liberdade, 110 · 1250-146', country: { es: 'Portugal', en: 'Portugal' } },
  { city: 'Bari', role: { es: 'Italia', en: 'Italy' }, address: 'Corso Cavour, 21 · 70122', country: { es: 'Italia', en: 'Italy' } },
];

/** Cifras clave (se animan con contador). value = número, suffix = unidad. */
export const keyStats = [
  { value: 1.8, decimals: 1, suffix: ' GW', label: { es: 'desarrollados desde 2011', en: 'developed since 2011' } },
  { value: 64, suffix: '', label: { es: 'plantas en operación', en: 'plants in operation' } },
  { value: 640, suffix: ' kt', label: { es: 'CO₂ evitado al año', en: 'CO₂ avoided per year' } },
  { value: 310, suffix: '', label: { es: 'profesionales en 4 países', en: 'professionals in 4 countries' } },
];

/** Logotipos de clientes / socios — FICTICIOS (SVG generados en PartnerLogos.astro). */
export const partners = ['Nordvik', 'Castell Ceràmica', 'Transibérica', 'Monteverde', 'Kobalt Grid', 'Aurelia Foods', 'Altamar', 'Qanat Water'];
