import { nanoquery } from "@nanostores/query";

export const [createFetcherStore] = nanoquery({
  fetcher: (...keys: string[]) => fetch(keys.join("")).then((r) => r.json()),
});
