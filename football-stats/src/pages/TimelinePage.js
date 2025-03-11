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
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Team B Performance',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
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
      <h1>Timeline Page</h1>
      <Line data={data} options={options} />
    </div>
  );
};

  console.log('TimelinePage: ANAKIN: Dont make me kill you.');

  
export default TimelinePage;