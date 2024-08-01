import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import html from "remark-html";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://pyarya.pages.dev',
  integrations: [preact(), react()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [html],
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  output: "hybrid",
  adapter: cloudflare()
});