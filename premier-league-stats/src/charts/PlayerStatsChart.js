import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function PlayerStatsChart({ stats }) {
  const data = {
    labels: stats.map(item => item.date),
    datasets: [{
      label: 'Goals',
      data: stats.map(item => item.goals),
      borderColor: '#007bff',
      fill: false
    }]
  };

  return <Line data={data} />;
}
