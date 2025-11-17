const SPORTMONKS_API_BASE = 'https://api.sportmonks.com/v3';
const API_KEY = process.env.REACT_APP_SPORTMONKS_API_KEY; // in your .env file

export const fetchLeagues = async () => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/soccer/leagues?api_token=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return null;
  }
};

export const fetchLeagueDetails = async (leagueId) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/soccer/leagues/${leagueId}?api_token=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching league details:', error);
    return null;
  }
};

export const fetchLeagueStandings = async (leagueId, season) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/soccer/standings/${leagueId}?api_token=${API_KEY}&season=${season}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching league standings:', error);
    return null;
  }
};

export const getStandings = async (leagueId, season) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/soccer/standings/${leagueId}?api_token=${API_KEY}&season=${season}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching standings:', error);
    return null;
  }
};

export const getTopScorer = async (leagueId, season) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/soccer/topscorers/${leagueId}?api_token=${API_KEY}&season=${season}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top scorer:', error);
    return null;
  }
};

export const getRecentMatches = async (leagueId, season) => {
  if (!leagueId || !season) {
    console.error('Missing leagueId or season parameter');
    return null;
  }

  try {
    const response = await fetch(`/api/v3/soccer/fixtures/${leagueId}?api_token=${API_KEY}&season=${season}&status=finished`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recent matches:', error);
    return null;
  }
};

export const fetchAllLeagues = async () => {
  try {
    const response = await fetch(`/api/v3/soccer/leagues?api_token=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching all leagues:', error);
    return null;
  }
};

export const fetchHeadToHeadFixtures = async (team1Id, team2Id) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/football/fixtures/head-to-head/${team1Id}/${team2Id}?include=participants;league;scores;state;venue;events&api_token=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching head-to-head fixtures:', error);
    return null;
  }
};

export const fetchPlayerDetails = async (playerId) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/football/players/${playerId}?include=trophies.league;trophies.season;trophies.trophy;trophies.team;teams.team;statistics.details.type;statistics.team;statistics.season.league;latest.fixture.participants;latest.fixture.league;latest.fixture.scores;latest.details.type;nationality;detailedPosition;metadata.type&api_token=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player details:', error);
    return null;
  }
};

export const fetchTeamStatisticsBySeason = async (seasonId) => {
  try {
    const response = await fetch(`${SPORTMONKS_API_BASE}/football/teams/seasons/${seasonId}?include=statistics.details.type&filters=teamstatisticSeasons:${seasonId}&api_token=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching team statistics by season:', error);
    return null;
  }
};
