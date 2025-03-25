import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getStandings } from '../services/api';

export default function MostGoals() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStandingsData = async () => {
      try {
        const standingsData = await getStandings();
        console.log('Fetched standings data:', standingsData); // Log the fetched data
        setData(standingsData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadStandingsData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box sx={{ width: '100%', margin: '10px auto', paddingLeft: '20px' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Team Comparison (Points/Goals)
          </Typography>
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="points" 
              name="Points" 
              fill="#1976d2" // Using MUI primary color
            />
            <Bar 
              dataKey="goals" 
              name="Goals" 
              fill="#82ca9d" // Using a different color for goals
            />
          </BarChart>
        </CardContent>
      </Card>
    </Box>
  );

}