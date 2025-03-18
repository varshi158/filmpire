import { configureStore } from "@reduxjs/toolkit"; // Importing Redux Toolkit's configureStore function
import { tmdbApi } from "../services/TMDB"; // Importing the TMDB API

import genreOrCategoryReducer from "../features/currentGenreOrCategory"; // Importing the genreOrCategory reducer

// Creating the Redux store
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer, // Adding the TMDB API reducer to the store
    currentGenreOrCategory: genreOrCategoryReducer, // Adding the genreOrCategory reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware), // Adding RTK Query's middleware for API calls
});