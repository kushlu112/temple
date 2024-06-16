import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import Logo from './balaji_icon.png';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const navigate = useNavigate();


    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        if (isMobile) {
            setDrawerOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', sectionId: 'home' },
        { label: 'Gallary', sectionId: 'gallary' },
        { label: 'Seva', sectionId: 'seva' },
        { label: 'About Us', sectionId: 'about-us' },
        { label: 'Contact Us', sectionId: 'contact-us' },
        { label: 'Donate', path: '/donate' },
    ];

    // Donate page
    if (location.pathname === '/donate') {
        return (
            <AppBar position="sticky">
                <Toolbar style={{ backgroundColor: 'white' }}>
                    <Button style={{ color: "black" }} onClick={() => navigate(-1)}>
                        Go Back
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }

    return (
        <AppBar position="sticky" style={{ backgroundColor: 'white', top: 0 }}>
            <Toolbar style={{ justifyContent: 'space-between', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="Temple Logo" style={{ height: '64px' }} />
                    <Typography variant="h6" style={{ marginLeft: '10px', color: 'black' }}>
                        శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం
                    </Typography>
                </div>
                {isMobile ? (
                    <>
                        <IconButton color="black" edge="end" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <List>
                                {navItems.map((item, index) => (
                                    <ListItem key={index} onClick={() => scrollToSection(item.sectionId)} style={{ color: 'black' }}>
                                        {item.label}
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (

                    <div>
                        {navItems.map((item, index) => (
                            item.label !== 'Donate' ? (
                                <Button key={index} onClick={() => scrollToSection(item.sectionId)} style={{ color: 'black' }}>
                                    {item.label}
                                </Button>
                            ) : (
                                <Link to={item.path} style={{ textDecoration: 'none' }}>
                                    <Button key={index} style={{ color: "black" }}>
                                        {item.label}
                                    </Button>
                                </Link>
                            )
                        ))}

                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
