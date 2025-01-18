import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { unheadComposablesImports } from "unhead";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({ }),
    vue(),
    vueDevTools(),
    webfontDownload(),
    Components({
      resolvers: [
        IconsResolver(),
      ],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        "vue",
        "@vueuse/core",
        unheadComposablesImports[0],
        VueRouterAutoImports,
        { pinia: ["defineStore", "storeToRefs", "acceptHMRUpdate"] },

      ],
      dts: true,
      viteOptimizeDeps: true,
      vueTemplate: true,
      dirs: ["./src/stores/**", "./src/composables/**"],
    }),
    Icons({}),
  ],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
