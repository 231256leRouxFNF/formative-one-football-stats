import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchTeams } from '../services/api';
import { fetchPlayerStats } from '../services/api';
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
  const [playerStats1, setPlayerStats1] = useState(null);
  const [playerStats2, setPlayerStats2] = useState(null);
  const [loadingTeams, setLoadingTeams] = useState(true);
  const [loadingStats1, setLoadingStats1] = useState(false);
  const [loadingStats2, setLoadingStats2] = useState(false);
  const [error, setError] = useState(null);

  const premierLeagueId = 39; // Premier League ID
  const fixtureId = '215662'; // Example fixture ID

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
      } finally {
        setLoadingTeams(false);
      }
    };
    loadTeams();
  }, []);

  // Handle team selection
  const handleTeamSelect = async (team, setTeam, setPlayerStats, setLoadingStats) => {
    setTeam(team);
    if (team) {
      setLoadingStats(true);
      try {
        const stats = await fetchPlayerStats(fixtureId, team.value);
        setPlayerStats(stats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingStats(false);
      }
    }
  };

  return (
    <div className="comparison-page">
      <h1 className="page-title">Player Comparison</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="comparison-container">
        {/* Team 1 Section */}
        <div className="team-card">
          <div className="team-header">
            {loadingTeams ? (
              <div>Loading teams...</div>
            ) : (
              <Select
                options={teams}
                onChange={(team) => handleTeamSelect(team, setTeam1, setPlayerStats1, setLoadingStats1)}
                placeholder="Select Team 1"
                className="team-select"
              />
            )}
          </div>
          
          {loadingStats1 ? (
            <div>Loading player statistics...</div>
          ) : playerStats1 ? (
            <TeamComparisonCard playerStats={playerStats1} />
          ) : (
            <div>Select a team to view player statistics</div>
          )}
        </div>

        <div className="vs-badge">VS</div>

        {/* Team 2 Section */}
        <div className="team-card">
          <div className="team-header">
            {loadingTeams ? (
              <div>Loading teams...</div>
            ) : (
              <Select
                options={teams}
                onChange={(team) => handleTeamSelect(team, setTeam2, setPlayerStats2, setLoadingStats2)}
                placeholder="Select Team 2"
                className="team-select"
              />
            )}
          </div>

          {loadingStats2 ? (
            <div>Loading player statistics...</div>
          ) : playerStats2 ? (
            <TeamComparisonCard playerStats={playerStats2} />
          ) : (
            <div>Select a team to view player statistics</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;