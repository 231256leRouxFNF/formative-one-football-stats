import React from 'react';
import { Bar, Pie, Radar, Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TeamComparisonCard = ({ team }) => {
  console.log('TeamComparisonCard component rendered');
  console.log('Team data:', team);

  if (!team) {
    return <div>No team data available</div>;
  }

  const barData = {
    labels: ['Goals'],
    datasets: [
      {
        label: 'Team A',
        data: [team.goalsScored],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Team B',
        data: [team.goalsConceded],
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Wins', 'Losses', 'Draws'],
    datasets: [
      {
        data: [team.wins, team.losses, team.draws],
        backgroundColor: ['rgba(75,192,192,0.4)', 'rgba(255,99,132,0.4)', 'rgba(255,206,86,0.4)'],
        borderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,206,86,1)'],
        borderWidth: 1,
      },
    ],
  };

  const radarData = {
    labels: ['Strength 1', 'Strength 2', 'Strength 3', 'Strength 4', 'Strength 5'],
    datasets: [
      {
        label: 'Team Strengths',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Wins', 'Losses', 'Draws', 'Goals Scored', 'Goals Conceded'],
    datasets: [
      {
        label: team.name,
        data: [team.wins, team.losses, team.draws, team.goalsScored, team.goalsConceded],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
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
    <div className="card bg-dark text-white mb-4">
      <div className="card-body">
        <h2 className="card-title">{team.name}</h2>
        <div className="row">
          <div className="col-md-6 chart-container">
            <h3>Recent Goals Comparison</h3>
            <Bar data={barData} options={chartOptions} />
          </div>
          <div className="col-md-6 chart-container">
            <h3>Match Outcomes</h3>
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-container mt-4 small-chart-container">
          <h3>Team Strengths</h3>
          <Radar data={radarData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TeamComparisonCard;