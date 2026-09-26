import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Noticias: un archivo Markdown por idioma en /src/content/news/{es|en}/.
 * `translationKey` enlaza la versión ES con la EN (hreflang + selector de idioma).
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    photo: z.string(),
    lang: z.enum(['es', 'en']),
    translationKey: z.string(),
    author: z.string().default('GEOLight'),
  }),
});

export const collections = { news };
