/** Chrome Web Store listing URL — set when published. Empty = show coming-soon CTA. */
export const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/sitelens-%E2%80%94-website-seo-an/jjmmmpgikmdibpffiphnbaopgpafpgih"

export const PRODUCT = {
  name: "SiteLens",
  fullName: "SiteLens — Website & SEO Analyzer",
  tagline:
    "One click to analyze any page: tech stack, SEO, structure, CTAs, images and performance.",
  privacyNote:
    "Runs entirely in your browser: no AI, no server, no upload, no account.",
} as const

/** Six modules that feed the Website Score. */
export const MODULES = [
  {
    id: "tech",
    question: "What tech does this site use?",
    blurb: "Frameworks, CMS, CDN, analytics — with the evidence that proved each hit.",
  },
  {
    id: "seo",
    question: "Where is the SEO broken?",
    blurb:
      "Titles, meta, headings, robots, schema validation, hreflang, and site files (robots / sitemap / llms).",
  },
  {
    id: "structure",
    question: "How is the page organized?",
    blurb: "Hero, features, forms and sections mapped from the live DOM.",
  },
  {
    id: "cta",
    question: "How are the CTAs designed?",
    blurb: "Conversion paths by position — hero, mid-page, footer, outbound.",
  },
  {
    id: "images",
    question: "Which images need optimizing?",
    blurb: "Missing alt text, heavy files, and dimension issues — locate each one.",
  },
  {
    id: "performance",
    question: "How fast is the page?",
    blurb: "A quick local snapshot of Web Vitals and resource weight — not Lighthouse.",
  },
] as const

/** Display-only modules — shown in the panel, not folded into Website Score. */
export const EXTRA_MODULES = [
  {
    id: "a11y",
    question: "Is the page accessible?",
    blurb: "Lang attribute, control labels, button names, heading order, and ARIA roles.",
  },
  {
    id: "security",
    question: "Any security hygiene issues?",
    blurb: "HTTPS / mixed content, response security headers, and X-Robots-Tag signals.",
  },
] as const

/**
 * The Options surface, broken into its three first-class capabilities.
 * Shown in its own section — Options is not a buried setting, it's the
 * extension's control room.
 */
export const OPTIONS = [
  {
    id: "language",
    title: "Language",
    blurb:
      "Switch the whole panel to any of 7 languages — English, Chinese, French, Portuguese, German, Italian, Spanish — without leaving the page.",
  },
  {
    id: "appearance",
    title: "Appearance",
    blurb:
      "Auto, light, or dark. The settings panel follows your OS preference or a fixed choice you set once.",
  },
  {
    id: "audit",
    title: "Site Audit",
    blurb:
      "Crawl a whole site — not just one page — from the Service Worker, seeded by the sitemap so single-page apps are covered too.",
    exports: ["JSON", "CSV", "HTML", "Sitemap"],
  },
] as const

/** Secondary capabilities in the panel (and related UX). */
export const HIGHLIGHTS = [
  {
    id: "locate",
    title: "Locate on page",
    blurb: "Hover to preview, click to scroll and highlight the real element.",
  },
  {
    id: "export",
    title: "Export JSON / CSV",
    blurb: "Download the full report when you choose — files stay on your machine.",
  },
  {
    id: "languages",
    title: "7 languages",
    blurb: "English, Chinese, French, Portuguese, German, Italian, and Spanish — set in Options.",
  },
] as const
