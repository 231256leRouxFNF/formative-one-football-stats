import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, Table, Spinner, Container } from 'react-bootstrap';

const Standings = () => {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState({ id: 'eng.1', name: 'Premier League' });
  const [season, setSeason] = useState('2022');
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(false);

  const seasons = Array.from({ length: 13 }, (_, i) => (2010 + i).toString());

  useEffect(() => {
    axios
      .get('https://api-football-standings.azharimm.site/leagues')
      .then((res) => setLeagues(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedLeague.id || !season) return;
    setLoading(true);
    axios
      .get(`https://api-football-standings.azharimm.site/leagues/${selectedLeague.id}/standings?season=${season}&sort=asc`)
      .then((res) => {
        setStandings(res.data.data.standings);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [selectedLeague, season]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">⚽ {selectedLeague.name} - {season} Standings</h2>
      <div className="d-flex mb-3">
        <Dropdown className="me-3">
          <Dropdown.Toggle variant="primary" id="dropdown-league">
            {selectedLeague.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {leagues.map((league) => (
              <Dropdown.Item
                key={league.id}
                onClick={() => setSelectedLeague({ id: league.id, name: league.name })}
              >
                {league.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-season">
            {season}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {seasons.map((yr) => (
              <Dropdown.Item key={yr} onClick={() => setSeason(yr)}>
                {yr}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Draws</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr key={team.team.id}>
                <td>{index + 1}</td>
                <td>{team.team.name}</td>
                <td>{team.stats.find(stat => stat.name === 'wins')?.value}</td>
                <td>{team.stats.find(stat => stat.name === 'losses')?.value}</td>
                <td>{team.stats.find(stat => stat.name === 'draws')?.value}</td>
                <td>{team.stats.find(stat => stat.name === 'points')?.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Standings;
