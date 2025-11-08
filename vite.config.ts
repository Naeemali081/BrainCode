import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', '@radix-ui/react-slot', 'class-variance-authority'],
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: true,
    // Optimize for modern browsers
    target: 'esnext',
    // Reduce bundle size
    minify: 'esbuild',
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
  // Enable compression
  esbuild: {
    drop: ['console', 'debugger'], // Remove console and debugger in development too
  },
})
