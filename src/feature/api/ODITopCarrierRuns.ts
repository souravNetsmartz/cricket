import { emptySplitApi } from "./coreApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    ODITopCarrierRuns: build.query<any, void>({
      query: () => "/batsmen/top-career-runs",
    }),
  }),
  overrideExisting: false,
});

export const { useODITopCarrierRunsQuery } = extendedApi;
