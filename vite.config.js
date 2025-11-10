// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: false }) // disable auto-open, run manually when needed
  ],
  build: {
    sourcemap: false, // faster builds, smaller files
    chunkSizeWarningLimit: 1000, // prevent warning at 500kB
    rollupOptions: {
      output: {
        // Split vendor libraries to reduce initial load
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
