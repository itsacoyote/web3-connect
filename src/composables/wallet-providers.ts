import type { EIP6963AnnounceProviderEvent, EIP6963ProviderDetail } from "../../env";

export const useWalletProviders = () => {
  const providers = ref<EIP6963ProviderDetail[]>([]);

  const onAnnounceProvider = (event: EIP6963AnnounceProviderEvent) => {
    providers.value = [...providers.value, event.detail];
  };

  onMounted(() => {
    useEventListener(window, "eip6963:announceProvider", onAnnounceProvider as EventListener);
    window.dispatchEvent(new Event("eip6963:requestProvider"));
  });

  const getProvidersByUuid = (uuid: string) => {
    return providers.value.filter((provider: EIP6963ProviderDetail) => {
      return provider.info.uuid === uuid;
    });
  };

  return {
    providers,
    getProvidersByUuid,
  };
};
