import React from 'react';
import './LeagueInfo.css';

const LeagueInfo = ({ league, season }) => {
  if (!league) return null;

  return (
    <div className="league-info-card">
      <div className="league-header">
        {league.logos?.light && (
          <img 
            src={league.logos.light} 
            alt={`${league.name} logo`}
            className="league-logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <div className="league-details">
          <h2 className="league-name">{league.name}</h2>
          <p className="league-abbr">{league.abbr}</p>
          {season && (
            <p className="league-season">Season: {season}-{season + 1}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeagueInfo;

