import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/BonusZerodha/my-project/dist/index.html",
  plugins: [react()],
  assetsInclude: ['**/*.csv', '**/*.xlsx'],
})
