import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // ...otros alias...
      'bootstrap/dist/css/bootstrap.css': require.resolve('bootstrap/dist/css/bootstrap.css'),
    },
  },

})
