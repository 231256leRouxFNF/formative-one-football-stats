import React from 'react';
import TeamComparisonCard from '../components/TeamComparisonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/TeamComparisonCard.css'; // Import the CSS file

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
    <div className="container mt-5">
      <h1>Comparison Page</h1>
      <div className="row">
        <div className="col-md-6">
          <TeamComparisonCard team={teamA} />
        </div>
        <div className="col-md-6">
          <TeamComparisonCard team={teamB} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;