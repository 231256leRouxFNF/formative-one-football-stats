import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ComparisonPage from './pages/ComparisonPage';
import TimelinePage from './pages/InjuryTimeline';
import Footer from './components/Footer';  // Remove this line if duplicate
import './Styles/global.css'; // Import the global CSS file

console.log('App.js loaded');

// App component
export default function App() {
  console.log('App component rendered');
  const teamName = 'Team A';
  const attributes = [65, 59, 90, 81, 56];

  return (
    <Router>
        <CustomNavbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  );
};

// export default App; // Remove this line if duplicate