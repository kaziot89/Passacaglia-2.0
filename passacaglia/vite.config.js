import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // bardzo ważne: ścieżka zgodna z nazwą repozytorium
  base: "/Passacaglia-2.0/",
});
