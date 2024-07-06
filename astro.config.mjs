import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://pyarya.pages.dev',
  integrations: [preact()],
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
