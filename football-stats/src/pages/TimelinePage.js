import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

console.log('TimelinePage: ANAKIN: Dont lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, justice, freedom, and security to my new Empire.');

const TimelinePage = () => {
  console.log('TimelinePage: OBI-WAN: Your new Empire?');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Team A Performance',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(0, 100, 0, 0.4)', // Dark green with transparency
        borderColor: 'rgba(0, 100, 0, 1)', // Dark green
      },
      {
        label: 'Team B Performance',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: 'rgba(255, 0, 0, 0.4)', // Red with transparency
        borderColor: 'rgba(255, 0, 0, 1)', // Red
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Team Performance Over Time',
      },
    },
  };

  return (
    <div className="container mt-5">
      <h1 style={{ color: '#006400' }}>Timeline Page</h1>
      <Line data={data} options={options} />
    </div>
  );
};

console.log('TimelinePage: ANAKIN: Dont make me kill you.');

export default TimelinePage;