import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import Logo from './templeLogo.png';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (isMobile) {
            setDrawerOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', sectionId: 'home' },
        { label: 'Address', sectionId: 'address' },
        { label: 'About Us', sectionId: 'about-us' },
        { label: 'Contact Us', sectionId: 'contact-us' },
    ];

    return (
        <AppBar position="static">
            {/* Header Section */}
            <header style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: '#FC9601' }}>
                <img src={Logo} alt="Temple Logo" style={{ height: '64px' }} />
                <Typography variant="h4" style={{ marginLeft: '10px' }}>
                    శ్రీదేవి భూదేవి సమేత వేంకటేశ్వర స్వామి దేవస్థానము
                </Typography>
            </header>

            <Toolbar style={{ backgroundColor: '#FC9601' }}>
                {isMobile ? (
                    <>
                        <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <List>
                                {navItems.map((item, index) => (
                                    <ListItem key={index} onClick={() => scrollToSection(item.sectionId)}>
                                        {item.label}
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    navItems.map((item, index) => (
                        <Button key={index} color="inherit" onClick={() => scrollToSection(item.sectionId)}>
                            {item.label}
                        </Button>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
