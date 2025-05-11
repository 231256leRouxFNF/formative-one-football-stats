// src/api/footballAPI.js
import axios from 'axios';

const API_BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';
const API_KEY = '4b9b1c34d0msh93dcd20b236efbcp13f3e2jsn8ced65aa9dba';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  },
});

// Helper function to handle API responses and rate limits
const handleApiResponse = async (apiCall) => {
  try {
    const response = await apiCall();
    const rateLimit = response.headers['x-ratelimit-requests-limit'];
    const rateRemaining = response.headers['x-ratelimit-requests-remaining'];
    const minuteLimit = response.headers['x-ratelimit-limit'];
    const minuteRemaining = response.headers['x-ratelimit-remaining'];

    console.log(`Rate Limit: ${rateRemaining}/${rateLimit} requests remaining today.`);
    console.log(`Minute Limit: ${minuteRemaining}/${minuteLimit} requests remaining this minute.`);

    return response.data.response;
  } catch (error) {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else {
      console.error('Network Error:', error.message);
    }
    return null;
  }
};

// Updated getStandings to reduce processing later
export const getStandings = async () => {
  const data = await handleApiResponse(() =>
    api.get('/standings', { params: { league: 39, season: 2023 } })
  );
  return data?.[0]?.league?.standings?.[0]?.map(team => ({
    teamName: team.team.name,
    points: team.points,
    position: team.rank,
  })) || [];
};

// Updated getTopScorers to reduce processing later
export const getTopScorers = async () => {
  const data = await handleApiResponse(() =>
    api.get('/players/topscorers', { params: { league: 39, season: 2023 } })
  );
  return data?.map(player => ({
    name: player.player.name,
    photo: player.player.photo,
    team: player.statistics[0]?.team.name,
    goals: player.statistics[0]?.goals.total,
  })) || [];
};

// Updated getLatestMatches to reduce processing later
export const getLatestMatches = async () => {
  const data = await handleApiResponse(() =>
    api.get('/fixtures', {
      params: {
        league: 39,
        season: 2023,
        last: 2,
      },
    })
  );
  return data?.map(match => ({
    id: match.fixture.id,
    date: match.fixture.date,
    homeTeam: match.teams.home.name,
    awayTeam: match.teams.away.name,
    homeGoals: match.goals.home,
    awayGoals: match.goals.away,
  })) || [];
};

export const getPlayers = async (teamId) => {
  return await handleApiResponse(() =>
    api.get('/players', {
      params: { team: teamId, season: 2023 },
    })
  );
};

export const getPlayerStats = async (playerId) => {
  const data = await handleApiResponse(() =>
    api.get('/players', {
      params: { id: playerId, season: 2023 },
    })
  );
  return data ? data[0] : null;
};

export const getInjuries = async () => {
  return await handleApiResponse(() =>
    api.get('/injuries', {
      params: { league: 39, season: 2023 },
    })
  );
};
