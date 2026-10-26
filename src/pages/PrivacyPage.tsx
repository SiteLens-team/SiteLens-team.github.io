import { Link } from "react-router-dom"
import { LockIcon } from "@animateicons/react/lucide"
import { Separator } from "@/components/ui/separator"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { PRODUCT } from "@/lib/constants"

const updated = "October 26, 2026"

export function PrivacyPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-3 text-lens">
            <LockIcon size={32} />
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-muted-foreground">
            For {PRODUCT.fullName} (the “Extension”). Last updated {updated}.
          </p>

          <Separator className="my-10" />

          <div className="prose-privacy space-y-10 text-[1.05rem] leading-relaxed text-foreground">
            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Summary</h2>
              <p className="text-muted-foreground">
                SiteLens analyzes the webpage you are viewing entirely inside your browser. We do not
                operate a backend for the Extension, we do not create accounts, we do not upload page
                content, and we do not use artificial intelligence or third-party LLM services.{" "}
                <strong className="font-medium text-foreground">
                  SiteLens collects nothing and sends nothing.
                </strong>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Who we are</h2>
              <p className="text-muted-foreground">
                This policy covers the Chrome Extension named “{PRODUCT.fullName}” and this marketing
                website that publishes product information and this policy. The Extension is a Manifest
                V3 browser extension that runs locally on your device.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                What the Extension does
              </h2>
              <p className="text-muted-foreground">
                When you start an analysis, SiteLens reads information already available in the current
                browser tab — such as the page DOM, metadata, scripts, images, forms, links, and
                browser performance APIs — and evaluates it with local rules across scored modules
                (technology, SEO, structure, CTAs, images, performance) plus accessibility and security
                checks. Results are shown in an on-page panel and optionally exported by you as JSON or
                CSV files on your own machine. The Extension’s <strong className="font-medium text-foreground">Options</strong>{" "}
                page covers UI language, appearance (system / light / dark), and a local multi-page Site
                Audit. An optional “Send to MCP” action in the panel can push the latest report only to a
                companion process on{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">127.0.0.1</code> that you run
                yourself — never to a SiteLens server.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Data the Extension does <em>not</em> collect
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>No account registration, login, or profile data</li>
                <li>No analytics, advertising identifiers, or usage telemetry</li>
                <li>No crash reporting or remote logging services</li>
                <li>No transmission of page HTML, screenshots, cookies, or browsing history to a server</li>
                <li>No AI / LLM API calls and no remote “smart” analysis</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Data processed locally
              </h2>
              <p className="text-muted-foreground">
                The following may be processed <strong className="font-medium text-foreground">only on
                your device</strong> to provide the Extension’s features:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <strong className="font-medium text-foreground">Page content in the active tab</strong>{" "}
                  — used to detect technology signatures, SEO signals, structure, CTAs, images,
                  performance metrics, accessibility cues, and security hygiene while you analyze that
                  page.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Site Audit crawl data</strong> — when
                  you run a multi-page audit from Options, fetched page summaries and issues stay in
                  extension storage on your device unless you export them.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Optional local MCP push</strong> — only
                  if you choose Send to MCP and a local companion is listening on localhost; the report
                  is not uploaded to any remote SiteLens service.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Network request summaries shown in
                  the popup</strong>{" "}
                  — read from the page you are on and kept in memory for that tab only. They disappear
                  when the tab closes.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Options preferences</strong> — language
                  and appearance (system / light / dark) set in Options and stored with{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm">chrome.storage.local</code>{" "}
                  on your device.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Exported reports</strong> — created only
                  when you choose Export. Files are saved through your browser’s download flow to a
                  location you control.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Permissions</h2>
              <p className="text-muted-foreground">
                The Extension requests the minimum permissions needed for local analysis:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm">storage</code> — to save
                  language and theme preferences locally
                </li>
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm">activeTab</code> — to work with
                  the tab you open SiteLens on
                </li>
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm">&lt;all_urls&gt;</code> host
                  access — so you can analyze arbitrary http(s) pages you navigate to; SiteLens does
                  not use this to browse or upload sites in the background
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                This marketing website
              </h2>
              <p className="text-muted-foreground">
                This static website is hosted to present SiteLens and publish this Privacy Policy. It
                does not provide Extension analysis features. Hosting providers may generate standard
                server access logs (for example IP address, user agent, and request time) as part of
                delivering static files. The SiteLens Extension itself does not receive those logs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Children’s privacy
              </h2>
              <p className="text-muted-foreground">
                The Extension is not directed at children under 13, and we do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Changes to this policy
              </h2>
              <p className="text-muted-foreground">
                If the Extension’s data practices change — for example if a future version introduced
                optional network features — this policy will be updated before those changes ship, and
                the “Last updated” date above will change.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="text-muted-foreground">
                Because the Extension does not collect personal data on a server, there is typically
                nothing to access, correct, or delete remotely. For questions about this policy or the
                Extension, use the support contact listed on the Chrome Web Store listing once the
                Extension is published.
              </p>
            </section>
          </div>

          <Separator className="my-10" />

          <p className="text-sm text-muted-foreground">
            <Link to="/" className="font-medium text-foreground underline-offset-4 hover:underline">
              ← Back to {PRODUCT.name}
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
