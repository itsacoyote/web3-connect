import { type Address, createWalletClient, custom } from "viem";

import type { EIP6963ProviderDetail, EVMProviderDetected } from "../../env";

export const useWallet = () => {
  // const { selectedChain } = useChainStore();
  // const inProgress = ref(false);
  // const connected = ref(false);
  // const addresses = ref<Address[]>([]);

  // const connectProvider = async (provider: EIP6963ProviderDetail) => {
  //   const request = (provider as EVMProviderDetected).request ?? provider.provider.request;
  //   const client = createWalletClient({
  //     chain: selectedChain,
  //     transport: custom({ request }),
  //   });

  //   try {
  //     const availableAddresses = await client.getAddresses();
  //     if (availableAddresses.length === 0) {
  //       inProgress.value = true;
  //       addresses.value = await client.requestAddresses();
  //     } else {
  //       addresses.value = availableAddresses;
  //     }
  //     connected.value = true;
  //   } catch (e) {
  //     console.error("WalletConnectFailed::", e);
  //     connected.value = false;
  //   } finally {
  //     inProgress.value = false;
  //   }
  // };

  // return {
  //   inProgress,
  //   connectProvider,
  //   connected,
  // };
};
