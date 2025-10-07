import React, { useState, useEffect } from 'react';
import { fetchAllLeagues, fetchLeagueStandings } from '../services/api';
import LeagueCard from '../components/LeagueCard';
import LeagueInfo from '../components/LeagueInfo';
import StandingsTable from '../components/StandingsTable';
import './LeaguesPage.css';

const LeaguesPage = () => {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [standings, setStandings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [standingsLoading, setStandingsLoading] = useState(false);
  const [season, setSeason] = useState(2023);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadLeagues();
  }, []);

  const loadLeagues = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchAllLeagues();
      
      if (response.status && response.data) {
        setLeagues(response.data);
      } else {
        setError('Failed to load leagues');
      }
    } catch (err) {
      console.error('Error loading leagues:', err);
      setError('Failed to load leagues');
    } finally {
      setLoading(false);
    }
  };

  const handleLeagueSelect = async (league) => {
    setSelectedLeague(league);
    setStandingsLoading(true);
    setError(null);
    
    try {
      const response = await fetchLeagueStandings(league.id, season);
      
      if (response.status && response.data) {
        // Handle both API response format and fallback format
        const standingsData = response.data.standings || response.data;
        setStandings(Array.isArray(standingsData) ? standingsData : []);
      } else {
        setError('Failed to load standings');
      }
    } catch (err) {
      console.error('Error loading standings:', err);
      setError('Failed to load standings');
    } finally {
      setStandingsLoading(false);
    }
  };

  const handleSeasonChange = (newSeason) => {
    setSeason(newSeason);
    if (selectedLeague) {
      handleLeagueSelect(selectedLeague);
    }
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const generateSeasonOptions = () => {
    const currentYear = getCurrentYear();
    const seasons = [];
    for (let year = currentYear; year >= 2020; year--) {
      seasons.push(year);
    }
    return seasons;
  };

  if (loading) {
    return (
      <div className="leagues-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading leagues...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="leagues-page">
      <div className="leagues-header">
        <h1>Football Leagues & Standings</h1>
        <p>Select a league to view current standings and statistics</p>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={loadLeagues} className="retry-button">
            Try Again
          </button>
        </div>
      )}

      <div className="season-selector">
        <label htmlFor="season-select">Season:</label>
        <select 
          id="season-select"
          value={season}
          onChange={(e) => handleSeasonChange(parseInt(e.target.value))}
          className="season-dropdown"
        >
          {generateSeasonOptions().map(year => (
            <option key={year} value={year}>
              {year}-{year + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="leagues-grid">
        {leagues.map((league) => (
          <LeagueCard
            key={league.id}
            league={league}
            onSelectLeague={handleLeagueSelect}
          />
        ))}
      </div>

      {selectedLeague && (
        <div className="standings-section">
          <LeagueInfo league={selectedLeague} season={season} />
          {standingsLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading standings...</p>
            </div>
          ) : standings ? (
            <StandingsTable
              standings={standings}
              leagueName={selectedLeague.name}
              season={`${season}-${season + 1}`}
            />
          ) : (
            <div className="no-data">
              <p>No standings data available for this league and season.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeaguesPage;
