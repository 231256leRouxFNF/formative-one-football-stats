import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchTeams, fetchTeamStats } from '../services/api';
import TeamComparisonCard from '../components/TeamComparisonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/TeamComparisonCard.css';
import './ComparisonPage.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ComparisonPage = () => {
  const [teams, setTeams] = useState([]);
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [stats1, setStats1] = useState(null);
  const [stats2, setStats2] = useState(null);
  const [error, setError] = useState(null);

  const premierLeagueId = 39; // Premier League ID

  // Load teams on mount
  useEffect(() => {
    const loadTeams = async () => {
      try {
        const data = await fetchTeams(premierLeagueId);
        setTeams(data.map(team => ({
          value: team.team.id,
          label: team.team.name,
          logo: team.team.logo
        })));
      } catch (err) {
        setError(err.message);
      }
    };
    loadTeams();
  }, []);

  // Handle team selection
  const handleTeamSelect = async (team, setTeam, setStats) => {
    setTeam(team);
    if (team) {
      try {
        const stats = await fetchTeamStats(team.value, premierLeagueId);
        setStats(stats);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // Static data for initial display
  const teamA = {
    name: 'Team A',
    wins: 10,
    losses: 5,
    draws: 3,
    goalsScored: 25,
    goalsConceded: 15,
  };

  const teamB = {
    name: 'Team B',
    wins: 8,
    losses: 7,
    draws: 3,
    goalsScored: 20,
    goalsConceded: 18,
  };

  // Chart options to move the legend below the chart and place legends next to each other
  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom', // Move the legend to the bottom
        align: 'start', // Align legends next to each other
        labels: {
          boxWidth: 20,
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="comparison-page">
      <h1 className="page-title">Team Comparison</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="comparison-container">
        {/* Team 1 Section */}
        <div className="team-card">
          <div className="team-header">
            <Select
              options={teams}
              onChange={(team) => handleTeamSelect(team, setTeam1, setStats1)}
              placeholder="Select Team 1"
              className="team-select"
            />
          </div>
          
          {stats1 ? (
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-label">Goals</span>
                <span className="stat-value">{stats1.goals.for.total.total}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Won</span>
                <span className="stat-value">{stats1.fixtures.wins.total}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Lost</span>
                <span className="stat-value">{stats1.fixtures.loses.total}</span>
              </div>
            </div>
          ) : (
            <TeamComparisonCard team={teamA} chartOptions={chartOptions} />
          )}
        </div>

        <div className="vs-badge">VS</div>

        {/* Team 2 Section */}
        <div className="team-card">
          <div className="team-header">
            <Select
              options={teams}
              onChange={(team) => handleTeamSelect(team, setTeam2, setStats2)}
              placeholder="Select Team 2"
              className="team-select"
            />
          </div>

          {stats2 ? (
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-label">Goals</span>
                <span className="stat-value">{stats2.goals.for.total.total}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Won</span>
                <span className="stat-value">{stats2.fixtures.wins.total}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Lost</span>
                <span className="stat-value">{stats2.fixtures.loses.total}</span>
              </div>
            </div>
          ) : (
            <TeamComparisonCard team={teamB} chartOptions={chartOptions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;