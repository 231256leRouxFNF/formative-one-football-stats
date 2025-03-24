import React, { useEffect, useState } from 'react';
import { fetchRecentMatches, fetchMostGoals, fetchTopScorer } from '../services/api';
import MatchCard from '../components/MatchCard';
import MostGoals from '../components/MostGoals';
import TopCard from '../components/TopCard';
import BottomCard from '../components/BottomCard';
import './HomePage.css';

const dummyRecentMatches = [
  { team1: 'Team A', team2: 'Team B', score1: 2, score2: 1, date: '2025-03-18' },
  { team1: 'Team C', team2: 'Team D', score1: 0, score2: 3, date: '2025-03-19' },
  { team1: 'Team E', team2: 'Team F', score1: 1, score2: 1, date: '2025-03-20' },
  { team1: 'Team G', team2: 'Team H', score1: 3, score2: 2, date: '2025-03-21' },
  { team1: 'Team I', team2: 'Team J', score1: 0, score2: 0, date: '2025-03-22' },
];

const dummyMostGoals = [
  { team: 'Team A', goals: 10 },
  { team: 'Team B', goals: 8 },
  { team: 'Team C', goals: 12 },
  { team: 'Team D', goals: 7 },
  { team: 'Team E', goals: 9 },
];

const dummyTopScorer = {
  player: 'Player A',
  goals: 12,
  team: 'Team A',
};

const HomePage = () => {
  const [recentMatches, setRecentMatches] = useState([]);
  const [mostGoals, setMostGoals] = useState([]);
  const [topScorer, setTopScorer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const cachedRecentMatches = localStorage.getItem('recentMatches');
        const cachedMostGoals = localStorage.getItem('mostGoals');
        const cachedTopScorer = localStorage.getItem('topScorer');
        const cacheTime = localStorage.getItem('cacheTime');
        const now = new Date().getTime();

        if (cachedRecentMatches && cachedMostGoals && cachedTopScorer && cacheTime && now - cacheTime < 3600000) {
          setRecentMatches(JSON.parse(cachedRecentMatches));
          setMostGoals(JSON.parse(cachedMostGoals));
          setTopScorer(JSON.parse(cachedTopScorer));
        } else {
          const [recentMatchesData, mostGoalsData, topScorerData] = await Promise.all([
            fetchRecentMatches(),
            fetchMostGoals(),
            fetchTopScorer(),
          ]);

          setRecentMatches(recentMatchesData);
          setMostGoals(mostGoalsData);
          setTopScorer(topScorerData);

          localStorage.setItem('recentMatches', JSON.stringify(recentMatchesData));
          localStorage.setItem('mostGoals', JSON.stringify(mostGoalsData));
          localStorage.setItem('topScorer', JSON.stringify(topScorerData));
          localStorage.setItem('cacheTime', now);
        }
      } catch (error) {
        setError(error);
        setRecentMatches(dummyRecentMatches);
        setMostGoals(dummyMostGoals);
        setTopScorer(dummyTopScorer);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Recent Matches</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {recentMatches.map((match, index) => (
              <div key={index} className="col-md-4">
                <MatchCard match={match} />
              </div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <MostGoals data={mostGoals} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <TopScorer data={topScorer} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;