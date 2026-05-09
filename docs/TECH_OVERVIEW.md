# Technical overview — otica-site

## Folder structure

| Path | Role |
|------|------|
| `src/app/` | Next.js App Router routes, layouts, `page.tsx` entrypoints only. |
| `src/components/layout/` | Shell UI: header, footer, editorial hero shell (no business data). |
| `src/components/sections/` | Page blocks driven by props; copy from `@/config/site-content`. |
| `src/components/ui/` | Reusable primitives (buttons, carousel, marquee, scroll reveal). |
| `src/components/pages/` | **Route composers** — assemble sections for a given route (e.g. home). |
| `src/config/` | Site copy, SEO metadata, static lists (models, FAQ, etc.). |
| `src/lib/` | Pure helpers and motion math (no React). |
| `src/types/` | Shared TypeScript contracts. |
| `src/styles/` | Global CSS / Tailwind entry. |
| `src/assets/` | Optional bundled imports (see `README.md`); large images stay in `public/`. |
| `public/` | Static files served by URL. |

## Component map (home)

- **`Page`** (`src/app/page.tsx`) → renders `<HomePage />` only.
- **`HomePage`** (`src/components/pages/HomePage.tsx`) → orders: `EditorialHeroBodyFlow` + hero, curation, consultation strip, differentials, process, styling, social proof, services, FAQ, final CTA.
- **Layout**: `SiteHeader`, `SiteFooter` in root `layout.tsx`.
- **Editorial hero**: `EditorialHeroBodyFlow` + `HeroSection` (`editorialOverlay`) + `BrandScrollMarquee`.

## Logic locations

- **Collection filter**: `src/lib/collection/filter-models.ts` — `filterModelsByAesthetic`; section keeps UI state only.
- **Marquee scroll math**: `src/lib/motion/brand-marquee.ts` — `computeMarqueeTranslateX`, `readSegmentWidthPx`, `formatMarqueeTransform3d`; `BrandScrollMarquee` wires DOM and listeners.
- **Class name helper**: `src/lib/class-names.ts`.

## SEO strategy

- Metadata for the home route lives in `src/config/seo.ts`, exported as `homeMetadata` and consumed in `src/app/layout.tsx`.
- Single object `homePageSeoCopy` inside `seo.ts` feeds `title`, `description`, and `openGraph` (no duplicated strings).
- `alternates.canonical` set to `/`; `openGraph.locale` `pt_BR`.
- **Future**: per-route `generateMetadata`, JSON-LD (`LocalBusiness` / `Organization`), dynamic OG images.

## Expansion points

- CMS or MDX for copy; keep shape in `config` or replace with fetch + cache.
- Extra routes under `app/` with their own `page.tsx` + optional `components/pages/*`.
- i18n: segment `[locale]` + parallel metadata.
- Analytics / consent: add in `layout` or a small `lib/analytics` wrapper without bloating sections.

## Technical notes

- Next.js 16 App Router; some UI is `"use client"` where hooks are required (`ScrollReveal`, `BrandScrollMarquee`, `CollectionCurationSection`, carousel).
- Follow project rules in `AGENTS.md` / Next docs under `node_modules/next/dist/docs/` when upgrading APIs.
