import { type Address, createWalletClient, custom, publicActions } from "viem";

import type { EVMProviderDetected } from "../../env";

export const useClientStore = defineStore("client", () => {
  const { connectedProvider } = storeToRefs(useProvidersStore());
  const { activeChain } = useChainStore();
  const connected = computed(() => !!connectedProvider.value && addresses.value.length > 0);
  const addresses = ref<Address[]>([]);
  const address = computed(() => addresses.value[0]);

  const client = computed({
    get() {
      if (!connectedProvider.value) {
        return null;
      }
      return createWalletClient({
        account: addresses.value[0],
        chain: activeChain,
        transport: custom({ request: (connectedProvider.value as EVMProviderDetected).request ?? connectedProvider.value.provider.request }),
      }).extend(publicActions);
    },
    set() {
      throw new Error("client is readonly");
    },
  });

  return {
    connected,
    client,
    address,
    addresses,
  };
});
