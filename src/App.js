// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import Home from './components/Home'; // Import your Home component
import Footer from './components/Footer'; // Import your Footer component

const App = () => {
  const theme = createTheme({
    // your theme options
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Navbar /> {/* Your navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
      </Routes>
      <Footer /> {/* Your footer */}
      </ThemeProvider>
    </Router>
  );
};

export default App;
