import React, { useEffect, useState } from 'react';
import { getStandings, getTopScorers, getLatestMatches } from '../api/FootballAPI';
import {
  Box, Typography, Card, CardContent, Avatar // Removed Grid
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Home = () => {
  const [standings, setStandings] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [latestMatches, setLatestMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const standingsData = await getStandings();
      const scorersData = await getTopScorers();
      const matches = await getLatestMatches();
      setStandings(standingsData || []);
      setTopScorers(scorersData || []);
      setLatestMatches(matches || []);
    };
    fetchData();
  }, []);

  const standingsChart = {
    labels: standings.map(team => team.team.name),
    datasets: [{
      label: 'Points',
      data: standings.map(team => team.points),
      borderColor: 'green',
      tension: 0.3,
    }]
  };

  const scorersChart = {
    labels: topScorers.map(scorer => scorer?.name || 'Unknown Player'),
    datasets: [{
      label: 'Goals',
      data: topScorers.map(scorer => scorer?.goals || 0),
      borderColor: 'blue',
      tension: 0.3,
    }]
  };

  const topScorer = topScorers?.[0];

  return (
    <Box sx={{ padding: 3, marginLeft: '150px' }}>
      <Typography variant="h4" gutterBottom>Premier League Stats</Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'center',
      }}>
        <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
          <Line data={standingsChart} />
        </Box>
        <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
          <Line data={scorersChart} />
        </Box>
      </Box>

      {topScorer && (
        <Card sx={{
          mt: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: 2,
          maxWidth: 500,
        }}>
          <Avatar src={topScorer?.photo || ''} sx={{ width: 80, height: 80, mr: 2 }} />
          <CardContent>
            <Typography variant="h6">{topScorer?.name || 'Unknown Player'}</Typography>
            <Typography>Team: {topScorer?.team || 'Unknown Team'}</Typography>
            <Typography>Goals: {topScorer?.goals || 0}</Typography>
          </CardContent>
        </Card>
      )}

      <Typography variant="h5" sx={{ mt: 4 }}>Latest Matches</Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}>
        {latestMatches.map((match) => (
          <Card key={match?.id || Math.random()} sx={{ minWidth: 280 }}>
            <CardContent>
              <Typography>
                {match?.homeTeam || 'Unknown Team'} {match?.homeGoals || 0} - {match?.awayGoals || 0} {match?.awayTeam || 'Unknown Team'}
              </Typography>
              <Typography variant="caption">
                {match?.date ? new Date(match.date).toLocaleString() : 'Unknown Date'}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
