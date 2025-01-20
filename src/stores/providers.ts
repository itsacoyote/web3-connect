import { StorageSerializers } from "@vueuse/core";
import { defineStore } from "pinia";
import type { Address } from "viem";

import type { EIP6963AnnounceProviderEvent, EIP6963ProviderDetail } from "../../env";

export const useProvidersStore = defineStore("providers", () => {
  const availableProviders = reactive<{ [uuid in string]?: EIP6963ProviderDetail }>({});
  const providers = computed(() => {
    return Object.values(availableProviders).filter((provider): provider is EIP6963ProviderDetail => !!provider);
  });
  const connectedProviderRdns = useStorage("connectedProvider", "", undefined, { serializer: StorageSerializers.string });
  const connectedProvider = ref<EIP6963ProviderDetail | null>(null);
  const setProvider = (provider: EIP6963ProviderDetail) => connectedProviderRdns.value = provider.info.rdns;

  watch(connectedProvider, async (provider) => {
    const { addresses } = storeToRefs(useClientStore());
    const { client } = useClientStore();
    if (!!connectedProvider.value) {
      addresses.value = await client?.getAddresses() ?? [];
      connectedProvider.value.provider.on("accountsChanged", async (newAccounts: Address[]) => {
        addresses.value = newAccounts;
      });
      connectedProvider.value.provider.on("disconnect", () => {
        connectedProviderRdns.value = undefined;
        addresses.value = [];
      });
    }
  });

  const onAnnounceProvider = (event: EIP6963AnnounceProviderEvent) => {
    const provider = event.detail;
    availableProviders[provider.info.rdns] = provider;
    if (provider.info.rdns === connectedProviderRdns.value) {
      connectedProvider.value = provider;
    }
  };

  useEventListener(window, "eip6963:announceProvider", onAnnounceProvider as EventListener);
  window.dispatchEvent(new Event("eip6963:requestProvider"));

  return {
    providers,
    connectedProvider,
    connectedProviderRdns,
    setProvider,
  };
});
