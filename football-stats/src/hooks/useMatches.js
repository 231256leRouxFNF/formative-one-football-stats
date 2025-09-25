import { useState, useEffect } from 'react';
import { getRecentMatches } from '../services/api';

export const useMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        setLoading(true);
        const data = await getRecentMatches();
        setMatches(data);
        setError(null);
      } catch (err) {
        console.error('Error loading matches:', err);
        setError(err.message || 'Failed to load matches');
      } finally {
        setLoading(false);
      }
    };
    
    loadMatches();
  }, []);

  return { matches, loading, error };
};
