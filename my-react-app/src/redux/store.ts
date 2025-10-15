import { configureStore } from "@reduxjs/toolkit";
import { ghibliFetch } from "../services/ghibliFetch";
import GetMoviesReducer from "./slices/GetMoviesSlice";

export const store = configureStore({
    reducer: {
        [ghibliFetch.reducerPath]: ghibliFetch.reducer,
        movies: GetMoviesReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ghibliFetch.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;