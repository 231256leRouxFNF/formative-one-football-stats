import { useState, useEffect } from 'react';
import { fetchPlayers } from '../services/api';
import { getCache, setCache } from '../services/cache';

const usePlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlayers = async () => {
      setLoading(true);
      setError(null);

      const cachedPlayers = getCache('players');
      if (cachedPlayers) {
        setPlayers(cachedPlayers);
        setLoading(false);
        return;
      }

      try {
        const data = await fetchPlayers();
        setPlayers(data);
        setCache('players', data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  return { players, loading, error };
};

export default usePlayers;