import React from 'react';
import PropTypes from 'prop-types';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="team">
        <h2>{match.homeTeam}</h2>
        <p>{match.homeScore}</p>
      </div>
      <div className="versus">VS</div>
      <div className="team">
        <h2>{match.awayTeam}</h2>
        <p>{match.awayScore}</p>
      </div>
    </div>
  );
};

MatchCard.propTypes = {
  match: PropTypes.shape({
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
  }).isRequired
};

export default MatchCard;