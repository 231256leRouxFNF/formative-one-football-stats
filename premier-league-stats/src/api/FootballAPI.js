// src/api/footballAPI.js
import axios from 'axios';

const API_BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  },
});

export const getStandings = async () => {
  try {
    const response = await api.get('/standings', {
      params: { league: 39, season: 2023 },
    });
    return response.data.response[0].league.standings[0];
  } catch (error) {
    console.error('Error fetching standings:', error);
    return [];
  }
};

export const getTopScorers = async () => {
  try {
    const response = await api.get('/players/topscorers', {
      params: { league: 39, season: 2023 },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching top scorers:', error);
    return [];
  }
};

export const getPlayers = async (teamId) => {
  try {
    const response = await api.get('/players', {
      params: { team: teamId, season: 2023 },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

export const getPlayerStats = async (playerId) => {
  try {
    const response = await api.get('/players', {
      params: { id: playerId, season: 2023 },
    });
    return response.data.response[0];
  } catch (error) {
    console.error('Error fetching player stats:', error);
    return null;
  }
};

export const getInjuries = async () => {
  try {
    const response = await api.get('/injuries', {
      params: { league: 39, season: 2023 },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching injuries:', error);
    return [];
  }
};
