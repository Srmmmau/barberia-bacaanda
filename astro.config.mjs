// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bacaandabarberia.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    sitemap({
      // No indexar las páginas de error 404 en el sitemap
      filter: (page) => !page.includes('/404'),
    }),
  ],
  redirects: {
    '/': '/es/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
