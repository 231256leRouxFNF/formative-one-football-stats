import React from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale);

console.log('HomePage: Hello there');

const HomePage = () => {
  console.log('HomePage component rendered');
  console.log('HomePage: General Kenobi');

  const recentMatches = [
    {
      team1: 'Team A',
      team2: 'Team B',
      score1: 2,
      score2: 1,
      date: '2025-03-18',
    },
    {
      team1: 'Team C',
      team2: 'Team D',
      score1: 0,
      score2: 3,
      date: '2025-03-19',
    },
    {
      team1: 'Team E',
      team2: 'Team F',
      score1: 1,
      score2: 1,
      date: '2025-03-20',
    },
  ];

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
              <MostGoals />
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