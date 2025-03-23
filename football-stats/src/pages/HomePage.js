import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale } from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import Footer from '../components/Footer';
import './HomePage.css';
import '../Styles/global.css';
import MatchCard from '../components/MatchCard';
import MostGoals from '../components/MostGoals';
import TopCard from '../components/TopCard';
import BottomCard from '../components/BottomCard';
import Typography from '@mui/material/Typography';
import { fetchRecentMatches, fetchMostGoals } from '../api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale);

const HomePage = () => {
  const [recentMatches, setRecentMatches] = useState([]);
  const [mostGoals, setMostGoals] = useState([]);

  useEffect(() => {
    const getRecentMatches = async () => {
      const data = await fetchRecentMatches();
      setRecentMatches(data);
    };

    const getMostGoals = async () => {
      const data = await fetchMostGoals();
      setMostGoals(data);
    };

    getRecentMatches();
    getMostGoals();
  }, []);

  return (
    <div className="container">
      <Typography variant="h1" className="page-title"><b>Recent Matches</b></Typography>
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
          <TopCard />
          <BottomCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;