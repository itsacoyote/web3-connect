import type { Address } from "../../env";

export const formatAddress = (address: Address, length: number = 4) => {
  return `${address.slice(0, length)}...${address.slice(-length)}`;
};
