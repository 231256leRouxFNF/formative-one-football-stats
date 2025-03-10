import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const TeamComparisonCard = ({ team }) => {
  console.log('TeamComparisonCard component rendered');
  console.log('Team data:', team);

  if (!team) {
    return <div>No team data available</div>;
  }

  return (
    <div className="card bg-dark text-white mb-4">
      <div className="card-body">
        <h2 className="card-title">{team.name}</h2>
        <p className="card-text">Wins: {team.wins}</p>
        <p className="card-text">Losses: {team.losses}</p>
        <p className="card-text">Draws: {team.draws}</p>
        <p className="card-text">Goals Scored: {team.goalsScored}</p>
        <p className="card-text">Goals Conceded: {team.goalsConceded}</p>
      </div>
    </div>
  );
};

export default TeamComparisonCard;