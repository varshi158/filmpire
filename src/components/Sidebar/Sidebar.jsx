import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenresQuery } from '../../services/TMDB';
import useStyles from './styles';
import genreIcons from '../../assets/genres';

// List of main categories for movies
const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

// Logos for light and dark mode themes
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme(); // Access the current theme (light/dark mode)
    const classes = useStyles(); // Access styles
    const { data, isFetching } = useGetGenresQuery(); // Fetch genres from TMDB API
    const dispatch = useDispatch(); // Access the dispatch function

    console.log("Genres Data:", data); // Debugging to check the genres data

    return (
        <>
            {/* Logo with conditional color based on theme mode */}
            <Link to="/" className={classes.imageLink}>
                <img
                    className={classes.image}
                    src={theme.palette.mode === 'light' ? redLogo : blueLogo}
                    alt="Filmpire Logo"
                />
            </Link>

            <Divider />

            {/* Movie Categories Section */}
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to="/">
                        <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
                            <ListItemIcon>
                                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>

            <Divider />

            {/* Genres Section */}
            <List>
                <ListSubheader>Genres</ListSubheader>
                {isFetching ? (
                    <Box display="flex" justifyContent='center'>
                        <CircularProgress />
                    </Box>
                ) : data.genres.map(({ name, id }) => (
                    <Link key={name} className={classes.links} to="/">
                        <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
                            <ListItemIcon>
                                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    );
}

export default Sidebar;
