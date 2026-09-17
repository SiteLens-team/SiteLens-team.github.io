import { Link, NavLink } from "react-router-dom"
import { ScanIcon } from "@animateicons/react/lucide"
import { buttonVariants } from "@/components/ui/button"
import { CHROME_STORE_URL, PRODUCT } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          <img src="/icons/icon_64.png" alt="" width={28} height={28} className="size-7 rounded-md" />
          <span>{PRODUCT.name}</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              cn(
                "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                isActive && "bg-muted text-foreground"
              )
            }
          >
            Privacy
          </NavLink>
          {CHROME_STORE_URL ? (
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "default" }), "gap-1.5")}
            >
              <ScanIcon size={16} />
              Add to Chrome
            </a>
          ) : (
            <span className={cn(buttonVariants({ variant: "secondary", size: "default" }), "opacity-70")}>
              Coming soon
            </span>
          )}
        </nav>
      </div>
    </header>
  )
}
