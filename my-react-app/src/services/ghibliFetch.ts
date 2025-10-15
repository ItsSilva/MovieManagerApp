import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghibliFetch = createApi({
    reducerPath: 'ghibliFetch',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ghibliapi.vercel.app/films'}),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (limit) => `?limit=${limit}`
        })
    })
})

export const { useGetMoviesQuery } = ghibliFetch;