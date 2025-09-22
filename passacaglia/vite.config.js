import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// automatycznie ustawia base w zależności od środowiska
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/Passacaglia-2.0/" : "/",
}));
