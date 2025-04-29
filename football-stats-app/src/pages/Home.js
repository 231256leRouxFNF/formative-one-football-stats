// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import NavBar from "../components/NavBar";  // Changed path
import { BrowserRouter } from 'react-router-dom';
import PlayerCard from "../components/PlayerCard";  // Changed path
import MatchCard from "../components/MatchCard";    // Changed path
import PlayerStatsChart from "../charts/PlayerStatsChart";  // Changed path
import GoalsVsAssistsChart from "../charts/GoalsVsAssistsChart";  // Changed path
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [playerStats, setPlayerStats] = useState(null);
  const [recentMatches, setRecentMatches] = useState([]);

  useEffect(() => {
    // Static mock data
    const mockPlayerStats = {
      name: "John Doe",
      position: "Forward",
      goals: 15,
      assists: 10,
      appearances: 20,
    };

    const mockRecentMatches = [
      { date: "2025-04-01", opponent: "Team A", result: "Win", score: "3-1" },
      { date: "2025-04-05", opponent: "Team B", result: "Loss", score: "0-2" },
      { date: "2025-04-10", opponent: "Team C", result: "Draw", score: "1-1" },
    ];

    // Set mock data
    setPlayerStats(mockPlayerStats);
    setRecentMatches(mockRecentMatches);
  }, []);

  return (
    <div className="container mt-5">
      <Typography variant="h4" className="text-center mb-4">Football Stats Dashboard</Typography>

      <Grid container spacing={3} className="d-flex justify-content-center">
        <Grid item xs={12} md={6}>
          {playerStats && (
            <>
              <PlayerCard player={playerStats} />
              <div className="mt-4">
                <PlayerStatsChart player={playerStats} />
              </div>
              <div className="mt-4">
                <GoalsVsAssistsChart
                  goals={playerStats.goals}
                  assists={playerStats.assists}
                />
              </div>
            </>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="mb-3">Recent Matches</Typography>
          {recentMatches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
