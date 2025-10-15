import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: string;
  title: string;
  director: string;
  year: string;
}

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

export const GetMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    updateMovie: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
  },
});

export const { getMovies, addMovie, deleteMovie, updateMovie } = GetMoviesSlice.actions;
export default GetMoviesSlice.reducer;
