import { createWalletClient, custom } from "viem";

import type { EIP6963ProviderDetail, EVMProviderDetected } from "../../env";

export function useConnector(provider: EIP6963ProviderDetail) {
  const inProgress = ref(false);
  const { setProvider } = useProvidersStore();
  const { activeChain } = useChainStore();
  const { addresses, connected } = storeToRefs(useClientStore());

  const connect = async () => {
    const request = (provider as EVMProviderDetected).request ?? provider.provider.request;
    const client = createWalletClient({
      chain: activeChain,
      transport: custom({ request }),
    });

    try {
      let availableAddresses = await client.getAddresses();
      if (availableAddresses.length === 0) {
        inProgress.value = true;
        availableAddresses = await client.requestAddresses();
      }
      setProvider(provider);
      addresses.value = availableAddresses;
    } catch (e) {
      console.error("WalletConnectFailed::", e);
    } finally {
      inProgress.value = false;
    }
  };

  return {
    inProgress,
    connect,
    connected,
  };
};
