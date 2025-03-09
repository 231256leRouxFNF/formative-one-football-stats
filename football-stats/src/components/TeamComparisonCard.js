import React from 'react';
import './TeamComparisonCard.css';

const TeamComparisonCard = ({ team }) => {
  console.log('TeamComparisonCard component rendered');
  console.log('Team data:', team);

  if (!team) {
    return <div>No team data available</div>;
  }

  return (
    <div className="team-comparison-card">
      <h2>{team.name}</h2>
      <p>Wins: {team.wins}</p>
      <p>Losses: {team.losses}</p>
      <p>Draws: {team.draws}</p>
      <p>Goals Scored: {team.goalsScored}</p>
      <p>Goals Conceded: {team.goalsConceded}</p>
    </div>
  );
};

export default TeamComparisonCard;