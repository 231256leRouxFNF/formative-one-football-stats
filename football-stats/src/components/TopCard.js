import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';
import './TopCard.css';

// Sample data for the radar chart
const data = [
  { attribute: 'Attack', value: 80 },
  { attribute: 'Defense', value: 70 },
  { attribute: 'Speed', value: 90 },
  { attribute: 'Strength', value: 85 },
  { attribute: 'Stamina', value: 75 },
];

const chart = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Team Attributes
      </Typography>
      <RadarChart
        cx={200}
        cy={150}
        outerRadius={100}
        width={400}
        height={300}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="attribute" />
        <PolarRadiusAxis />
        <Tooltip />
        <Legend />
        <Radar
          name="Team A"
          dataKey="value"
          stroke="#1976d2"
          fill="#1976d2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </CardContent>
  </React.Fragment>
);

export default function TopCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 500, margin: '10px auto' }}>
      <Card variant="outlined">{chart}</Card>
    </Box>
  );
}