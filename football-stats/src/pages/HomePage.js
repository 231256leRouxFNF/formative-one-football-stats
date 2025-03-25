import React from 'react';
import MatchCard from '../components/MatchCard';
import MostGoals from '../components/MostGoals';
import TeamAttributes from '../components/TeamAttributes';
import TopScorer from '../components/TopScorer';
import { useMatches } from '../hooks/useMatches';
import './HomePage.css';

const dummyTopScorer = {
  player: 'Player A',
  goals: 120,
  team: 'Team A',
};

const HomePage = () => {
  const { matches, loading, error } = useMatches();

  if (loading) return <div className="loading-spinner">Loading matches...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="home-container">
      <h1 className="page-title">Recent Premier League Matches</h1>
      <div className="grid-container">
        <div className="matches-grid">
          {matches.map((match, index) => (
            <div key={`match-${index}`} className="match-card">
              <MatchCard match={match} />
            </div>
          ))}
        </div>
        <div className="most-goals">
          <MostGoals />
        </div>
        <div className="team-attributes">
          <TeamAttributes teamId={33} /> {/* Replace 33 with the desired team ID */}
        </div>
        <div className="top-scorer">
          <TopScorer data={dummyTopScorer} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
