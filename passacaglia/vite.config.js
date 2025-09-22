import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Passacaglia-2.0/", // dokładnie tak samo jak w homepage
});
