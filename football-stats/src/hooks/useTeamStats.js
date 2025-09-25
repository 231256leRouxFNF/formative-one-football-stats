import { useState, useEffect } from 'react';
import { getTeamStatistics } from '../services/api';

export const useTeamStats = (teamId) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      if (!teamId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await getTeamStatistics(teamId);
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error loading team stats:', err);
        setError(err.message || 'Failed to load team statistics');
      } finally {
        setLoading(false);
      }
    };
    
    loadStats();
  }, [teamId]);

  return { stats, loading, error };
};
