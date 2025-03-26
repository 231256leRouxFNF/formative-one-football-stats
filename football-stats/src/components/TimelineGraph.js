import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchTeamFixtures } from '../services/api';
import { getCache, setCache } from '../services/cache';
import './TimelineGraph.css';

const TimelineGraph = ({ teams }) => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [goalData, setGoalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTeamChange = async (event) => {
    const teamId = event.target.value;
    setSelectedTeam(teamId);
    setLoading(true);
    setError(null);

    const cacheKey = `fixtures_${teamId}`;
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      setGoalData(cachedData);
      setLoading(false);
      return;
    }

    try {
      const seasons = [2018, 2019, 2020, 2021, 2022, 2023];
      const promises = seasons.map((season) => fetchTeamFixtures(teamId, season));
      const results = await Promise.all(promises);

      const data = results.flat().map((fixture) => ({
        date: fixture.fixture.date,
        goals: fixture.goals?.for?.total || 0, // Add checks to ensure goals data exists
      }));

      setGoalData(data);
      setCache(cacheKey, data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: goalData.map((item) => new Date(item.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Goals',
        data: goalData.map((item) => item.goals),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Goals Over Time',
      },
    },
  };

  return (
    <div className="timeline-graph">
      <Select
        value={selectedTeam}
        onChange={handleTeamChange}
        displayEmpty
        className="team-select"
      >
        <MenuItem value="" disabled>
          Select a Team
        </MenuItem>
        {teams.map((team) => (
          <MenuItem key={team.team.id} value={team.team.id}>
            <img src={team.team.logo} alt={team.team.name} className="team-logo" />
            {team.team.name}
          </MenuItem>
        ))}
      </Select>

      {loading && <CircularProgress />}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && goalData.length > 0 && (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

TimelineGraph.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default TimelineGraph;