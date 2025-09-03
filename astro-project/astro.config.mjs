// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

import vercel from '@astrojs/vercel';



// https://astro.build/config
export default defineConfig({
  site: "https://astro-devs-kqescg16i-jonadevs-projects.vercel.app",
  base: "/",
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()],
});