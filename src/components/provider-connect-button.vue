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
        @click="connectProvider(provider)"
      >
        {{ connectButtonLabel }}
      </button>
    </div>

    <div
      v-for="address in connectedWallets[provider.info.uuid]"
      :key="address"
    >
      {{ formatAddress(address as Address) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Address, EIP6963ProviderDetail } from "../../env";

const props = defineProps<{
  provider: EIP6963ProviderDetail;
}>();

const {
  connectProvider, connectingInProgress, connected,
} = useWallet();
const { connectedWallets } = useWalletStore();
const connectButtonLabel = computed(() => {
  if (connectingInProgress.value) {
    return "Connecting";
  } else if (connected.value) {
    return "Connected";
  } else {
    return "Connect";
  }
});
</script>
