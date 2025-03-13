// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, RadialLinearScale } from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer'; // Importing the Footer component
import './HomePage.css'; // Importing the CSS file for styling

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

  // Data for the radar chart
  const radarData = {
    labels: ['Wins', 'Losses', 'Draws', 'Goals Scored', 'Goals Conceded'],
    datasets: [
      {
        label: cardData.teamComparison.teamA.name,
        data: [
          cardData.teamComparison.teamA.wins,
          cardData.teamComparison.teamA.losses,
          cardData.teamComparison.teamA.draws,
          cardData.teamComparison.teamA.goalsScored,
          cardData.teamComparison.teamA.goalsConceded,
        ],
        backgroundColor: 'rgba(0, 100, 0, 0.2)', // Dark green with transparency
        borderColor: 'rgba(0, 100, 0, 1)', // Dark green
        borderWidth: 1,
      },
      {
        label: cardData.teamComparison.teamB.name,
        data: [
          cardData.teamComparison.teamB.wins,
          cardData.teamComparison.teamB.losses,
          cardData.teamComparison.teamB.draws,
          cardData.teamComparison.teamB.goalsScored,
          cardData.teamComparison.teamB.goalsConceded,
        ],
        backgroundColor: 'rgba(255, 0, 0, 0.2)', // Red with transparency
        borderColor: 'rgba(255, 0, 0, 1)', // Red
        borderWidth: 1,
      },
    ],
  };

  // Data for the bar chart
  const barData = {
    labels: cardData.goalsPerTeam.map(team => team.name),
    datasets: [
      {
        label: 'Goals',
        data: cardData.goalsPerTeam.map(team => team.goals),
        backgroundColor: 'rgba(0, 0, 255, 0.2)', // Blue with transparency
        borderColor: 'rgba(0, 0, 255, 1)', // Blue
        borderWidth: 1,
      },
    ],
  };

  // Returning the JSX to render the component
  return (
    <div className="container">
      <h1 className="my-4">Homepage</h1>
      <div className="row">
        {cardData.recentMatches.map((match, index) => (
          <div className="col-md-3" key={index}>
            <CardComponent match={match} />
          </div>
        ))}
        <div className="col-md-3">
          <div className="card short-card">
            <div className="card-body">
              <h5 className="card-title">Team Comparison</h5>
              <Radar data={radarData} width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-9">
          <div className="card short-card">
            <div className="card-body">
              <h5 className="card-title">Top 5 Teams Goals</h5>
              <Bar data={barData} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card short-card">
            <div className="card-body">
              <h5 className="card-title">Top Scorer</h5>
              <p>{cardData.topScorer.name}</p>
              <p>Goals: {cardData.topScorer.goals}</p>
              <img src={cardData.topScorer.image} alt={`${cardData.topScorer.name} image`} style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px solid #006400' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the HomePage component as the default export
export default HomePage;