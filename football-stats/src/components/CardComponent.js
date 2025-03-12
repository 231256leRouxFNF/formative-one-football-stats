import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardComponent.css';

const CardComponent = ({ match }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{match.teamA} vs {match.teamB}</h5>
        <p className="card-text">{match.scoreA} - {match.scoreB}</p>
        <img src={match.teamALogo} alt={`${match.teamA} logo`} style={{ width: '50px', height: '50px' }} />
        <img src={match.teamBLogo} alt={`${match.teamB} logo`} style={{ width: '50px', height: '50px' }} />
      </div>
    </div>
  );
};

export default CardComponent;