import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://willjr20.github.io',
  base: '/astro-website',
  integrations: [tailwind()]
});