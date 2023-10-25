import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    ODIFielder: build.query<any, void>({
      query: () => "odi/fielders",
    }),
  }),
  overrideExisting: false,
});

export const { useODIFielderQuery } = extendedApi;
