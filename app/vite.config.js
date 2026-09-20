import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works from the repo root on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist', emptyOutDir: true },
})
