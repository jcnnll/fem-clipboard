// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  site: "https://jcnnll.github.io",
  base: "/fem-clipboard/",

  // Output directory for the build
  outDir: "docs",

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
