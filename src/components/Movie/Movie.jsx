import React from 'react';
import { Typography, Grow, Tooltip, Rating } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i}) => {
    // Apply custom styles from MUI's makeStyles hook
    const classes = useStyles();

    // Debugging: Log movie details and index to the console
    console.log(movie, i);

    // Grid2 component is used to create a responsive layout for each movie
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl= {2} className={classes.movie}>
            <Typography className={classes.title} variant='h5'>{movie.title}</Typography>
        </Grid>
    );
};

export default Movie;