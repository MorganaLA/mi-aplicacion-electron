import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/assets/react.svg'], // Agrega la ruta correcta de tu archivo SVG
    },
  },
})
