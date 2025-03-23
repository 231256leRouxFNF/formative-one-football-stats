// api.js
import axios from 'axios';

const API_KEY = 'YOUR_RAPIDAPI_KEY';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
};

export const fetchLeagues = async () => {
  const response = await axios.get(`${BASE_URL}/leagues`, { headers });
  return response.data.response;
};

export const fetchTeams = async (leagueId) => {
  const response = await axios.get(`${BASE_URL}/teams?league=${leagueId}&season=2023`, { headers });
  return response.data.response;
};

export const fetchTeamStats = async (teamId, leagueId) => {
  const response = await axios.get(`${BASE_URL}/teams/statistics?league=${leagueId}&team=${teamId}&season=2023`, { headers });
  return response.data.response;
};
