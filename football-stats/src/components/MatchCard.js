import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  return (
    <Card className="match-card">
      <CardContent className="match-card-content">
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
  }).isRequired,
};

export default MatchCard;