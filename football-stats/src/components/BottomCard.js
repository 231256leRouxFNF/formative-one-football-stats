import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions'; // Import CardActions
import './BottomCard.css'; // Import the CSS file

const playerImage = 'https://via.placeholder.com/150'; // Replace with actual image URL
const playerName = 'Player Name';
const mostGoals = 5;

const BottomCard = () => {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 500, margin: '10px auto' }} className="bottom-card">
      <Card variant="outlined">
        <CardContent className="bottom-card-content">
          <Typography variant="h6" gutterBottom>
            Most Goals in a Single Game
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={playerImage} alt={playerName} className="bottom-card-image" />
            </Grid>
            <Grid item xs={8} className="bottom-card-details">
              <Typography variant="body1">
                <b>{playerName}</b>
              </Typography>
              <Typography variant="body2">
                Goals: {mostGoals}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">View Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BottomCard;