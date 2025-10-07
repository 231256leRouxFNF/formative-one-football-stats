import React from 'react';
import './LeagueCard.css';

const LeagueCard = ({ league, onSelectLeague }) => {
  const handleClick = () => {
    if (onSelectLeague) {
      onSelectLeague(league);
    }
  };

  return (
    <div className="league-card" onClick={handleClick}>
      <div className="league-logo">
        <img 
          src={league.logos?.light || league.logos?.dark} 
          alt={`${league.name} logo`}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="league-info">
        <h3 className="league-name">{league.name}</h3>
        <p className="league-abbr">{league.abbr}</p>
      </div>
    </div>
  );
};

export default LeagueCard;
