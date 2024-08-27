import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',       // Treat all .js files as .jsx
    include: /\.js$/,    // Include .js files
  },
})
