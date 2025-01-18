<template>
  <footer class="flex gap-2 items-center justify-center">
    <button
      type="button"
      class="hover:bg-neutral-200 p-2 rounded dark:hover:bg-neutral-700"
      @click="toggleDark()"
    >
      <IFluentWeatherMoon20Regular v-if="isDark" />
      <IFluentWeatherSunny20Regular v-else />
    </button>
    <a
      target="_blank"
      href="https://github.com/itsacoyote/web3-connect"
      class="hover:bg-neutral-200 p-2 rounded dark:hover:bg-neutral-700"
    >
      <github-logo class="w-5 h-5" />
    </a>
  </footer>
</template>
