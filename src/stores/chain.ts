import {
  type Chain, mainnet, sepolia, zksync, zksyncSepoliaTestnet,
} from "viem/chains";

export const useChainStore = defineStore("chain", () => {
  const availableChains: Chain[] = [mainnet, sepolia, zksync, zksyncSepoliaTestnet];
  const activeChainId = ref(availableChains[0].id);
  const activeChain = computed(() => availableChains.find((chain) => chain.id === activeChainId.value));

  type ChainId = typeof availableChains[number]["id"];

  const switchChain = (chainId: ChainId) => {
    activeChainId.value = chainId;
  };

  return {
    availableChains,
    activeChain,
    activeChainId,
    switchChain,
  };
});
