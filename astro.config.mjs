import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ---- GitHub Pages settings ----
  // CASE A — user/org site, repo named exactly "ubg2028.github.io":
  //   site: 'https://ubg2028.github.io',
  //   (no `base` needed)
  //
  // CASE B — project site, any other repo name (most common):
  //   site: 'https://ubg2028.github.io',
  //   base: '/<repo-name>/',
  //
  // Using a custom domain (CNAME)? Set `site` to your domain and drop `base`.
  site: 'https://ubg2028.github.io',
  base: '/sam',
  output: 'static',
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
