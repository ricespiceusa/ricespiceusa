import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    {
      name: 'copy-404',
      writeBundle() {
        // This will run after the bundle is written
        const fs = require('fs');
        const sourceFile = resolve(__dirname, 'public', '404.html');
        const destFile = resolve(__dirname, 'dist', '404.html');
        
        if (fs.existsSync(sourceFile)) {
          fs.copyFileSync(sourceFile, destFile);
          console.log('✅ 404.html copied to dist folder');
        }
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}) 