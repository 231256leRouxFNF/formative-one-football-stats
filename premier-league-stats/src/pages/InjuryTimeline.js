// src/pages/InjuryTimeline.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { injuryData } from '../data/injuries';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const InjuryTimeline = () => {
  // Prepare data for the chart
  const labels = injuryData.map((entry) => entry.player);
  const datasets = [
    {
      label: 'Injury Duration',
      data: injuryData.map((entry) => ({
        x: [new Date(entry.start), new Date(entry.end)],
        y: entry.player,
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ];

  const options = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        type: 'time',
        position: 'bottom',
        time: {
          unit: 'month',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Player',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Premier League Injury Timeline',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            // Find the corresponding entry in injuryData based on the player's name (y-axis label)
            const playerName = context.raw.y;
            const entry = injuryData.find((item) => item.player === playerName);
            if (entry) {
              return `${entry.injury}: ${entry.start} to ${entry.end}`;
            }
            return 'No data available';
          },
        },
      },
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Injury Timeline
      </Typography>
      <div className="d-flex flex-column align-items-center">
        <div className="w-100 mb-3">
          <Bar data={{ labels, datasets }} options={options} />
        </div>
      </div>
    </Box>
  );
};

export default InjuryTimeline;
