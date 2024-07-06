import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import html from "remark-html";


// https://astro.build/config
export default defineConfig({
  site: 'https://pyarya.pages.dev',
  integrations: [preact()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [
      html,
    ],
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
