import { mainnet, sepolia, zksync, zksyncSepoliaTestnet } from "viem/chains";

export const useChain = () => {
  const availableChains = [mainnet, sepolia, zksync, zksyncSepoliaTestnet];
  const defaultChain = availableChains[0];

  return {
    availableChains,
    defaultChain,
  };
};
