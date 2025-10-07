import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import LeaguesPage from './pages/LeaguesPage';
import ComparisonPage from './pages/ComparisonPage';
import TimelinePage from './pages/InjuryTimeline';
import Footer from './components/Footer';
import './Styles/global.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomNavbar />
        <div className="content-container">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leagues" element={<LeaguesPage />} />
              <Route path="/compare" element={<ComparisonPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
            </Routes>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
