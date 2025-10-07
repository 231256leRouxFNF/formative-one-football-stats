import { useState, useEffect } from 'react';
import { fetchAllLeagues, fetchLeagueStandings, fetchLeagueDetails } from '../services/api';

export const useLeagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLeagues = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchAllLeagues();
        
        if (response.status && response.data) {
          setLeagues(response.data);
        } else {
          setError('Failed to load leagues');
        }
      } catch (err) {
        console.error('Error loading leagues:', err);
        setError('Failed to load leagues');
      } finally {
        setLoading(false);
      }
    };

    loadLeagues();
  }, []);

  return { leagues, loading, error, refetch: () => loadLeagues() };
};

export const useLeagueStandings = (leagueId, season = 2023) => {
  const [standings, setStandings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!leagueId) return;

    const loadStandings = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchLeagueStandings(leagueId, season);
        
        if (response.status && response.data) {
          setStandings(response.data);
        } else {
          setError('Failed to load standings');
        }
      } catch (err) {
        console.error('Error loading standings:', err);
        setError('Failed to load standings');
      } finally {
        setLoading(false);
      }
    };

    loadStandings();
  }, [leagueId, season]);

  return { standings, loading, error };
};

export const useLeagueDetails = (leagueId) => {
  const [leagueDetails, setLeagueDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!leagueId) return;

    const loadDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchLeagueDetails(leagueId);
        
        if (response.status && response.data) {
          setLeagueDetails(response.data);
        } else {
          setError('Failed to load league details');
        }
      } catch (err) {
        console.error('Error loading league details:', err);
        setError('Failed to load league details');
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [leagueId]);

  return { leagueDetails, loading, error };
};
