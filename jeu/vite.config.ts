import { defineConfig } from "vite";

// The game reads the book's engine (../src/moteur.js) and story (../histoires/malvoran.json) from livre-hero itself:
// the book stays the one source of the story.
export default defineConfig({
  base: "./",
  server: { fs: { allow: [".."] }, host: true },
  build: { outDir: "dist", chunkSizeWarningLimit: 2000, assetsInlineLimit: 0 },
});
