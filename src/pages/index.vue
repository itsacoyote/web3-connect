<template>
  <div class="lg:w-2/4 m-auto py-6">
    Connect
    <div class="w-3/5 m-auto border border-neutral-700 rounded">
      <ProviderConnectButton
        v-for="provider in providers"
        :key="provider.info.uuid"
        :provider="provider"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { providers } = useWalletProviders();
</script>
