import axios from 'axios';

const API_URL = 'https://api-football-v1.p.rapidapi.com/v3';
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  },
});

export const fetchRecentMatches = async () => {
  try {
    const response = await api.get('/fixtures', { params: { last: 5 } });
    return response.data.response;
  } catch (error) {
    console.error('Failed to fetch recent matches:', error);
    throw error;
  }
};

export const fetchMostGoals = async () => {
  try {
    const response = await api.get('/standings', { params: { season: 2023, league: 39 } });
    return response.data.response[0].league.standings[0];
  } catch (error) {
    console.error('Failed to fetch most goals:', error);
    throw error;
  }
};

export const fetchTopScorer = async () => {
  try {
    const response = await api.get('/players/topscorers', { params: { season: 2023, league: 39 } });
    return response.data.response[0];
  } catch (error) {
    console.error('Failed to fetch top scorer:', error);
    throw error;
  }
};