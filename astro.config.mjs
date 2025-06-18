import { defineConfig } from 'astro/config';
import html from "remark-html";

// https://astro.build/config
export default defineConfig({
  site: 'https://pyarya.pages.dev',
  integrations: [],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [html],
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
//  output: "hybrid"
//  adapter: cloudflare()
});
