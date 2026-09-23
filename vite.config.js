import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' → relative asset URLs, required for GitHub Pages project sites
export default defineConfig({
  plugins: [react()],
  base: './',
});
