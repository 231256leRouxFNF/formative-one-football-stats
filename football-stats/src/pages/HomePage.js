import React from 'react';
import MatchCard from '../components/MatchCard';
import MostGoals from '../components/MostGoals';
import TopScorer from '../components/TopScorer';
import { useMatches } from '../hooks/useMatches';
import './HomePage.css';
import "../Styles/global.css"; // Import the theme CSS file

const HomePage = () => {
  const { matches, loading, error } = useMatches();

  if (loading) return <div className="loading-spinner">Loading matches...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="home-container">
      <h1 className="page-title">Recent Premier League Matches</h1>
      <div className="grid-container">
        {/* Matches Grid */}
        <div className="matches-grid">
          {matches.map((match, index) => (
            <div key={`match-${index}`} className="match-card">
              <MatchCard match={match} />
            </div>
          ))}
        </div>
        {/* Top Scorer Card */}
        <div className="top-scorer">
          <TopScorer />
        </div>
        {/* Most Goals Card */}
        <div className="most-goals">
          <MostGoals />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
