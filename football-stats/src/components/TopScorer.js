import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { getTopScorer } from '../services/api';
import './TopScorer.css';

const TopScorer = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopScorer = async () => {
      try {
        const data = await getTopScorer();
        setPlayerData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopScorer();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box className="top-scorer-container">
      <Card variant="outlined" className="top-scorer-card">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Top Scorer
          </Typography>
          <Box className="top-scorer-content">
            <Avatar
              alt={playerData.player}
              src={playerData.photo}
              className="top-scorer-avatar"
            />
            <Box>
              <Typography variant="body1">{playerData.player}</Typography>
              <Typography variant="body2" color="textSecondary">
                {playerData.team}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" className="top-scorer-player">
            {playerData.goals}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Goals this season
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopScorer;