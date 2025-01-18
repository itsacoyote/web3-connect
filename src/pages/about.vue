<script setup lang="ts">
const tools = [
  {
    name: "Iconify - Fluent",
    url: "https://icon-sets.iconify.design/fluent/",
  },
  {
    name: "Pinia",
    url: "https://pinia.vuejs.org/",
  },
  {
    name: "Playwright",
    url: "https://playwright.dev/",
  },
  {
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Unhead",
    url: "https://unhead.unjs.io/",
  },
  {
    name: "Unplugin Auto Import",
    url: "https://www.npmjs.com/package/unplugin-auto-import",
  },
  {
    name: "Unplugin Icons",
    url: "https://www.npmjs.com/package/unplugin-icons",
  },
  {
    name: "Vite",
    url: "https://vite.dev/",
  },
  {
    name: "Vue Router",
    url: "https://router.vuejs.org/",
  },
];
</script>

<template>
  <div class="m-auto py-6">
    <ul class="list-disc list-outside">
      <li
        v-for="tool in tools"
        :key="tool.name"
      >
        <a
          :href="tool.url"
          target="_blank"
          class="hover:underline"
        >{{ tool.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
