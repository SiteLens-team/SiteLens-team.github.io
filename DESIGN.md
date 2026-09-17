# Design

<!-- impeccable:design-schema 1 -->

## World

Daylight desk for a local inspection tool: cool paper ground, graphite type, cyan “lens” focus. Not purple SaaS, not cream editorial.

## Type

- Display / headings: Bricolage Grotesque Variable
- Body: Source Sans 3 Variable

## Color

- Background: cool near-white with soft cyan/slate radial atmosphere
- Foreground: deep cool graphite
- Accent (`--lens`): cyan-teal for icons and focus moments
- Components: shadcn/ui tokens remapped to the above

## Motion

- Hero: rise-in blur settle on copy; slow marquee drift on promo art; lens glow breathe
- Icons: AnimateIcons path animation on hover/focus
- Respects `prefers-reduced-motion`

## Surfaces

- `/` — Persuade landing with store screenshots as proof
- `/privacy` — Read privacy policy for Chrome Web Store

## Assets

Raster proof from `Chrome/store-assets/final/` copied to `public/images/`. Extension icons in `public/icons/`.
