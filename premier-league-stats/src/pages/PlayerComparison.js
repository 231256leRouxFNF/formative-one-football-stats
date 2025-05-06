// src/pages/PlayerComparison.jsx
import React, { useState } from 'react';
import { getPlayerStats } from './api/footballAPI';
import { TextField, Button, Box, Typography } from '@mui/material';
import ChartComponent from '../components/ChartComponent';

const PlayerComparison = () => {
  const [player1Id, setPlayer1Id] = useState('');
  const [player2Id, setPlayer2Id] = useState('');
  const [player1Stats, setPlayer1Stats] = useState(null);
  const [player2Stats, setPlayer2Stats] = useState(null);

  const handleCompare = async () => {
    const stats1 = await getPlayerStats(player1Id);
    const stats2 = await getPlayerStats(player2Id);
    setPlayer1Stats(stats1);
    setPlayer2Stats(stats2);
  };

  const chartData = {
    labels: ['Goals', 'Assists', 'Passes', 'Tackles'],
    datasets: [
      {
        label: player1Stats?.player.name || 'Player 1',
        data: [
          player1Stats?.statistics[0].goals.total || 0,
          player1Stats?.statistics[0].goals.assists || 0,
          player1Stats?.statistics[0].passes.total || 0,
          player1Stats?.statistics[0].tackles.total || 0,
        ],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: player2Stats?.player.name || 'Player 2',
        data: [
          player2Stats?.statistics[0].goals.total || 0,
          player2Stats?.statistics[0].goals.assists || 0,
          player2Stats?.statistics[0].passes.total || 0,
          player2Stats?.statistics[0].tackles.total || 0,
        ],
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Player Comparison',
      },
    },
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Player Comparison
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Player 1 ID"
          variant="outlined"
          value={player1Id}
          onChange={(e) => setPlayer1Id(e.target.value)}
        />
        <TextField
          label="Player 2 ID"
          variant="outlined"
          value={player2Id}
          onChange={(e) => setPlayer2Id(e.target.value)}
        />
        <Button variant="contained" onClick={handleCompare}>
          Compare
        </Button>
      </Box>
     
::contentReference[oaicite:0]{index=0}
 
{player1Stats && player2Stats && (
        <ChartComponent data={chartData} options={chartOptions} />
      )}
    </Box>
  );
};

export default PlayerComparison;
