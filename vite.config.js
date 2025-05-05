import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: './postcss.config.js'
    },
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        open: true
    }
})