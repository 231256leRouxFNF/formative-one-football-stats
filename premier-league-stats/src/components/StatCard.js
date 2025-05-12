// src/components/StatCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const StatCard = ({ title, stats }) => {
  if (!stats) {
    return (
      <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          No stats available.
        </Typography>
      </Box>
    );
  }

  const data = {
    labels: ['Goals', 'Assists', 'Appearances'],
    datasets: [
      {
        label: title,
        data: [stats.goals, stats.assists, stats.appearances],
        backgroundColor: ['#3f51b5', '#f50057', '#ff9800'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default StatCard;
