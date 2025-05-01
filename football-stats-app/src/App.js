// src/App.jsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './pages/Home'; // or use <Outlet /> if routing

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#121212', minHeight: '100vh' }}>
        <Home />
      </Box>
    </Box>
  );
}
