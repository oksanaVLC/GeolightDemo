import { getCollection, type CollectionEntry } from 'astro:content';
import { detailPath, type Lang } from '../i18n';

export type NewsEntry = CollectionEntry<'news'>;
export const newsSlug = (e: NewsEntry) => e.id.split('/').pop()!;
export const newsHref = (e: NewsEntry) => detailPath('news', newsSlug(e), e.data.lang);
export const readingTime = (e: NewsEntry) => Math.max(1, Math.round((e.body ?? '').split(/\s+/).length / 200));

export async function getNews(lang: Lang) {
  const all = await getCollection('news', (e) => e.data.lang === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Devuelve { es: url, en: url } de un artículo según su translationKey */
export async function newsAlternates(e: NewsEntry) {
  const all = await getCollection('news', (x) => x.data.translationKey === e.data.translationKey);
  return Object.fromEntries(all.map((x) => [x.data.lang, newsHref(x)])) as Partial<Record<Lang, string>>;
}
