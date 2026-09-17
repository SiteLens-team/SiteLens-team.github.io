# SiteLens Web

Static marketing site and Privacy Policy for the [SiteLens](../Chrome) Chrome extension.

- Stack: Vite + React + TypeScript + [shadcn/ui](https://ui.shadcn.com/) + [AnimateIcons](https://animateicons.in/)
- Deploy: [Render Static Site](https://dashboard.render.com/static/new?onboarding=active)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Publish directory: `dist`

## Render

1. Create a **Static Site** on Render pointing at this `Web` folder (or monorepo root with root directory `Web`).
2. Build command: `npm ci && npm run build`
3. Publish directory: `dist`
4. SPA rewrite: `/*` → `/index.html` (already in `render.yaml`)

After the Chrome Web Store listing is live, set `CHROME_STORE_URL` in `src/lib/constants.ts`.

## Privacy Policy URL

Use `https://<your-render-domain>/privacy` as the Chrome Web Store privacy policy link.
