import React from 'react';
import './StandingsTable.css';

const StandingsTable = ({ standings, leagueName, season }) => {
  if (!standings || standings.length === 0) {
    return (
      <div className="standings-container">
        <h2>{leagueName} - {season} Season</h2>
        <p>No standings data available</p>
      </div>
    );
  }

  return (
    <div className="standings-container">
      <h2>{leagueName} - {season} Season</h2>
      <div className="standings-table-wrapper">
        <table className="standings-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr key={team.id || index} className={getRowClassName(index, standings.length)}>
                <td className="position">{team.stats?.find(s => s.name === 'rank')?.value || index + 1}</td>
                <td className="team-name">
                  <div className="team-info">
                    {team.team?.logos?.[0] && (
                      <img 
                        src={team.team.logos[0].href} 
                        alt={`${team.team.displayName} logo`}
                        className="team-logo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <span>{team.team?.displayName || team.team?.name || 'Unknown Team'}</span>
                  </div>
                </td>
                <td>{team.stats?.find(s => s.name === 'gamesPlayed')?.value || 0}</td>
                <td>{team.stats?.find(s => s.name === 'wins')?.value || 0}</td>
                <td>{team.stats?.find(s => s.name === 'ties')?.value || 0}</td>
                <td>{team.stats?.find(s => s.name === 'losses')?.value || 0}</td>
                <td>{team.stats?.find(s => s.name === 'pointsFor')?.value || 0}</td>
                <td>{team.stats?.find(s => s.name === 'pointsAgainst')?.value || 0}</td>
                <td className={getGoalDifferenceClass(team)}>
                  {getGoalDifference(team)}
                </td>
                <td className="points">{team.stats?.find(s => s.name === 'points')?.value || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getRowClassName = (index, totalTeams) => {
  if (index < 4) return 'champions-league';
  if (index < 6) return 'europa-league';
  if (index >= totalTeams - 3) return 'relegation';
  return '';
};

const getGoalDifference = (team) => {
  const goalsFor = team.stats?.find(s => s.name === 'pointsFor')?.value || 0;
  const goalsAgainst = team.stats?.find(s => s.name === 'pointsAgainst')?.value || 0;
  const difference = goalsFor - goalsAgainst;
  return difference > 0 ? `+${difference}` : difference.toString();
};

const getGoalDifferenceClass = (team) => {
  const goalsFor = team.stats?.find(s => s.name === 'pointsFor')?.value || 0;
  const goalsAgainst = team.stats?.find(s => s.name === 'pointsAgainst')?.value || 0;
  const difference = goalsFor - goalsAgainst;
  
  if (difference > 0) return 'positive-gd';
  if (difference < 0) return 'negative-gd';
  return 'neutral-gd';
};

export default StandingsTable;
