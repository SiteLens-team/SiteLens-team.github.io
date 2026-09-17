/** Chrome Web Store listing URL — set when published. Empty = show coming-soon CTA. */
export const CHROME_STORE_URL = ""

export const PRODUCT = {
  name: "SiteLens",
  fullName: "SiteLens — Website & SEO Analyzer",
  version: "1.0.1",
  tagline:
    "One click to analyze any page: tech stack, SEO, structure, CTAs, images and performance.",
  privacyNote:
    "Runs entirely in your browser: no AI, no server, no upload, no account.",
} as const

export const MODULES = [
  {
    id: "tech",
    question: "What tech does this site use?",
    label: "Technology",
    blurb: "Frameworks, CMS, CDN, analytics — with the evidence that proved each hit.",
    image: "/images/02-tech-stack-1280x800.png",
  },
  {
    id: "seo",
    question: "Where is the SEO broken?",
    label: "SEO",
    blurb: "Titles, meta, headings, robots and schema checks you can act on.",
    image: "/images/03-seo-audit-1280x800.png",
  },
  {
    id: "structure",
    question: "How is the page organized?",
    label: "Structure",
    blurb: "Hero, features, forms and sections mapped from the live DOM.",
    image: "/images/01-overview-1280x800.png",
  },
  {
    id: "cta",
    question: "How are the CTAs designed?",
    label: "CTA",
    blurb: "Conversion paths by position — hero, mid-page, footer, outbound.",
    image: "/images/04-calls-to-action-1280x800.png",
  },
  {
    id: "images",
    question: "Which images need optimizing?",
    label: "Images",
    blurb: "Missing alt text, heavy files, and dimension issues — locate each one.",
    image: "/images/01-overview-1280x800.png",
  },
  {
    id: "performance",
    question: "How fast is the page?",
    label: "Performance",
    blurb: "A quick local snapshot of Web Vitals and resource weight — not Lighthouse.",
    image: "/images/05-performance-1280x800.png",
  },
] as const
