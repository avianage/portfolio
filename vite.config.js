import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,  // Increase the limit to 2MB
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
  },
})