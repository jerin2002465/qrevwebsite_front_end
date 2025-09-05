import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    host: "0.0.0.0", // Allow access from local IP
    port: 5173, // Optional: change if needed
  },
});
