// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://firetime.me',
	integrations: [mdx(), sitemap()],
	redirects: {
	'/sites': 'https://firetime.me/blog/sites'
	'/sites-directory': '/blog/sites'
  },
});
