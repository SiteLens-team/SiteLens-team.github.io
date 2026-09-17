# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Vite + React + TypeScript + Tailwind + shadcn/ui + @animateicons/react, built as a static site for [Render Static Sites](https://dashboard.render.com/static/new?onboarding=active). Chosen to match the user's binding UI constraints (shadcn/ui + AnimateIcons) and Chrome Web Store–friendly multi-page static output (`/` + `/privacy`).

## Users

Primary: web developers, SEO practitioners, and marketers who open an arbitrary page in Chrome and need a fast local read of tech stack, SEO, structure, CTAs, images, and performance — without creating an account or sending page data anywhere.

Secondary: Chrome Web Store reviewers and privacy-conscious visitors who need a clear privacy policy URL for listing.

## Product Purpose

SiteLens is a Chrome extension that analyzes the current page entirely in the browser. The marketing site exists to explain that offer, prove it with real store screenshots, drive Chrome Web Store install, and publish an accurate privacy policy.

Success: a visitor understands in one viewport that analysis is local (no AI, no server, no account), sees the six analysis dimensions with real product imagery, and can install or read the privacy policy.

## Positioning

One-click page analysis that runs entirely on-device: tech stack, SEO, structure, CTAs, images, and performance — with evidence you can verify, export as JSON/CSV, and locate on the live page. Differentiator the site must not blur: **no AI, no upload, no account, no telemetry.**

## Operating Context

- Chrome extension (Manifest V3): popup entry → injected floating panel for full report; Options for language/theme/about.
- Permissions: `storage`, `activeTab`, host access to `<all_urls>` for page analysis only.
- Local prefs only in `chrome.storage.local` (locale, theme). Analysis reports stay in-tab memory unless the user exports.
- Chrome Web Store listing assets live at `../Chrome/store-assets/final/`.

## Capabilities and Constraints

**Extension capabilities (facts for marketing + privacy):**

- Six modules: Technology, SEO, Structure, CTA, Images, Performance
- Website Score + per-module scores; key issues; hover/click locate on page
- Export full report JSON/CSV; 7 languages; light/dark/system theme
- Fully local rule-based analysis — no LLM, no backend

**Site constraints:**

- Static hosting only (no server runtime)
- Must include Privacy Policy suitable for Chrome Web Store
- Must use real store screenshots / promo art; do not invent customers, benchmarks, or store URLs that do not exist
- Do not claim AI, cloud sync, accounts, or telemetry

**Open / assumed:**

- ASSUMED: Marketing site primary language is English (Chrome Web Store default). Chinese product docs remain source of truth for accuracy.
- ASSUMED: Chrome Web Store listing URL is not yet published; CTA may use a placeholder `#` or “Coming soon” until a real URL is provided.
- ASSUMED: Contact for privacy inquiries: omit email until provided; state data is not collected so no request channel is required for deletion.

## Brand Commitments

- Product name: **SiteLens**
- Extension full name: **SiteLens — Website & SEO Analyzer**
- Tagline (exact): **One click to analyze any page: tech stack, SEO, structure, CTAs, images and performance.**
- Manifest description: One-click page analysis: tech stack, SEO, structure, CTAs, images and performance. Fully local — no AI, no server, no account.
- Privacy one-liner: Runs entirely in your browser: no AI, no server, no upload, no account.
- Binding UI libraries requested by product owner: [shadcn/ui](https://ui.shadcn.com/), [AnimateIcons](https://animateicons.in/)
- Real imagery: `../Chrome/store-assets/final/` (screenshots + promo marquee + promo tile); extension icons under `../Chrome/src/assets/icons/`

## Evidence on Hand

- Product docs: `../Chrome/docs/SiteLens-产品定位.md`, feature/copy docs
- Store assets: `01-overview` … `05-performance` (1280×800 JPEG), `07-promo-marquee-1400x560`. Promo tile / promo video exist in Chrome store assets but are not used on this site.
- No customer testimonials, press, pricing, or live Chrome Web Store URL — do not fabricate

## Product Principles

1. **Local is the product** — Privacy and on-device analysis are the headline, not a footnote.
2. **Six questions, not a feature dump** — Lead with what the visitor learns about a page.
3. **Show the real UI** — Use store screenshots; never fake dashboards or AI chat.
4. **Claims must match the extension** — Every privacy or capability statement must be true of Manifest V3 permissions and local-only behavior.
5. **Install is the only conversion** — One primary CTA toward Chrome Web Store (or clear “coming soon”).

## Accessibility & Inclusion

Marketing site: semantic landmarks, keyboard-reachable CTAs, sufficient contrast, respect `prefers-reduced-motion` (AnimateIcons is reduced-motion aware). Privacy policy must be readable without interactive chrome.
