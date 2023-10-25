import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    ODIBowler: build.query<any, void>({
      query: () => "odi/bowlers",
    }),
  }),
  overrideExisting: false,
});

export const { useODIBowlerQuery } = extendedApi;
