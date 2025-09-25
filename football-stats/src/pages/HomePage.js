import React from 'react';
import MatchCard from '../components/MatchCard';
import MostGoals from '../components/MostGoals';
import TopScorer from '../components/TopScorer';
import { useMatches } from '../hooks/useMatches';
import './HomePage.css';
import "../Styles/global.css";

const HomePage = () => {
  const { matches, loading, error } = useMatches();

  if (loading) return (
    <div className="loading-spinner">
      <div>⚽ Loading recent matches...</div>
    </div>
  );
  
  if (error) return (
    <div className="error-message">
      ⚠️ Unable to load matches: {error}
    </div>
  );

  return (
    <div className="home-container">
      <h1 className="page-title">Recent Premier League Matches</h1>
      <div className="grid-container">
        {/* Main Content - Recent Matches */}
        <div className="matches-section">
          <div className="matches-grid">
            {matches.map((match, index) => (
              <div key={`match-${index}`} className="match-card">
                <MatchCard match={match} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Sidebar - Stats Cards */}
        <div className="sidebar">
          <div className="stat-card">
            <TopScorer />
          </div>
          <div className="stat-card">
            <MostGoals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
