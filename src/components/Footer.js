// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="inherit" style={{backgroundColor:'white'}}>
      <Toolbar>
        <Typography variant="body2" >
          © {new Date().getFullYear()} Temple App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
