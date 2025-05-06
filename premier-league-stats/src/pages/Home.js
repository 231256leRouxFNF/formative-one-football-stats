// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getStandings, getTopScorers } from './api/footballAPI';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Box } from '@mui/material';

const Home = () => {
  const [standings, setStandings] = useState([]);
  const [topScorers, setTopScorers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const standingsData = await getStandings();
      const scorersData = await getTopScorers();
      setStandings(standingsData);
      setTopScorers(scorersData);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Premier League Standings
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map((team) => (
            <TableRow key={team.team.id}>
              <TableCell>{team.rank}</TableCell>
              <TableCell>{team.team.name}</TableCell>
              <TableCell>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Top Scorers
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Goals</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topScorers.map((player) => (
            <TableRow key={player.player.id}>
              <TableCell>{player.player.name}</TableCell>
              <TableCell>{player.statistics[0].team.name}</TableCell>
              <TableCell>{player.statistics[0].goals.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Home;
