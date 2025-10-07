import { getMockData, mockMatches, mockTopScorer, mockStandings, mockPlayers, mockInjuryData, mockGoalsPerLeague, mockTeamStats } from '../data/dummyData';

// Football Standings API base URL - using alternative endpoint
const FOOTBALL_STANDINGS_API_BASE = 'https://api-football-standings.azharimm.dev';

// Mock API functions that simulate the original API interface
export const fetchTeams = async () => {
  return await getMockData('players');
};

export const fetchTeamFixtures = async (teamId, season) => {
  return await getMockData('matches');
};

export const fetchTeamStats = async (teamId, leagueId) => {
  return await getMockData('teamStats', { teamName: teamId });
};

export const getRecentMatches = async (options = {}) => {
  const matches = await getMockData('matches', { limit: options.last || 5 });
  return matches;
};

export const getTeamStatistics = async (teamId, options = {}) => {
  const teamName = getTeamNameById(teamId);
  return await getMockData('teamStats', { teamName });
};

// Helper function to map team IDs to names
const getTeamNameById = (teamId) => {
  const teamMap = {
    '1': 'Manchester City',
    '2': 'Arsenal',
    '3': 'Liverpool',
    '4': 'Newcastle',
    '5': 'Manchester United',
    '6': 'Tottenham',
    '7': 'Brighton',
    '8': 'Aston Villa',
    '9': 'West Ham',
    '10': 'Chelsea'
  };
  return teamMap[teamId] || 'Manchester City';
};

export const getGoalsPerLeague = async (season = '2023') => {
  return await getMockData('goalsPerLeague');
};

export const getStandings = async (season = '2023') => {
  return await getMockData('standings');
};

export const getTopScorer = async (season = '2023') => {
  return await getMockData('topScorer');
};

export const fetchPlayers = async () => {
  return await getMockData('players');
};

export const fetchPlayerStats = async (fixtureId, teamId) => {
  const players = await getMockData('players');
  return players.filter(player => player.team.includes(getTeamNameById(teamId)));
};

export const fetchInjuryData = async (seasonStartDate, seasonEndDate, leagueId = 39) => {
  return await getMockData('injuryData');
};

export const fetchPlayerData = async (playerId, season) => {
  const players = await getMockData('players');
  return players.find(player => player.id === parseInt(playerId)) || players[0];
};

export const fetchInjuries = async (leagueId, season) => {
  return await getMockData('injuryData');
};

// Football Standings API functions
export const fetchAllLeagues = async () => {
  try {
    const response = await fetch(`${FOOTBALL_STANDINGS_API_BASE}/leagues`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching leagues:', error);
    // Fallback to mock leagues data
    return { 
      status: true, 
      data: [
        {
          id: 'eng.1',
          name: 'English Premier League',
          slug: 'english-premier-league',
          abbr: 'Prem',
          logos: {
            light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
            dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/23.png'
          }
        },
        {
          id: 'esp.1',
          name: 'Spanish La Liga',
          slug: 'spanish-la-liga',
          abbr: 'La Liga',
          logos: {
            light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/15.png',
            dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/15.png'
          }
        },
        {
          id: 'ger.1',
          name: 'German Bundesliga',
          slug: 'german-bundesliga',
          abbr: 'Bundesliga',
          logos: {
            light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/10.png',
            dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/10.png'
          }
        },
        {
          id: 'ita.1',
          name: 'Italian Serie A',
          slug: 'italian-serie-a',
          abbr: 'Serie A',
          logos: {
            light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/12.png',
            dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/12.png'
          }
        },
        {
          id: 'fra.1',
          name: 'French Ligue 1',
          slug: 'french-ligue-1',
          abbr: 'Ligue 1',
          logos: {
            light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/9.png',
            dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/9.png'
          }
        }
      ]
    };
  }
};

export const fetchLeagueDetails = async (leagueId) => {
  try {
    const response = await fetch(`${FOOTBALL_STANDINGS_API_BASE}/leagues/${leagueId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching league details:', error);
    return { status: false, data: null };
  }
};

export const fetchLeagueSeasons = async (leagueId) => {
  try {
    const response = await fetch(`${FOOTBALL_STANDINGS_API_BASE}/leagues/${leagueId}/seasons`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching league seasons:', error);
    return { status: false, data: null };
  }
};

export const fetchLeagueStandings = async (leagueId, season = 2023, sort = 'asc') => {
  try {
    const response = await fetch(`${FOOTBALL_STANDINGS_API_BASE}/leagues/${leagueId}/standings?season=${season}&sort=${sort}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching league standings:', error);
    // Fallback to mock standings data
    return {
      status: true,
      data: {
        name: getLeagueNameById(leagueId),
        abbreviation: getLeagueAbbrById(leagueId),
        seasonDisplay: `${season}-${season + 1}`,
        season: season,
        standings: await getMockData('standings')
      }
    };
  }
};

// Helper functions for fallback data
const getLeagueNameById = (leagueId) => {
  const leagueMap = {
    'eng.1': 'English Premier League',
    'esp.1': 'Spanish La Liga',
    'ger.1': 'German Bundesliga',
    'ita.1': 'Italian Serie A',
    'fra.1': 'French Ligue 1'
  };
  return leagueMap[leagueId] || 'Unknown League';
};

const getLeagueAbbrById = (leagueId) => {
  const abbrMap = {
    'eng.1': 'Prem',
    'esp.1': 'La Liga',
    'ger.1': 'Bundesliga',
    'ita.1': 'Serie A',
    'fra.1': 'Ligue 1'
  };
  return abbrMap[leagueId] || 'Unknown';
};

// Export mock data directly for components that need it
export { mockMatches, mockTopScorer, mockStandings, mockPlayers, mockInjuryData, mockGoalsPerLeague, mockTeamStats };
