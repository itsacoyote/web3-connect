import { defineStore } from "pinia";

import type { Address, EIP6963ProviderDetail } from "../../env";

export const useWalletStore = defineStore("wallet", () => {
  const connectedProviders = ref<EIP6963ProviderDetail[]>([]);
  const connectedWallets = ref<{ [uuid in string]?: string[] }>({});

  const updateConnectedProviders = (provider: EIP6963ProviderDetail) => {
    if (!connectedProviders.value.includes(provider)) {
      connectedProviders.value = [...connectedProviders.value, provider];
    }
  };

  const setConnectedWallets = (providerUuid: string, addresses: Address[]) => {
    connectedWallets.value[providerUuid] = addresses;
  };

  return {
    updateConnectedProviders,
    setConnectedWallets,
    connectedProviders,
    connectedWallets,
  };
});
