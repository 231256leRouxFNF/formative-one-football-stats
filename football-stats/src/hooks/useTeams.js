import { useState, useEffect } from 'react';
import { fetchTeams } from '../services/api';
import { getCache, setCache } from '../services/cache';

const useTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      setError(null);

      const cachedTeams = getCache('teams');
      if (cachedTeams) {
        setTeams(cachedTeams);
        setLoading(false);
        return;
      }

      try {
        const data = await fetchTeams();
        setTeams(data);
        setCache('teams', data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  return { teams, loading, error };
};

export default useTeams;