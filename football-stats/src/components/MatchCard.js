import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  return (
    <Card className="match-card">
      <CardContent className="match-card-content">
        <div className="team-logos">
          <img src={match.team1Logo} alt={`${match.team1} logo`} className="team-logo" />
          <img src={match.team2Logo} alt={`${match.team2} logo`} className="team-logo" />
        </div>
        <Typography variant="h5" component="div">
          {match.team1} vs {match.team2}
        </Typography>
        <Typography variant="body2">
          Score: {match.score1} - {match.score2}
        </Typography>
        <Typography variant="body2">
          Date: {match.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

MatchCard.propTypes = {
  match: PropTypes.shape({
    team1: PropTypes.string.isRequired,
    team2: PropTypes.string.isRequired,
    score1: PropTypes.number.isRequired,
    score2: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    team1Logo: PropTypes.string.isRequired,
    team2Logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default MatchCard;