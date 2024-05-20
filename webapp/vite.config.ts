import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import { DateTime } from "luxon";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    proxy: {
      "/api": "http://127.0.0.1:5000",
    },
  },
  plugins: [
    react(),
    {
      name: "updateSiteMap",
      buildStart(options) {
        if (command === "build") {
          const sitemap = fs.readFileSync("./sitemap.xml", "utf-8");

          fs.writeFileSync(
            "./public/sitemap.xml",
            sitemap.replaceAll("$TODAY", DateTime.now().toFormat("yyyy-MM-dd"))
          );
        }
      },
    },
  ],
}));
