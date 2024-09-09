import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Cat {
  id: string;
  url: string; 
}

export const catsApi = createApi({
  reducerPath: 'catsApi', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
  }),
  endpoints: (builder) => ({
    getAllCats: builder.query<Cat[], number | void>({
      query: (limit = 10) => ({ url: 'images/search', params: { limit } }),
    }),
  }),
});

export const { useGetAllCatsQuery } = catsApi;