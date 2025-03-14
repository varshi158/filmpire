import React from 'react';
import Grid from '@mui/material/Grid2';
import { Movie } from '../component-exports';

import useStyles from './styles';

// MovieList component - responsible for displaying a grid of movie cards
const MovieList = ({ movies }) => {
    const classes = useStyles();
    console.log('MovieList');

    return (
        <Grid container className={classes.moviesContainer}>
            {/* Mapping through the movies array to render each movie */}
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    );
}

export default MovieList;