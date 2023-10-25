import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    T20Bowler: build.query<any, void>({
      query: () => "ttwenty/bowlers",
    }),
  }),
  overrideExisting: false,
});

export const { useT20BowlerQuery } = extendedApi;
