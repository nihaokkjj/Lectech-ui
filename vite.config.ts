import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: 
    [
      vue(),
      tailwindcss(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  css: { 
    preprocessorOptions: {
      scss: {
        // 自动导入变量文件，这样每个 .scss 文件都能使用变量
        additionalData: '@import "@/style.scss";' // 这个路径指向你的全局scss文件，也就是src\style.scss
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
