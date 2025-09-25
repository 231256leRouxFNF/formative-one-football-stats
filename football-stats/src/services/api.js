import { getMockData, mockMatches, mockTopScorer, mockStandings, mockPlayers, mockInjuryData, mockGoalsPerLeague, mockTeamStats } from '../data/dummyData';

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

// Export mock data directly for components that need it
export { mockMatches, mockTopScorer, mockStandings, mockPlayers, mockInjuryData, mockGoalsPerLeague, mockTeamStats };
