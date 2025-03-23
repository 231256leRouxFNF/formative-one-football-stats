import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './MostGoals.css';

const MostGoals = ({ data }) => {
  return (
    <Box sx={{ width: '100%', margin: '10px auto', height: '500px' }} className="most-goals-card">
      <Card variant="outlined">
        <CardContent className="most-goals-card-content">
          <Typography variant="h6" gutterBottom>
            Most Goals by Players
          </Typography>
          <div className="most-goals-chart">
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
              <Bar dataKey="goals" name="Goals" fill="#1976d2" />
            </BarChart>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MostGoals;