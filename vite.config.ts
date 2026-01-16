import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // When deploying to a custom domain (e.g., www.aerofix.com), base should be '/'
  // If deploying to username.github.io/repo-name without a custom domain, change this to '/repo-name/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
});