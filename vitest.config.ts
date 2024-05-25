import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue' // Relevant for test path
import { resolve } from 'path' // Relevant for test path

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts'
  },
  /* Relevant for test path */
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  }
})
