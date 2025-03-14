import React from 'react';
import { Grid2 } from '@mui/material';
import { Movie } from '../component-exports';

import useStyles from './styles';

const MovieList = ({ movies }) => {
    const classes = useStyles();
    console.log('MovieList');

    return (
        <Grid2 container className={classes.moviesContainer}>
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid2>
    );
}

export default MovieList;