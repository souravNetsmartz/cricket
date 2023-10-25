import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    ODIBatsman: build.query<any, void>({
      query: () => "odi/batsmen",
    }),
  }),
  overrideExisting: false,
});

export const { useODIBatsmanQuery } = extendedApi;
