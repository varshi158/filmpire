import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

// List of main categories for movies
const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

// List of demo genres (for testing or UI display)
const demoCategories = [
    { label: 'Action', value: 'action' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Drama', value: 'drama' }
];

// Logos for light and dark mode themes
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme(); // Access the current theme (light/dark mode)
    const classes = useStyles(); // Access styles

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
                        <ListItem onClick={() => { }} button>
                            {/* Uncomment to add an icon for categories */}
                            {/* <ListItemIcon>
                                <img src={redLogo} className={classes.genreImages} height={30} />
                            </ListItemIcon> */}

                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>

            <Divider />

            {/* Genres Section */}
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to="/">
                        <ListItem onClick={() => { }} button>
                            {/* Uncomment to add an icon for genres */}
                            {/* <ListItemIcon>
                                <img src={redLogo} className={classes.genreImages} height={30} />
                            </ListItemIcon> */}

                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    );
}

export default Sidebar;
