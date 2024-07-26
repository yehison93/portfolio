import { defineConfig } from "astro/config";

// eslint-disable-next-line import/no-unresolved
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
});
