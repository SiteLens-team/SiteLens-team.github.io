# SiteLens marketing site

Static landing + Privacy Policy for the SiteLens Chrome extension.

- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui + AnimateIcons
- Deploy: [GitHub Pages](https://pages.github.com/) via `.github/workflows/pages.yml` → https://sitelens-team.github.io/

## Develop

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm preview
```

## Chrome Web Store CTA

`CHROME_STORE_URL` in `src/lib/constants.ts` is set to the live listing, so the header and hero CTAs render **Add to Chrome**. If it is ever emptied, both surfaces fall back to a disabled **Coming soon on Chrome Web Store** button.

## Privacy URL

Use `https://sitelens-team.github.io/privacy/` (trailing slash) as the Chrome Web Store privacy policy link. `/privacy/` is built as a real static page (`privacy/index.html`), so it returns `200` instead of relying on the SPA 404 fallback. GitHub Pages redirects `/privacy` → `/privacy/`.

## Extension surfaces called out on the site

- **Options** — language, appearance (auto / light / dark), and Site Audit
- **Site Audit** — multi-page crawl with JSON / CSV / HTML / sitemap export

