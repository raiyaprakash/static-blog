import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://static-blog-380.pages.dev',
  integrations: [sitemap()],
});
