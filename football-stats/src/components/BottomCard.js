import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for the bar chart
const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 6000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
];

const chart = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Monthly Sales Report
      </Typography>
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
          dataKey="uv" 
          name="Monthly Sales" 
          fill="#1976d2" // Using MUI primary color
        />
      </BarChart>
    </CardContent>
    <CardActions>
      <Button size="small">View Details</Button>
    </CardActions>
  </React.Fragment>
);

export default function BottomCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 500, margin: '10px auto' }}>
      <Card variant="outlined">{chart}</Card>
    </Box>
  );
}