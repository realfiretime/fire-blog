// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://firetime.me',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/sites': '/blog/sites',
		'/sites-directory': '/blog/sites',
		'/yt': 'https://youtube.com/@firetime.official'
		'/roadmap': 'https://firetime.me/blog/roadmap',
  },
});
