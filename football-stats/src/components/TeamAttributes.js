import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { getTeamStatistics } from '../services/api';

const TeamAttributes = ({ teamId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeamStatistics = async () => {
      try {
        const teamStats = await getTeamStatistics(teamId);
        console.log('Fetched team statistics:', teamStats); // Log the fetched data
        setData([
          { attribute: 'Attack', value: teamStats.attack },
          { attribute: 'Defense', value: teamStats.defense },
          { attribute: 'Stamina', value: teamStats.stamina },
          { attribute: 'Speed', value: teamStats.speed },
          { attribute: 'Skill', value: teamStats.skill },
        ]);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeamStatistics();
  }, [teamId]);

  if (loading) return (
    <Card>
      <CardContent>
        <Typography>Loading...</Typography>
      </CardContent>
    </Card>
  );
  if (error) return (
    <Card>
      <CardContent>
        <Typography color="error">Error: {error}</Typography>
      </CardContent>
    </Card>
  );

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Team Attributes
        </Typography>
        <RadarChart cx={150} cy={150} outerRadius={100} width={300} height={300} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="attribute" />
          <PolarRadiusAxis />
          <Radar name="Team Attributes" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </CardContent>
    </Card>
  );
};

TeamAttributes.propTypes = {
  teamId: PropTypes.number.isRequired
};

export default TeamAttributes;