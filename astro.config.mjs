// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia `site` por el dominio real antes de publicar (se usa para canonical, sitemap y OG).
export default defineConfig({
  site: 'https://www.geolight.com',
  trailingSlash: 'always',
  // Astro 7 usa 'jsx' por defecto (colapsa espacios entre elementos inline).
  // `true` mantiene el comportamiento clásico: HTML minificado respetando los espacios.
  compressHTML: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  image: {
    // Permite usar <Image /> de astro:assets con fotos remotas de Unsplash si lo necesitas.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
    }),
  ],
});
