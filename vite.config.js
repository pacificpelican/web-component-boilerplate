import { cp } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  publicDir: false,
  build: {
    rolldownOptions: {
      input: {
        main: resolve(root, "index.html"),
        template0: resolve(root, "template0.html")
      }
    }
  },
  plugins: [{
    name: "copy-static-assets",
    apply: "build",
    async writeBundle(options) {
      await cp(resolve(root, "static"), resolve(options.dir, "static"), { recursive: true });
      await cp(resolve(root, "favicon.ico"), resolve(options.dir, "favicon.ico"));
    }
  }]
});
