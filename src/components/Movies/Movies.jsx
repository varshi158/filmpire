import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography, } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../component-exports';


const Movies = () => {
     // Fetch movies using Redux Toolkit Query
     const { data, error, isFetching } = useGetMoviesQuery();

     // Debugging logs to inspect API response and errors
     console.log("Movies Data:", data); //fetches 20 movies per page
     console.log("API Error:", error);

    // Show a loading spinner while data is being fetched
    if (isFetching) {
        return (
            <Box display= "flex" justifyContent='center'>
                <CircularProgress size="4rem"/>
            </Box>
        );
    }

    // Handle the case where no movies match the search query
    if (!data.results.length) {
        return (
            <Box display= "flex" alignItems='center' mt="20px">
                <Typography variant='h4'>
                    No movies that match that name.
                    <br />
                    Please search for something else.
                </Typography>
            </Box>
        );
    }

    // Display an error message if there is an API error
    if (error) return 'An error has occurred: ' + error.message;

    // Render the list of movies once data is available
    return (
        <div>
            <MovieList movies={data} />
        </div>
    );
}

export default Movies;