import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/VelMakarova/test_pages_deploy.git',
  server: {
    cors: {
      origin: 'https://velmakarova.github.io/test_pages_deploy/'
    },
  },
  plugins: [react()],
})
