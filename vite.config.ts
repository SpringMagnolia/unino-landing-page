import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import autoprefixer from "autoprefixer"

// https://vite.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
    },
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
