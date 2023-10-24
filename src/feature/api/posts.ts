import {emptySplitApi} from './coreApi';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    posts: build.query<any, void>({
      query: () => 'posts',
    }),
  }),
  overrideExisting: false,
});

export const {usePostsQuery} = extendedApi;
