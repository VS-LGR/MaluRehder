# Project definition — Malu Rehder (ótica institucional)

Approved baseline for scope and architecture. Structural changes after merge require an updated definition and explicit approval.

## 1. Product

| Field | Definition |
|--------|------------|
| **Objective** | Institutional site for a premium eyewear curator, driving qualified leads to WhatsApp consultation and reinforcing brand authority. |
| **Audience** | Adults seeking curated frames, aesthetic guidance, and high-trust fitting—not mass retail. |
| **Problem solved** | Reduces choice overload; positions expertise, curation, and personalized styling as the differentiator. |
| **Site type** | Institutional with landing-style conversion (repeated primary CTA, scroll narrative). |
| **Market segment** | Hybrid **authority + conversion** (adjacent to “health professional” trust + “luxury retail” tone). |

## 2. Conversion model

- **Primary CTA**: Schedule consultation (WhatsApp), aligned across header, hero, strips, and final CTA.
- **Secondary CTA**: Explore curation (`#curadoria`) where applicable.
- **Trust / authority**: Social proof section, process steps, FAQ, signature services.
- **Single `h1` per page**: Hero title only; all other blocks use `h2`/`h3` as appropriate.

## 3. Canonical home sections (order)

1. Editorial hero (full-bleed art + overlay hero + brand marquee)
2. Collection curation (`#curadoria`)
3. Consultation strip
4. Differentials (`#diferenciais`)
5. Process (`#consultoria` — anchor id on process block; header may link here)
6. Styling consultation
7. Social proof
8. Signature services
9. FAQ
10. Final CTA

## 4. Out of scope (current phase)

- E-commerce checkout, cart, or dynamic inventory.
- CMS integration, blog, or multi-language routes (structure may be prepared; not implemented).
- New npm dependencies without technical justification.
- Cosmetic-only refactors unrelated to agreed architecture or bugs.

## 5. Technical stack (fixed)

Next.js App Router, TypeScript, Tailwind CSS, structured SEO metadata, full responsiveness. Content and copy live in `src/config` where possible; reusable logic in `src/lib`.

## 6. Naming and language

- Code and file names: **English** (semantic, stable).
- User-facing copy: **pt-BR** (marketing and UI strings in config).
