import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      shared: '/src/shared',
      pages: '/src/pages',
      assets: '/src/assets',
      components: '/src/components',
      store: '/src/store',
      selectors: '/src/store/selectors',
      services: '/src/services',
      types: '/src/types',
      api: '/src/api',
    },
  },
});
