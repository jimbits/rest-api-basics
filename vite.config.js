import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  server: {
    port: 5000,
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        read: resolve(root, "pages", "read.html"),
        create: resolve(root, "pages", "create.html"),
        create: resolve(root, "update", "update.html"),
      },
    },
  },
  preview: {
    port: 5550,
  },
});
