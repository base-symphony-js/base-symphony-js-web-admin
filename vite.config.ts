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
      '@hooks': resolve(__dirname, './src/hooks'),
      '@interfaces': resolve(__dirname, './src/interfaces'),
      '@languages': resolve(__dirname, './src/languages'),
      '@pages': resolve(__dirname, './src/pages'),
      '@redux': resolve(__dirname, './src/redux'),
      '@routes': resolve(__dirname, './src/routes'),
      '@services': resolve(__dirname, './src/services'),
      '@tailwind.config.ts': resolve(__dirname, './tailwind.config.ts'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config.js'],
  },
  plugins: [
    react(),
    svgr(),
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.slice(-3) === '.md') {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`
        }
      },
    },
  ],
})
