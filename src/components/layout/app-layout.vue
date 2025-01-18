<script setup lang="ts">

const links = [
  {
    name: "Home",
    path: "/",
  },
];
</script>

<template>
  <div class="w-full m-auto my-8">
    <header class="text-center py-8">
      <IFluentWallet28Regular class="py-2 text-6xl m-auto" />
      <h1 class="font-bold text-2xl">
        Web3 Connect
      </h1>
      <div class="mt-2 text-md flex gap-2 justify-center">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          class="hover:underline"
          :to="link.path"
          exact-active-class="underline"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
h1, h2, h3, h4, h5, h6 {
  @apply font-serif
}
</style>
