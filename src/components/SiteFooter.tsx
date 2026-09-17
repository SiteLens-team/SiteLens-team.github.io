import { Link } from "react-router-dom"
import { PRODUCT } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <img src="/icons/icon_64.png" alt="" width={20} height={20} className="size-5 rounded" />
          <span>
            {PRODUCT.name} · v{PRODUCT.version}
          </span>
        </div>
        <Link
          to="/privacy"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
