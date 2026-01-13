// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  site: "https://jcnnll.github.io",
  base: process.env.NODE_ENV === "production" ? "/fem-clipboard/" : "/",

  // Output directory for the build
  outDir: "docs",

  vite: {
    base: process.env.NODE_ENV === "production" ? "/fem-clipboard/" : "/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
