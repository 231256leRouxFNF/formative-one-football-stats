import axios from 'axios';

const API_HOST = 'api-football-v1.p.rapidapi.com';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

const headers = {
  'X-RapidAPI-Key': '4b9b1c34d0msh93dcd20b236efbcp13f3e2jsn8ced65aa9dba',
  'X-RapidAPI-Host': API_HOST
};

const RAPIDAPI_KEY = '4b9b1c34d0msh93dcd20b236efbcp13f3e2jsn8ced65aa9dba'; // Replace with your actual RapidAPI key
const RAPIDAPI_HOST = 'api-football-v1.p.rapidapi.com';

export const fetchTeams = async (leagueId) => {
  const response = await fetch(`https://${RAPIDAPI_HOST}/v3/teams?league=${leagueId}&season=2023`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }

  const data = await response.json();
  return data.response;
};

export const fetchTeamStats = async (teamId, leagueId) => {
  const response = await fetch(`https://${RAPIDAPI_HOST}/v3/teams/statistics?team=${teamId}&league=${leagueId}&season=2023`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch team stats');
  }

  const data = await response.json();
  return data.response;
};

export const getRecentMatches = async (options = {}) => {
  try {
    const params = {
      league: '39',      // Premier League
      season: '2023',
      last: '3',        // Last 10 matches
      ...options
    };

    const response = await axios.get(`${BASE_URL}/fixtures`, { headers, params });
    const data = response.data;

    console.log('Fetched matches data:', data.response); // Log the fetched data

    return data.response.map(match => ({
      team1: match.teams.home.name,
      team2: match.teams.away.name,
      score1: match.goals.home,
      score2: match.goals.away,
      date: new Date(match.fixture.date).toLocaleDateString(),
      team1Logo: match.teams.home.logo,
      team2Logo: match.teams.away.logo,
      status: match.fixture.status.short
    }));
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getTeamStatistics = async (teamId, options = {}) => {
  try {
    const params = new URLSearchParams({
      league: '39',
      season: '2023',
      team: teamId,
      ...options
    });

    const response = await axios.get(`${BASE_URL}/teams/statistics`, { headers, params });
    if (response.status !== 200) throw new Error('Team stats request failed');
    const data = response.data;

    console.log('Raw team stats:', data.response); // Log the raw stats

    return transformTeamStats(data.response);
  } catch (error) {
    console.error('Team Stats Error:', error);
    throw error;
  }
};

const transformTeamStats = (stats) => {
  // Log the raw stats for debugging
  console.log('Transforming team stats:', stats);

  // Normalize stats to 0-100 scale
  return {
    attack: Math.min(100, Math.round(
      (stats.goals?.for?.total / stats.fixtures?.played?.total) * 15 + // Goals per game
      (stats.shots?.on?.total / stats.fixtures?.played?.total) * 2    // Shots on target
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
      stats.passes?.total / stats.fixtures?.played?.total / 50 + // Passes per game
      stats.dribbles?.success * 0.5
    )),
    skill: Math.min(100, Math.round(
      stats.passes?.accuracy +
      stats.dribbles?.success / 2
    ))
  };
};

export const getGoalsPerLeague = async (season = '2023') => {
  try {
    const leagueId = 39; // Premier League ID
    const response = await axios.get(`${BASE_URL}/teams/statistics`, {
      headers,
      params: { league: leagueId, season }
    });
    const stats = response.data.response;

    // Log the stats for debugging
    console.log(`Stats for Premier League:`, stats);

    const goalsData = stats.map(team => ({
      name: team.team.name,
      goals: team.goals.for.total || 0 // Ensure goals is defined
    }));

    console.log('Goals data:', goalsData); // Log the goals data

    return goalsData;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getStandings = async (season = '2023') => {
  try {
    const leagueId = 39; // Premier League ID
    const response = await axios.get(`${BASE_URL}/standings`, {
      headers,
      params: { league: leagueId, season }
    });
    const standings = response.data.response[0].league.standings[0];

    // Log the standings for debugging
    console.log(`Standings for Premier League:`, standings);

    const standingsData = standings.map(team => ({
      name: team.team.name,
      points: team.points,
      goals: team.all.goals.for
    }));

    console.log('Standings data:', standingsData); // Log the standings data

    return standingsData;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getTopScorer = async (season = '2023') => {
  try {
    const leagueId = 39; // Premier League ID
    const response = await axios.get(`${BASE_URL}/players/topscorers`, {
      headers,
      params: { league: leagueId, season }
    });
    const topScorer = response.data.response[0];

    // Log the top scorer for debugging
    console.log(`Top Scorer for Premier League:`, topScorer);

    const topScorerData = {
      player: topScorer.player.name,
      team: topScorer.statistics[0].team.name,
      goals: topScorer.statistics[0].goals.total,
      photo: topScorer.player.photo
    };

    console.log('Top Scorer data:', topScorerData); // Log the top scorer data

    return topScorerData;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};