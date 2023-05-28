import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Dhanush-git.github.io',
  base: '/3amsessions',
  integrations: [tailwind()]
});