<script setup lang="ts">
import { useHead } from "unhead";
import { RouterView } from "vue-router";

useHead({ title: "Personal Starter Vue" });
</script>

<template>
  <RouterView v-slot="{Component, route}">
    <Transition name="fade" mode="out-in">
      <AppLayout :key="route.path">
        <Component :is="Component" />
      </AppLayout>
    </Transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.13s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
