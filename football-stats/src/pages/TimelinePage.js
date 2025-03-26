import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimelineGraph from '../components/TimelineGraph';
import useTeams from '../hooks/useTeams';

const TimelinePage = () => {
  const { teams, loading, error } = useTeams();

  return (
    <div className="container mt-5">
      <h1 className="page-title">Timeline</h1>
      {loading && <div>Loading teams...</div>}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && <TimelineGraph teams={teams} />}
    </div>
  );
};

export default TimelinePage;