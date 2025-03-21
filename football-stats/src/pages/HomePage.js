// Importing necessary modules and components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale } from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import Footer from '../components/Footer'; // Importing the Footer component
import './HomePage.css'; // Importing the CSS file for styling
import '../Styles/global.css';
import MatchCard from '../components/MatchCard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale);

console.log('HomePage: Hello there');

// Defining the HomePage component
const HomePage = () => {
  // Logging to the console that the component has been rendered
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

  // Returning the JSX to render the component
  return (
    <div className="container">
      <h1 className="page-title"><b>Recent Matches</b></h1>
      <div className="row">
        {recentMatches.map((match, index) => (
          <div key={index} className="col-md-4">
            <MatchCard match={match} />
          </div>
        ))}
      </div>
      <div className="row mt-4">
        {/* More components can be added here */}
      </div>
    </div>
  );
};

// Exporting the HomePage component as the default export
export default HomePage;