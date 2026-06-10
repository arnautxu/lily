import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// 100% static site — no Vercel adapter needed (Vercel autodetects `astro build`).
export default defineConfig({
  // PLACEHOLDER: substitueix pel domini final quan el tinguis.
  site: 'https://lidiacaldera.com',
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  build: { inlineStylesheets: 'auto' },
});
