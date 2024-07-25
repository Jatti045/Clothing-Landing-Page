import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Clothing-Landing-Page/",
  server: {
    historyApiFallback: true,
  },
});
