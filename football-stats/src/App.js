import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ComparisonPage from './pages/ComparisonPage';
import TimelinePage from './pages/TimelinePage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Global.css'; // Import the global CSS file

console.log('App.js loaded');

// App component
export default function App() {
  console.log('App component rendered');
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CustomNavbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}