import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    https: true,
    hmr: {
      host: "www.find-a-date.com",
      port: 3000,
      protocol: "wss",
    },
  },
})
