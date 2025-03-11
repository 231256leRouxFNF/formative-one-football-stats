// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale } from 'chart.js';
import CardComponent from '../components/CardComponent';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale);

console.log('HomePage: Hello there');

// Defining the HomePage component
const HomePage = () => {
  // State to store the card data
  const [cardData, setCardData] = useState({
    recentMatches: [
      { teamA: 'Team A', teamB: 'Team B', scoreA: 2, scoreB: 1, teamALogo: 'path/to/teamA-logo.png', teamBLogo: 'path/to/teamB-logo.png' },
      { teamA: 'Team C', teamB: 'Team D', scoreA: 3, scoreB: 2, teamALogo: 'path/to/teamC-logo.png', teamBLogo: 'path/to/teamD-logo.png' },
      { teamA: 'Team E', teamB: 'Team F', scoreA: 1, scoreB: 1, teamALogo: 'path/to/teamE-logo.png', teamBLogo: 'path/to/teamF-logo.png' },
    ],
    teamComparison: {
      teamA: { name: 'Team A', wins: 10, losses: 5, draws: 3, goalsScored: 25, goalsConceded: 15 },
      teamB: { name: 'Team B', wins: 8, losses: 7, draws: 3, goalsScored: 20, goalsConceded: 18 },
    },
    topScorer: { name: 'Player 1', goals: 12, image: 'path/to/player1-image.png' },
    goalsPerTeam: [
      { name: 'Team A', goals: 25 },
      { name: 'Team B', goals: 20 },
      { name: 'Team C', goals: 22 },
      { name: 'Team D', goals: 18 },
      { name: 'Team E', goals: 24 },
      { name: 'Team F', goals: 19 },
    ],
  });

  // Logging to the console that the component has been rendered
  console.log('HomePage component rendered');
  console.log('HomePage: General Kenobi');

  // Returning the JSX to render the component
  return (
    <div className="container mt-5">
      <h1>Recent matches</h1>
      <div className="row">
        {/* Top row with 3 smaller cards */}
        {cardData.recentMatches.slice(0, 3).map((match, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <CardComponent type="match" data={match} />
          </div>
        ))}
      </div>
      <div className="row">
        {/* Right side with 1 card */}
        <div className="col-md-4 mb-3">
          <CardComponent type="teamComparison" data={cardData.teamComparison} />
        </div>
        {/* Middle row with 1 big card */}
        <div className="col-md-8 mb-3">
          <CardComponent type="goalsPerTeam" data={cardData.goalsPerTeam} />
        </div>
      </div>
      <div className="row">
        {/* Right side with 1 card */}
        <div className="col-md-4 mb-3">
          <CardComponent type="topScorer" data={cardData.topScorer} />
        </div>
      </div>
    </div>
  );
};

// Exporting the HomePage component as the default export
export default HomePage;