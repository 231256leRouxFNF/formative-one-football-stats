import React from 'react';
import TeamComparisonCard from '../components/TeamComparisonCard';

console.log('ComparisonPage.js loaded');

const ComparisonPage = () => {
  console.log('ComparisonPage component rendered');

  const teamA = {
    name: 'Team A',
    wins: 10,
    losses: 5,
    draws: 3,
    goalsScored: 25,
    goalsConceded: 15,
  };

  const teamB = {
    name: 'Team B',
    wins: 8,
    losses: 7,
    draws: 3,
    goalsScored: 20,
    goalsConceded: 18,
  };

  return (
    <div>
      <h1>Comparison Page</h1>
      <div className="team-comparison-container">
        <TeamComparisonCard team={teamA} />
        <TeamComparisonCard team={teamB} />
      </div>
    </div>
  );
};

export default ComparisonPage;