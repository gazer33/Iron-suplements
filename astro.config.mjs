// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-supplement-store.com',
  integrations: [tailwind()],
  vite: {
    define: {
      'import.meta.env.GOOGLE_MAPS_KEY': JSON.stringify(process.env.GOOGLE_MAPS_KEY)
    }
  }
});
