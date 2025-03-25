import { useState, useEffect } from 'react';
import { getTeamStatistics } from '../services/api';

export const useTeamStats = (teamId = 33) => { // Default: Manchester United
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await getTeamStatistics(teamId);
        setStats(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadStats();
  }, [teamId]);

  return { stats, loading, error };
};