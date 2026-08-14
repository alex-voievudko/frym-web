// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://frym.app',
	integrations: [icon(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Instrument Sans',
			cssVariable: '--font-sans',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-mono',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
		},
	],
});
