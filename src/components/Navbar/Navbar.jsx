import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '../component-exports';

import useStyles from './styles';

const NavBar = () => {
    // State to control mobile sidebar drawer
    const [mobileOpen, setMobileOpen] = useState(false);
    const classes = useStyles(); // Custom styles
    const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen size is mobile
    const theme = useTheme(); // Get the current theme (light/dark)
    const isAuthenticated = true; // Authentication status 

    return (
        <>
            {/* Top Navigation Bar */}
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    {/* Menu button for mobile view to open sidebar */}
                    {isMobile && (
                        <IconButton
                            color='inherit'
                            edge='start'
                            style={{ outline: 'none' }}
                            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                    )}

                    {/* Light/Dark Mode Toggle */}
                    <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => { }}>
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>

                    {/* Search Bar Placeholder (Visible on Desktop) */}
                    {!isMobile && 'Search...'}

                    {/* User Authentication Section */}
                    <div>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={() => { }}>
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : (
                            <Button
                                color='inherit'
                                component={Link}
                                to={`/profile/:id`}
                                className={classes.linkButton}
                                onClick={() => {}}
                            >
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar
                                    style={{ width: 30, height: 30 }}
                                    alt='Profile'
                                    src='https://i.pinimg.com/474x/43/6c/ac/436cac73f5fff533999f31147c3538b7.jpg'
                                />
                            </Button>
                        )}
                    </div>

                    {/* Search Bar Placeholder (Visible on Mobile) */}
                    {isMobile && 'Search...'}
                </Toolbar>
            </AppBar>

            {/* Sidebar Navigation (Drawer) */}
            <div>
                <nav className={classes.drawer}>
                    {isMobile ? (
                        <Drawer
                            variant='temporary' // Temporary drawer for mobile
                            anchor='right' // Opens from the right
                            open={mobileOpen}
                            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }} // Improves performance on mobile
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer
                            classes={{ paper: classes.drawerPaper }}
                            variant='permanent' // Permanent drawer for larger screens
                            open
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    );
};

export default NavBar;
