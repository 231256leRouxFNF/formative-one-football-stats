// src/charts/PlayerStatsChart.jsx

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const PlayerStatsChart = ({ player }) => {
  const data = {
    labels: ["Goals", "Assists", "Matches"],
    datasets: [
      {
        label: `${player.name} Performance`,
        data: [player.goals, player.assists, player.matchesPlayed],
        backgroundColor: "rgba(53, 162, 235, 0.6)",
      },
    ],
  };

  return <Bar data={data} />;
};

export default PlayerStatsChart;
