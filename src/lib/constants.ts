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

export const MODULES = [
  {
    id: "tech",
    question: "What tech does this site use?",
    blurb: "Frameworks, CMS, CDN, analytics — with the evidence that proved each hit.",
  },
  {
    id: "seo",
    question: "Where is the SEO broken?",
    blurb: "Titles, meta, headings, robots and schema checks you can act on.",
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
