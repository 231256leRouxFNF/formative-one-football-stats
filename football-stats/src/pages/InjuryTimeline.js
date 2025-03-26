import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InjuryTimeline from '../components/InjuryTimeline';
// import usePlayers from '../hooks/usePlayers';

const InjuryTimelinePage = () => {
  return (
    <div className="container mt-5">
      <h1 className="page-title">Injury Timeline</h1>
      <InjuryTimeline />
    </div>
  );
};

export default InjuryTimelinePage;