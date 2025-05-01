// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { Typography, Grid, Box, Paper, Divider } from "@mui/material";
import PlayerCard from "../components/PlayerCard";
import MatchCard from "../components/MatchCard";
import PlayerStatsChart from "../charts/PlayerStatsChart";
import GoalsVsAssistsChart from "../charts/GoalsVsAssistsChart";

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

    setPlayerStats(mockPlayerStats);
    setRecentMatches(mockRecentMatches);
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ⚽ Football Stats Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column - Player Stats */}
        <Grid item xs={12} md={6}>
          {playerStats && (
            <>
              <Paper sx={{ p: 2, mb: 3, backgroundColor: "#1e1e1e" }} elevation={3}>
                <PlayerCard player={playerStats} />
              </Paper>

              <Paper sx={{ p: 2, mb: 3, backgroundColor: "#1e1e1e" }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  Performance Breakdown
                </Typography>
                <PlayerStatsChart player={playerStats} />
              </Paper>

              <Paper sx={{ p: 2, backgroundColor: "#1e1e1e" }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  Goals vs Assists
                </Typography>
                <GoalsVsAssistsChart
                  goals={playerStats.goals}
                  assists={playerStats.assists}
                />
              </Paper>
            </>
          )}
        </Grid>

        {/* Right Column - Match History */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: "#1e1e1e" }} elevation={3}>
            <Typography variant="h5" gutterBottom>
              Recent Matches
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: "grey.700" }} />
            {recentMatches.map((match, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <MatchCard match={match} />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
