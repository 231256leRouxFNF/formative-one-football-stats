import React from 'react';
import { Bar, Radar } from 'react-chartjs-2';

const CardComponent = ({ type, data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  switch (type) {
    case 'match':
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.teamA} vs {data.teamB}</h5>
            <p className="card-text">Score: {data.scoreA} - {data.scoreB}</p>
            <img src={data.teamALogo} alt={`${data.teamA} logo`} style={{ width: '50px', height: '50px' }} />
            <img src={data.teamBLogo} alt={`${data.teamB} logo`} style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
      );
    case 'teamComparison':
      const radarData = {
        labels: ['Wins', 'Losses', 'Draws', 'Goals Scored', 'Goals Conceded'],
        datasets: [
          {
            label: data.teamA.name,
            data: [data.teamA.wins, data.teamA.losses, data.teamA.draws, data.teamA.goalsScored, data.teamA.goalsConceded],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
          {
            label: data.teamB.name,
            data: [data.teamB.wins, data.teamB.losses, data.teamB.draws, data.teamB.goalsScored, data.teamB.goalsConceded],
            backgroundColor: 'rgba(153,102,255,0.4)',
            borderColor: 'rgba(153,102,255,1)',
            borderWidth: 1,
          },
        ],
      };
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Team Attributes</h5>
            <Radar data={radarData} options={{ plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      );
    case 'topScorer':
      return (
        <div className="card bg-warning">
          <div className="card-body">
            <h5 className="card-title">Top Scorer: {data.name}</h5>
            <p className="card-text">Goals: {data.goals}</p>
            <img src={data.image} alt={`${data.name}`} style={{ width: '100px', height: '100px' }} />
          </div>
        </div>
      );
    case 'goalsPerTeam':
      const barData = {
        labels: data.map(team => team.name),
        datasets: [
          {
            label: 'Goals',
            data: data.map(team => team.goals),
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Most Goals Scored per team</h5>
            <Bar data={barData} options={{ plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      );
    default:
      return <div>Invalid card type</div>;
  }
};

export default CardComponent;