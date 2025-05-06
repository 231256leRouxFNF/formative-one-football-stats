// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PlayerComparison from './pages/PlayerComparison';
import InjuryTimeline from './pages/InjuryTimeline';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player-comparison" element={<PlayerComparison />} />
            <Route path="/injury-timeline" element={<InjuryTimeline />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
