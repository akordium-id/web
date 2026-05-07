// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',           // or 'hybrid' if you need some SSR
  adapter: cloudflare({
    // platformProxy: { ... } if needed for local dev
  }),
});