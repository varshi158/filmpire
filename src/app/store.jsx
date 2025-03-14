import { configureStore } from "@reduxjs/toolkit"; // Importing Redux Toolkit's configureStore function
import { tmdbApi } from "../services/TMDB"; // Importing the TMDB API

// Creating the Redux store
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer, // Adding the TMDB API reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware), // Adding RTK Query's middleware for API calls
});