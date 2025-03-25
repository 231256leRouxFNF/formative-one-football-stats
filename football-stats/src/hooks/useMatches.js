import { useState, useEffect } from 'react';
import { getRecentMatches } from '../services/api';

export const useMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await getRecentMatches();
        setMatches(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadMatches();
  }, []);

  return { matches, loading, error };
};