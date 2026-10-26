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

`CHROME_STORE_URL` in `src/lib/constants.ts` is empty until the listing is live — the site shows **Coming soon**. Set a real store URL there when the extension is published.

## Privacy URL

Use `https://sitelens-team.github.io/privacy` as the Chrome Web Store privacy policy link once you submit the listing.
