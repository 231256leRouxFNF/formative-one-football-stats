import React from 'react';
import TeamComparisonCard from '../components/TeamComparisonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/TeamComparisonCard.css'; // Import the CSS file
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

console.log('ComparisonPage: ANAKIN: Dont lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, justice, freedom, and security to my new Empire.');

const ComparisonPage = () => {
  console.log('ComparisonPage: OBI-WAN: Your new Empire?');

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

  // Chart options to move the legend below the chart
  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom', // Move the legend to the bottom
      },
    },
  };

  return (
    <div className="container mt-5">
      <h1 style={{ color: '#006400' }}>Comparison Page</h1>
      <div className="row">
        <div className="col-md-6">
          <TeamComparisonCard team={teamA} chartOptions={chartOptions} />
        </div>
        <div className="col-md-6">
          <TeamComparisonCard team={teamB} chartOptions={chartOptions} />
        </div>
      </div>
    </div>
  );
};

console.log('ComparisonPage: ANAKIN: Dont make me kill.');

export default ComparisonPage;