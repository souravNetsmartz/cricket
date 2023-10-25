import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    T20Batsman: build.query<any, void>({
      query: () => "ttwenty/batsmen",
    }),
  }),
  overrideExisting: false,
});

export const { useT20BatsmanQuery } = extendedApi;
