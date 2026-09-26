/* ==========================================================================
   i18n — idiomas, rutas traducidas y textos de interfaz
   ========================================================================== */

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';
export const htmlLang: Record<Lang, string> = { es: 'es-ES', en: 'en-GB' };
export const ogLocale: Record<Lang, string> = { es: 'es_ES', en: 'en_GB' };

/** Texto bilingüe. Úsalo en /src/data para cualquier contenido traducible. */
export type L10n<T = string> = Record<Lang, T>;
export const t = <T,>(value: L10n<T>, lang: Lang): T => value[lang] ?? value[defaultLang];

/** Rutas estáticas con slug traducido (se usan para menús, hreflang y el selector de idioma). */
export const routes = {
  home: { es: '/', en: '/en/' },
  about: { es: '/nosotros/', en: '/en/about/' },
  solutions: { es: '/soluciones/', en: '/en/solutions/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  sustainability: { es: '/sostenibilidad/', en: '/en/sustainability/' },
  careers: { es: '/talento/', en: '/en/careers/' },
  news: { es: '/noticias/', en: '/en/news/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  privacy: { es: '/legal/privacidad/', en: '/en/legal/privacy/' },
  cookies: { es: '/legal/cookies/', en: '/en/legal/cookies/' },
  legal: { es: '/legal/aviso-legal/', en: '/en/legal/legal-notice/' },
} satisfies Record<string, L10n>;
export type RouteKey = keyof typeof routes;

export const path = (key: RouteKey, lang: Lang) => routes[key][lang];

/** Construye rutas de detalle: solutions / projects / news */
export const detailPath = (section: 'solutions' | 'projects' | 'news', slug: string, lang: Lang) =>
  `${routes[section][lang]}${slug}/`;

export const ui = {
  es: {
    'skip': 'Saltar al contenido',
    'nav.about': 'Nosotros',
    'nav.solutions': 'Soluciones',
    'nav.projects': 'Proyectos',
    'nav.sustainability': 'Sostenibilidad',
    'nav.careers': 'Talento',
    'nav.news': 'Noticias',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.allSolutions': 'Ver todas las soluciones',
    'cta.talk': 'Hablemos',
    'cta.contact': 'Contactar',
    'cta.discover': 'Descubrir',
    'cta.more': 'Saber más',
    'cta.viewProject': 'Ver proyecto',
    'cta.viewAll': 'Ver todo',
    'cta.readMore': 'Leer artículo',
    'cta.apply': 'Aplicar',
    'cta.download': 'Descargar',
    'cta.send': 'Enviar mensaje',
    'breadcrumb.home': 'Inicio',
    'footer.tagline': 'Energía solar diseñada para durar. Desarrollamos, construimos y operamos activos renovables en el sur de Europa.',
    'footer.company': 'Compañía',
    'footer.solutions': 'Soluciones',
    'footer.contact': 'Contacto',
    'footer.newsletter': 'Boletín trimestral',
    'footer.newsletterText': 'Un correo cada trimestre con datos del sector y nuestros proyectos. Sin ruido.',
    'footer.emailPlaceholder': 'tu@empresa.com',
    'footer.subscribe': 'Suscribirme',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.cookies': 'Cookies',
    'footer.legal': 'Aviso legal',
    'footer.backTop': 'Volver arriba',
    'lang.switch': 'Cambiar idioma',
    'news.latest': 'Últimas noticias',
    'news.all': 'Todas',
    'news.minRead': 'min de lectura',
    'project.capacity': 'Potencia',
    'project.year': 'Año',
    'project.location': 'Ubicación',
    'project.type': 'Tipología',
    'project.status': 'Estado',
    'project.related': 'Proyectos relacionados',
    'filter.all': 'Todos',
    'notFound.title': 'Esta página se ha quedado a la sombra',
    'notFound.text': 'El enlace no existe o se ha movido. Vuelve al inicio y sigue la luz.',
    'notFound.cta': 'Volver al inicio',
  },
  en: {
    'skip': 'Skip to content',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.projects': 'Projects',
    'nav.sustainability': 'Sustainability',
    'nav.careers': 'Careers',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.allSolutions': 'See all solutions',
    'cta.talk': "Let's talk",
    'cta.contact': 'Contact us',
    'cta.discover': 'Discover',
    'cta.more': 'Learn more',
    'cta.viewProject': 'View project',
    'cta.viewAll': 'View all',
    'cta.readMore': 'Read article',
    'cta.apply': 'Apply',
    'cta.download': 'Download',
    'cta.send': 'Send message',
    'breadcrumb.home': 'Home',
    'footer.tagline': 'Solar energy engineered to last. We develop, build and operate renewable assets across Southern Europe.',
    'footer.company': 'Company',
    'footer.solutions': 'Solutions',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Quarterly briefing',
    'footer.newsletterText': 'One email per quarter with market data and project updates. No noise.',
    'footer.emailPlaceholder': 'you@company.com',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',
    'footer.legal': 'Legal notice',
    'footer.backTop': 'Back to top',
    'lang.switch': 'Change language',
    'news.latest': 'Latest news',
    'news.all': 'All',
    'news.minRead': 'min read',
    'project.capacity': 'Capacity',
    'project.year': 'Year',
    'project.location': 'Location',
    'project.type': 'Type',
    'project.status': 'Status',
    'project.related': 'Related projects',
    'filter.all': 'All',
    'notFound.title': 'This page is out of the sun',
    'notFound.text': 'The link does not exist or has moved. Head home and follow the light.',
    'notFound.cta': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
export const useT = (lang: Lang) => (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];

export const formatDate = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(htmlLang[lang], { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

export const formatNumber = (n: number, lang: Lang, digits = 0) =>
  new Intl.NumberFormat(htmlLang[lang], { maximumFractionDigits: digits }).format(n);
