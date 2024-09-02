// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Backend server URL
        changeOrigin: true,
        secure: false,
        // Optionally rewrite paths if needed
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
      "/auth": {
        target: "http://localhost:3000", // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
