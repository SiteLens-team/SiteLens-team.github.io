import { Link } from "react-router-dom"
import {
  AccessibilityIcon,
  CpuIcon,
  DownloadIcon,
  GlobeIcon,
  HardDriveIcon,
  ImageIcon,
  LayersIcon,
  LocateIcon,
  LockIcon,
  MapIcon,
  MousePointerClickIcon,
  ScanIcon,
  SearchIcon,
  ShieldCheckIcon,
  TerminalIcon,
  ZapIcon,
} from "@animateicons/react/lucide"
import { Button, buttonVariants } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import {
  CHROME_STORE_URL,
  EXTRA_MODULES,
  HIGHLIGHTS,
  MODULES,
  PRODUCT,
} from "@/lib/constants"
import { cn } from "@/lib/utils"

const moduleIcons = {
  tech: CpuIcon,
  seo: SearchIcon,
  structure: LayersIcon,
  cta: MousePointerClickIcon,
  images: ImageIcon,
  performance: ZapIcon,
} as const

const extraModuleIcons = {
  a11y: AccessibilityIcon,
  security: ShieldCheckIcon,
} as const

const highlightIcons = {
  locate: LocateIcon,
  export: DownloadIcon,
  languages: GlobeIcon,
  "site-audit": MapIcon,
  mcp: TerminalIcon,
} as const

function InstallCta({ className, size = "lg" }: { className?: string; size?: "default" | "lg" }) {
  if (CHROME_STORE_URL) {
    return (
      <a
        href={CHROME_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ size }), "gap-2", className)}
      >
        <ScanIcon size={18} />
        Add to Chrome
      </a>
    )
  }

  return (
    <Button size={size} variant="secondary" disabled className={className}>
      Coming soon on Chrome Web Store
    </Button>
  )
}

export function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — one composition: brand, headline, line, CTAs, dominant image */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="lens-glow pointer-events-none absolute left-1/2 top-24 size-[36rem] -translate-x-1/2 rounded-full bg-lens-soft blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-6 pt-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-end lg:gap-12 lg:pt-20">
            <div className="max-w-xl">
              <p className="animate-rise font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {PRODUCT.name}
              </p>
              <h1 className="animate-rise animate-rise-delay-1 mt-5 text-balance text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                Understand any page in one click
              </h1>
              <p className="animate-rise animate-rise-delay-2 mt-4 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {PRODUCT.privacyNote}
              </p>
              <div className="animate-rise animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
                <InstallCta />
                <Link
                  to="/privacy"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  <LockIcon size={16} />
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="animate-rise animate-rise-delay-2 relative">
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_24px_60px_-28px_oklch(0.3_0.04_240_/_0.45)]">
                <img
                  src="/images/07-promo-marquee-1400x560.jpg"
                  alt="SiteLens analyzing a live webpage with scores for technology, SEO, structure, CTAs, images and performance, plus accessibility and security checks"
                  width={1400}
                  height={560}
                  className="hero-shot block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Six scored questions + display modules */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Six scored answers. One local scan.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            SiteLens scores the six things you actually need to know about the page in front of you —
            with evidence, module scores, and click-to-locate highlights. Accessibility and security
            checks show up alongside them without changing the Website Score formula.
          </p>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {MODULES.map((mod) => {
              const Icon = moduleIcons[mod.id]
              return (
                <li
                  key={mod.id}
                  className="group flex gap-4 rounded-2xl border border-transparent bg-card/60 px-4 py-4 transition-colors hover:border-border hover:bg-card"
                >
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-lens-soft text-lens">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-medium text-foreground">{mod.question}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{mod.blurb}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-10 rounded-2xl border border-border/80 bg-card/40 p-5 sm:p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Also in the panel · display only
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {EXTRA_MODULES.map((mod) => {
                const Icon = extraModuleIcons[mod.id]
                return (
                  <li key={mod.id} className="flex gap-4 rounded-xl bg-background/70 px-3 py-3">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-lens-soft text-lens">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-heading text-base font-medium text-foreground">{mod.question}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{mod.blurb}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* Also included */}
        <section className="border-y border-border/70 bg-card/30 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Also included
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Beyond the scored scan: locate and export on every page, seven UI languages, a whole-site
              crawl in Options, and an optional local MCP bridge for agents.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {HIGHLIGHTS.map((item) => {
                const Icon = highlightIcons[item.id]
                return (
                  <li
                    key={item.id}
                    className="rounded-2xl border border-border/70 bg-background/80 px-4 py-4"
                  >
                    <div className="mb-3 text-lens">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading text-base font-medium text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* Product proof from store assets */}
        <section className="border-b border-border/70 bg-card/40 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              See it on a real page
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Product screenshots from the listing assets — the same UI that runs in your browser.
              Newer accessibility and security panels ship in the extension; these frames show the
              core scored modules.
            </p>

            <div className="mt-12 grid gap-8">
              {[
                {
                  src: "/images/01-overview-1280x800.jpg",
                  title: "Website Score + module answers",
                  caption:
                    "Overview leads with the score, then the six scored answers and key issues. Accessibility and security appear as display modules beside them.",
                },
                {
                  src: "/images/02-tech-stack-1280x800.jpg",
                  title: "Technology with evidence",
                  caption: "Every detection ships with the raw signal that proved it.",
                },
                {
                  src: "/images/03-seo-audit-1280x800.jpg",
                  title: "SEO checks you can fix",
                  caption:
                    "Fail / warn / pass status with titles, meta, headings, schema, hreflang, and site-file detail from the live page.",
                },
                {
                  src: "/images/04-calls-to-action-1280x800.jpg",
                  title: "CTA conversion paths",
                  caption: "Where buttons sit, what they say, and where they send people.",
                },
                {
                  src: "/images/05-performance-1280x800.jpg",
                  title: "Quick performance check",
                  caption: "Local Web Vitals and resource weight — a fast read, not a Lighthouse report.",
                },
              ].map((shot) => (
                <figure key={shot.src} className="grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[0_18px_40px_-24px_oklch(0.3_0.04_240_/_0.4)]">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">{shot.title}</h3>
                    <p className="mt-2 text-muted-foreground">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Local privacy commitments */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Privacy is the product
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Deliberately no AI, no account, and no server. Everything you see is derived from rules
            running against the page you opened — including optional Site Audit crawls and Send to MCP,
            which stay on your machine.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HardDriveIcon,
                title: "On your machine",
                body: "Analysis runs in the tab. Page content never leaves the device.",
              },
              {
                icon: ShieldCheckIcon,
                title: "No telemetry",
                body: "No analytics, no crash reports, no remote feature flags.",
              },
              {
                icon: LocateIcon,
                title: "Locate on page",
                body: "Hover to preview, click to scroll and highlight the real element.",
              },
              {
                icon: DownloadIcon,
                title: "Export when you choose",
                body: "Full JSON or CSV downloads stay under your control.",
              },
            ].map((item) => (
              <li key={item.title}>
                <div className="mb-3 text-lens">
                  <item.icon size={28} />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link to="/privacy" className="text-sm font-medium text-lens underline-offset-4 hover:underline">
              Read the full Privacy Policy →
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border/70 bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">{PRODUCT.fullName}</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/75">{PRODUCT.tagline}</p>
            </div>
            <InstallCta className="bg-background text-foreground hover:bg-background/90" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
