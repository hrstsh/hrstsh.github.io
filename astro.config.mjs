import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hrstsh.github.io',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => true,
      customPages: [],
    }),
  ],
});
