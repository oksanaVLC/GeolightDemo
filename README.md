# GEOLight — corporate website (Astro 7 · ES/EN)

Premium corporate site for **GEOLight**, a fictional solar and renewables company (utility-scale solar, industrial self-consumption, battery storage, O&M). Built with **Astro 7.3** and **Node ≥ 22.12**, the same versions as your current project.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in /dist (55 pages)
npm run preview    # preview the production build
```

## Where to change things

| I want to…                                     | Edit this                                           |
| ---------------------------------------------- | --------------------------------------------------- |
| Change **colours, fonts, radii, spacing**      | `src/styles/tokens.css` (the only file you need)    |
| Change **button styles**                       | `--btn-*` tokens, or `src/components/ui/Button.astro` |
| Change **halftone colour / dot size**          | `--ht-ink`, `--ht-paper`, `--ht-dot` in `tokens.css` |
| Change company name, email, phone, address     | `src/data/site.ts`                                  |
| Edit services / projects / timeline / jobs     | `src/data/solutions.ts`, `projects.ts`, `company.ts` |
| Change a photo                                 | `src/data/images.ts` (Unsplash IDs, one registry)   |
| Add / translate UI text                        | `src/i18n/index.ts`                                 |
| Add a news article                             | new `.md` in `src/content/news/es/` and `/en/` with the same `translationKey` |
| Add an icon                                    | drop an `.svg` in `src/icons/` → `<Icon name="file-name" />` |
| Connect the contact / newsletter form          | `formEndpoint` in `src/data/site.ts` (Formspree, Web3Forms, Netlify…) |
| Set the real domain                            | `site` in `astro.config.mjs` + `public/robots.txt` + `public/llms.txt` |

## Shared components (`src/components/ui`)

`Button` (primary · dark · light · ghost · ghost-light · link, sizes sm/md/lg, animated arrow) ·
`Icon` (Phosphor Light SVGs, inline, inherit `currentColor`) · `Eyebrow` · `SectionHeader` (word-by-word
reveal + serif accent) · `Photo` (Unsplash srcset) · `Halftone` (CSS halftone duotone + colour reveal on
hover) · `Counter` · `Accordion` (native `<details>`) · `Chip`.

Sections (`src/components/sections`): `AsciiSun` (generative ASCII canvas), `PageHero`, `ProcessSticky`,
`ProjectMap` (dot-matrix map), `Timeline`, `SavingsCalculator`, `ContactForm`, `ScrollText`, `CtaBand`,
`ProjectCard`, `NewsCard`.

## Structure

```
src/
  components/  ui · brand · layout · sections
  content/     news/es · news/en            (Markdown + content collection)
  data/        site · solutions · projects · company · images · dotmap.json
  i18n/        languages, translated routes, UI strings
  layouts/     BaseLayout (SEO, header, footer, global animations)
  pages/       ES at root, EN under /en/  → thin files that render a view
  styles/      tokens.css · global.css
  views/       one template per page type, shared by both languages
public/        favicon, OG image, robots.txt (AI bots allowed), llms.txt, manifest
```

## SEO / GEO already built in

Canonical, `hreflang` es/en/x-default, Open Graph + Twitter cards, JSON-LD (Organization, WebSite,
BreadcrumbList, FAQPage, Service, NewsArticle, Place, ContactPage), XML sitemap, `robots.txt`
that allows AI crawlers, `llms.txt`, semantic HTML, a single `h1` per page, and descriptive alt text in
both languages.

## Credits

Photos: [Unsplash](https://unsplash.com/license) (free licence). Icons: [Phosphor Icons](https://phosphoricons.com) (MIT,
see `src/icons/LICENSE-phosphor.txt`). Map geometry: Natural Earth via `world-atlas` (public domain).
Fonts: Geist, Geist Mono (OFL), Instrument Serif (OFL). All company data and partner logos are fictional.
