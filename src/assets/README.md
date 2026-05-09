# `src/assets`

## Purpose

Reserved for **source or bundled static assets** that belong in the TypeScript module graph (e.g. small SVGs imported from components, co-located design exports).

## What lives in `public/` instead

Large raster images referenced by URL (e.g. hero WebP, responsive `picture` sources) stay under **`public/`** so Next.js can serve them efficiently without bundling them as JS modules.

Current hero art: `public/Hero+Body*.webp`.

## Rule of thumb

- **URL path in markup** (`src="/file.webp"`): use `public/`.
- **`import icon from '@/assets/...'`** when you need tree-shaking or type-safe imports: use `src/assets/`.
