import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [svgLoader(), vue()],
  mode: process.env.NODE_ENV,
  server: {
    host: '0.0.0.0',
    port: 4200,
    strictPort: true,
    watch: { usePolling: true },
  },
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, '..', '..', 'dist', 'website'),
    sourcemap: true,
    minify: process.env.NODE_ENV === 'production',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
