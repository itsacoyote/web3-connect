<template>
  <div
    class=" border-b-neutral-700 last:border-b-0 p-2"
  >
    <div class="flex">
      <div class="grow flex items-center">
        <img
          width="25"
          class="inline-block mr-2"
          :src="provider.info.icon"
        >
        <span>{{ provider.info.name }}</span>
      </div>
      <button
        class="border border-blue-600 bg-blue-600/20 hover:bg-blue-600/40 px-4 py-1 rounded-full text-white/90 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:text-white"
        @click="connect()"
      >
        {{ connectButtonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EIP6963ProviderDetail } from "../../env";

const props = defineProps<{
  provider: EIP6963ProviderDetail;
}>();

const {
  connect, inProgress, connected,
} = useConnector(props.provider);
const connectButtonLabel = computed(() => {
  if (inProgress.value) {
    return "Connecting";
  } else if (connected) {
    return "Connected";
  } else {
    return "Connect";
  }
});
</script>
