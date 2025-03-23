const API_URL = 'https://api.example.com'; // Replace with your API URL

export const fetchRecentMatches = async () => {
  try {
    const response = await fetch(`${API_URL}/recent-matches`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch recent matches:', error);
    return [];
  }
};

export const fetchMostGoals = async () => {
  try {
    const response = await fetch(`${API_URL}/most-goals`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch most goals:', error);
    return [];
  }
};