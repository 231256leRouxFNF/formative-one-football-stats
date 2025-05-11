// src/pages/InjuryTimeline.jsx
import React, { useEffect, useState } from 'react';
import { getInjuries } from '../api/FootballAPI';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const InjuryTimeline = () => {
  const [injuries, setInjuries] = useState([]);

  useEffect(() => {
    const fetchInjuries = async () => {
      const data = await getInjuries();
      setInjuries(data);
    };
    fetchInjuries();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Injury Timeline
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {injuries.map((injury, idx) => (
            <TableRow key={idx}>
              <TableCell>{injury.player.name}</TableCell>
              <TableCell>{injury.team.name}</TableCell>
              <TableCell>{injury.type}</TableCell>
              <TableCell>{injury.start}</TableCell>
              <TableCell>{injury.end || 'Ongoing'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default InjuryTimeline;
