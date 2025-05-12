// src/pages/Home.jsx
import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import StatCard from '../components/StatCard';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mock Data
const overviewStats = [
  { title: 'Total Matches', value: 380 },
  { title: 'Total Goals', value: 1024 },
  { title: 'Top Scorer', value: 'Erling Haaland' },
];

const leagueStandings = [
  { position: 1, team: 'Manchester City', played: 38, points: 90 },
  { position: 2, team: 'Liverpool', played: 38, points: 85 },
  { position: 3, team: 'Chelsea', played: 38, points: 78 },
  // Add more teams as needed
];

const topScorers = {
  labels: ['Erling Haaland', 'Mohamed Salah', 'Harry Kane', 'Bruno Fernandes', 'Son Heung-min'],
  datasets: [
    {
      label: 'Goals',
      data: [30, 25, 22, 20, 18],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Premier League Dashboard
      </Typography>

      {/* Overview Cards */}
      <div className="d-flex flex-wrap mb-3">
        {overviewStats.map((stat) => (
          <div className="p-2 flex-fill" key={stat.title} style={{ minWidth: '200px' }}>
            <StatCard title={stat.title} value={stat.value} />
          </div>
        ))}
      </div>

      {/* League Standings */}
      <Typography variant="h5" gutterBottom>
        League Standings
      </Typography>
      <TableContainer component={Paper} className="mb-3">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Played</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagueStandings.map((team) => (
              <TableRow key={team.position}>
                <TableCell>{team.position}</TableCell>
                <TableCell>{team.team}</TableCell>
                <TableCell>{team.played}</TableCell>
                <TableCell>{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Top Scorers Chart */}
      <Typography variant="h5" gutterBottom>
        Top Scorers
      </Typography>
      <Paper className="p-2">
        <Bar
          data={topScorers}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Top Scorers - Goals',
              },
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default Home;
