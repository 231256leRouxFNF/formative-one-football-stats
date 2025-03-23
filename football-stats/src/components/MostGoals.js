import * as React from 'react';
import './MostGoals.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for the bar chart
const data = [
  { name: 'Player A', goals: 10 },
  { name: 'Player B', goals: 8 },
  { name: 'Player C', goals: 12 },
  { name: 'Player D', goals: 7 },
  { name: 'Player E', goals: 9 },
];

const chart = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Most Goals by Players
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="goals" 
            name="Goals" 
            fill="#1976d2" // Using MUI primary color
          />
        </BarChart>
      </div>
    </CardContent>
  </React.Fragment>
);

export default function MostGoals() {
  return (
    <Box sx={{ width: '100%', margin: '10px auto', height: '500px' }}> {/* Increased height */}
      <Card variant="outlined">{chart}</Card>
    </Box>
  );
}