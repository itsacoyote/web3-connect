import { createWalletClient, custom } from "viem";

import type { EIP6963ProviderDetail, EVMProviderDetected } from "../../env";

export const useWallet = () => {
  const { defaultChain } = useChain();
  const connectingInProgress = ref(false);
  const connected = ref(false);
  const { updateConnectedProviders, setConnectedWallets } = useWalletStore();

  const connectProvider = async (provider: EIP6963ProviderDetail) => {
    const request = (provider as EVMProviderDetected).request ?? provider.provider.request;
    const client = createWalletClient({
      chain: defaultChain,
      transport: custom({ request }),
    });

    try {
      const addresses = await client.getAddresses();
      if (addresses.length === 0) {
        connectingInProgress.value = true;
        const accounts = await client.requestAddresses();
        setConnectedWallets(provider.info.uuid, accounts);
      } else {
        setConnectedWallets(provider.info.uuid, addresses);
      }
      updateConnectedProviders(provider);
      connected.value = true;
    } catch (e) {
      console.error("WalletConnectFailed::", e);
      connected.value = false;
    } finally {
      connectingInProgress.value = false;
    }
  };

  return {
    connectingInProgress,
    connectProvider,
    connected,
  };
};
