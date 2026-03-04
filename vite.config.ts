import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/deduction-naturelle/',
  root: '.',
  build: {
    outDir: 'dist',
  },
})
