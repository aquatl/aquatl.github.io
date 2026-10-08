import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aquatl.github.io",
  base: "/",
  output: "static",
  trailingSlash: "always",
});