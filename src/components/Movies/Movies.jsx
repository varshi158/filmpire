import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography, } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
    const { data, error } = useGetMoviesQuery();
    console.log("Movies Data:", data);
    console.log("API Error:", error);

    return <p>Movies Page</p>;
}

export default Movies;