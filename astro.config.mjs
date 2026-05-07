// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      minify: true,
    },
    plugins: [tailwindcss()],
  },
  output: 'static',           // or 'hybrid' if you need some SSR
});