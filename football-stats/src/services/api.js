import axios from 'axios';
import axiosRateLimit from 'axios-rate-limit';

const API_HOST = 'api-football-v1.p.rapidapi.com';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

// Create rate-limited API instance (1 request per 1.5 seconds)
const api = axiosRateLimit(
  axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  }),
  { maxRequests: 1, perMilliseconds: 1500 }
);

// Add retry interceptor with exponential backoff
api.interceptors.response.use(null, async (error) => {
  const config = error.config;
  if (!config || error.response?.status !== 429) return Promise.reject(error);

  config.__retryCount = config.__retryCount || 0;
  const maxRetries = config.retry || 3;

  if (config.__retryCount >= maxRetries) {
    return Promise.reject(error);
  }

  config.__retryCount += 1;
  const delay = Math.pow(2, config.__retryCount) * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return api(config);
});

// Unified API request handler
const handleRequest = async (endpoint, params = {}, retry = 3) => {
  try {
    const response = await api.get(endpoint, {
      params,
      retry,
    });
    return response.data.response;
  } catch (error) {
    console.error(`API Error in ${endpoint}:`, error.message);
    throw error;
  }
};

// API functions
export const fetchTeams = async () => {
  return handleRequest('/teams', { league: 39, season: 2023 });
};

export const fetchTeamFixtures = async (teamId, season) => {
  return handleRequest('/fixtures', { team: teamId, season });
};

export const fetchTeamStats = async (teamId, leagueId) => {
  return handleRequest('/teams/statistics', {
    team: teamId,
    league: leagueId,
    season: 2023,
  });
};

export const getRecentMatches = async (options = {}) => {
  const params = {
    league: '39',
    season: '2023',
    last: '3',
    ...options,
  };

  const matches = await handleRequest('/fixtures', params);
  return matches.map((match) => ({
    team1: match.teams.home.name,
    team2: match.teams.away.name,
    score1: match.goals.home,
    score2: match.goals.away,
    date: new Date(match.fixture.date).toLocaleDateString(),
    team1Logo: match.teams.home.logo,
    team2Logo: match.teams.away.logo,
    status: match.fixture.status.short,
  }));
};

export const getTeamStatistics = async (teamId, options = {}) => {
  const params = {
    league: '39',
    season: '2023',
    team: teamId,
    ...options
  };

  const stats = await handleRequest('/teams/statistics', params);
  return transformTeamStats(stats);
};

const transformTeamStats = (stats) => ({
  attack: Math.min(100, Math.round(
    (stats.goals?.for?.total / stats.fixtures?.played?.total) * 15 +
    (stats.shots?.on?.total / stats.fixtures?.played?.total) * 2
  )),
  defense: Math.min(100, Math.round(
    100 - (stats.goals?.against?.total / stats.fixtures?.played?.total) * 10 +
    (stats.clean_sheet?.total / stats.fixtures?.played?.total) * 20
  )),
  stamina: Math.min(100, Math.round(
    (stats.goals?.for?.minute['46-60']?.total + 
     stats.goals?.for?.minute['76-90']?.total) * 4
  )),
  speed: Math.min(100, Math.round(
    stats.passes?.total / stats.fixtures?.played?.total / 50 +
    stats.dribbles?.success * 0.5
  )),
  skill: Math.min(100, Math.round(
    stats.passes?.accuracy +
    stats.dribbles?.success / 2
  ))
});

export const getGoalsPerLeague = async (season = '2023') => {
  const stats = await handleRequest('/teams/statistics', {
    league: 39,
    season
  });
  return stats.map(team => ({
    name: team.team.name,
    goals: team.goals.for.total || 0
  }));
};

export const getStandings = async (season = '2023') => {
  const standings = await handleRequest('/standings', {
    league: 39,
    season,
  });
  return standings[0].league.standings[0].map((team) => ({
    name: team.team.name,
    points: team.points,
    goals: team.all.goals.for,
  }));
};

export const getTopScorer = async (season = '2023') => {
  const topScorer = await handleRequest('/players/topscorers', {
    league: 39,
    season,
  });
  return {
    player: topScorer[0].player.name,
    team: topScorer[0].statistics[0].team.name,
    goals: topScorer[0].statistics[0].goals.total,
    photo: topScorer[0].player.photo,
  };
};

export const fetchPlayers = async () => {
  return handleRequest('/players', { league: 39, season: 2023 });
};

export const fetchPlayerStats = async (fixtureId, teamId) => {
  return handleRequest('/fixtures/statistics', {
    fixture: fixtureId,
    team: teamId
  });
};

export const fetchInjuryData = async (seasonStartDate, seasonEndDate, leagueId = 39) => {
  const getDateRange = (start, end) => {
    const dates = [];
    const current = new Date(start);
    while (current <= new Date(end)) {
      dates.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const dates = getDateRange(seasonStartDate, seasonEndDate);
  const results = [];

  for (const date of dates) {
    try {
      const response = await handleRequest('/injuries', { date, league: leagueId });
      results.push({ date, count: response.length });
    } catch (err) {
      results.push({ date, count: 0 });
    }
  }

  return results;
};

export default api;