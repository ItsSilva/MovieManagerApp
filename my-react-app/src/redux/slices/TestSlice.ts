import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Movies {
  id: string;
  title: string;
  director: string;
  year: string;
}

interface MoviesState {
  movies: Movies[];
}

const initialState: MoviesState = {
  movies: [],
};

export const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    getTestMovies: (state, action: PayloadAction<Movies[]>) => {
      state.movies = action.payload;
    },
    addTestMovies: (state, action: PayloadAction<Movies>) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteTestMovies: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    editTestMovies: (state, action: PayloadAction<Movies>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
  },
});
