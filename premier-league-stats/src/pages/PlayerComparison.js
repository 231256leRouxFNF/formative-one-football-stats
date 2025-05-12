// src/pages/PlayerComparison.jsx
import React, { useState } from 'react';
import { Box, Typography, Autocomplete, TextField } from '@mui/material';
import StatCard from '../components/StatCard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Mock data
const teams = [
  { label: 'Manchester United', players: ['Bruno Fernandes', 'Marcus Rashford'] },
  { label: 'Liverpool', players: ['Mohamed Salah', 'Virgil van Dijk'] },
  { label: 'Manchester City', players: ['Kevin De Bruyne', 'Erling Haaland'] },
  // Add more teams and players as needed
];

const mockStats = {
  'Bruno Fernandes': { goals: 12, assists: 8, appearances: 30 },
  'Marcus Rashford': { goals: 15, assists: 5, appearances: 28 },
  'Mohamed Salah': { goals: 20, assists: 10, appearances: 32 },
  'Virgil van Dijk': { goals: 3, assists: 2, appearances: 30 },
  'Kevin De Bruyne': { goals: 10, assists: 15, appearances: 29 },
  'Erling Haaland': { goals: 25, assists: 5, appearances: 27 },
};

const PlayerComparison = () => {
  const [selectedTeam1, setSelectedTeam1] = useState(null);
  const [selectedPlayer1, setSelectedPlayer1] = useState(null);
  const [selectedTeam2, setSelectedTeam2] = useState(null);
  const [selectedPlayer2, setSelectedPlayer2] = useState(null);

  const handleTeamChange1 = (event, newValue) => {
    setSelectedTeam1(newValue);
    setSelectedPlayer1(null); // Reset player selection when team changes
  };

  const handlePlayerChange1 = (event, newValue) => {
    setSelectedPlayer1(newValue);
  };

  const handleTeamChange2 = (event, newValue) => {
    setSelectedTeam2(newValue);
    setSelectedPlayer2(null); // Reset player selection when team changes
  };

  const handlePlayerChange2 = (event, newValue) => {
    setSelectedPlayer2(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Player Comparison
      </Typography>

      {/* Two StatCards Side by Side */}
      <div className="d-flex flex-wrap">
        {/* StatCard 1 */}
        <div className="p-2 flex-fill" style={{ minWidth: '300px' }}>
          <Typography variant="h6" gutterBottom>
            Player 1
          </Typography>
          <Autocomplete
            options={teams}
            getOptionLabel={(option) => option.label}
            onChange={handleTeamChange1}
            renderInput={(params) => <TextField {...params} label="Select Team" variant="outlined" />}
          />
          <Autocomplete
            options={selectedTeam1 ? selectedTeam1.players : []}
            getOptionLabel={(option) => option}
            onChange={handlePlayerChange1}
            renderInput={(params) => <TextField {...params} label="Select Player" variant="outlined" />}
            disabled={!selectedTeam1}
          />
          {selectedPlayer1 && (
            <StatCard
              title={selectedPlayer1}
              stats={mockStats[selectedPlayer1]}
            />
          )}
        </div>

        {/* StatCard 2 */}
        <div className="p-2 flex-fill" style={{ minWidth: '300px' }}>
          <Typography variant="h6" gutterBottom>
            Player 2
          </Typography>
          <Autocomplete
            options={teams}
            getOptionLabel={(option) => option.label}
            onChange={handleTeamChange2}
            renderInput={(params) => <TextField {...params} label="Select Team" variant="outlined" />}
          />
          <Autocomplete
            options={selectedTeam2 ? selectedTeam2.players : []}
            getOptionLabel={(option) => option}
            onChange={handlePlayerChange2}
            renderInput={(params) => <TextField {...params} label="Select Player" variant="outlined" />}
            disabled={!selectedTeam2}
          />
          {selectedPlayer2 && (
            <StatCard
              title={selectedPlayer2}
              stats={mockStats[selectedPlayer2]}
            />
          )}
        </div>
      </div>
    </Box>
  );
};

export default PlayerComparison;
