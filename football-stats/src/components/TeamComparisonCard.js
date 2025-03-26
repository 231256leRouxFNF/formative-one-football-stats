import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { fetchPlayerStats } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TeamComparisonCard = ({ fixtureId, teamId }) => {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const getPlayerStats = async () => {
      const stats = await fetchPlayerStats(fixtureId, teamId);
      setPlayerStats(stats);
    };

    getPlayerStats();
  }, [fixtureId, teamId]);

  if (!playerStats || playerStats.length < 2) {
    return <div>Loading player statistics...</div>;
  }

  const playerA = playerStats[0]?.players[0]; // Example player A
  const playerB = playerStats[1]?.players[0]; // Example player B

  if (!playerA || !playerB) {
    return <div>Insufficient player data available</div>;
  }

  const barData = {
    labels: ['Goals', 'Assists', 'Shots', 'Passes', 'Tackles'],
    datasets: [
      {
        label: playerA.name,
        data: [playerA.statistics.goals, playerA.statistics.assists, playerA.statistics.shots, playerA.statistics.passes, playerA.statistics.tackles],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: playerB.name,
        data: [playerB.statistics.goals, playerB.statistics.assists, playerB.statistics.shots, playerB.statistics.passes, playerB.statistics.tackles],
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="card bg-dark text-white mb-4">
      <div className="card-body">
        <h2 className="card-title">Player Comparison</h2>
        <div className="row">
          <div className="col-md-6 chart-container">
            <h3>Player Statistics Comparison</h3>
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComparisonCard;