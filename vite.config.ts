import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // yarn add @types/node --dev
//ant design 自动按需加入引入插件
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    //ant design 自动按需加入配置
    Components({
    resolvers: [VantResolver()],
  }), ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
