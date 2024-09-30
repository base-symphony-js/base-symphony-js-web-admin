import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets'),
      '@common': resolve(__dirname, './src/common'),
      '@components': resolve(__dirname, './src/components'),
      '@config': resolve(__dirname, './src/config'),
      '@interfaces': resolve(__dirname, './src/interfaces'),
      '@pages': resolve(__dirname, './src/pages'),
      '@redux': resolve(__dirname, './src/redux'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@routes': resolve(__dirname, './src/routes'),
      '@services': resolve(__dirname, './src/services'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config.js'],
  },
  plugins: [react(), svgr()],
})
