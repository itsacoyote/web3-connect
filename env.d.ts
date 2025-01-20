/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

import { EIP1193Provider } from "viem";

export interface EVMProviderDetected extends EIP6963ProviderDetail {
  accounts: string[];
  request?: EIP1193Provider["request"];
}

export interface EIP6963ProviderInfo {
  uuid: string;
  name: string;
  icon: string;
  rdns: string;
}

export interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo;
  provider: EIP1193Provider;
}

export interface EIP6963AnnounceProviderEvent extends Event {
  detail: EIP6963ProviderDetail;
}
