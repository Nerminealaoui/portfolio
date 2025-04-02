import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Assurez-vous d'importer le plugin React
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()], // Ajoute le support de React
});
