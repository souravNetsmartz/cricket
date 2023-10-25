import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    T20Fieleder: build.query<any, void>({
      query: () => "ttwenty/fielders",
    }),
  }),
  overrideExisting: false,
});

export const { useT20FielederQuery } = extendedApi;
