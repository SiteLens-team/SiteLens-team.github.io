import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Emit /privacy/ as a real static page so a direct visit (and the
      // Chrome Web Store privacy-policy link) returns 200 instead of 404.
      input: {
        main: path.resolve(rootDir, "index.html"),
        privacy: path.resolve(rootDir, "privacy/index.html"),
      },
    },
  },
})