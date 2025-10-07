import React, { useState, useEffect, useRef, useCallback } from 'react';
import { fetchPlayers } from '../services/api';
import { Chart } from 'chart.js/auto';
import './ComparisonCard.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

const ComparisonPage = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [player1Id, setPlayer1Id] = useState(null);
  const [player2Id, setPlayer2Id] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const barChartRef = useRef(null);
  const radarChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const players = await fetchPlayers();
        setAllPlayers(players || []);
        if (players && players.length >= 2) {
          setPlayer1Id(players[0].id);
          setPlayer2Id(players[1].id);
        }
      } catch (error) {
        console.error('Error loading players:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPlayers();
  }, []);

  useEffect(() => {
    const p1 = allPlayers.find(p => p.id === player1Id);
    const p2 = allPlayers.find(p => p.id === player2Id);
    if (!isLoading && p1 && p2) {
      if (!barChartRef.current || !radarChartRef.current || !pieChartRef.current) {
        return;
      }
      const stats1 = getStats(p1);
      const stats2 = getStats(p2);

      // Destroy existing charts
      [barChartRef, radarChartRef, pieChartRef].forEach(ref => {
        if (ref.current?.chartInstance) {
          ref.current.chartInstance.destroy();
        }
      });

      // Create new charts
      createBarChart(stats1, stats2);
      createRadarChart(stats1, stats2);
      createPieChart(stats1, stats2);
    }
  }, [isLoading, allPlayers, player1Id, player2Id, createBarChart, createPieChart, createRadarChart]);

  const getStats = (player) => ({
    // Bar Chart Stats (Core Skills)
    barStats: {
      goals: player.stats.goals || 0,
      passes: player.stats.passAccuracy || 0,
      tackles: player.stats.tackles || 0,
      dribbles: player.stats.dribbles || 0,
    },
    // Radar Chart Stats (Advanced Metrics)
    radarStats: {
      shotsOnTarget: player.stats.shotsPerGame || 0,
      foulsCommitted: Math.max(0, Math.round((player.stats.appearances || 0) * 0.3)),
      penaltiesScored: Math.max(0, Math.round((player.stats.goals || 0) * 0.1)),
      interceptions: player.stats.interceptions || 0,
      duelsWon: Math.max(0, Math.round((player.stats.tackles || 0) * 1.5)),
    }
  });
  
  const createBarChart = useCallback((stats1, stats2) => {
    barChartRef.current.chartInstance = new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Goals', 'Passes', 'Tackles', 'Dribbles'],
        datasets: [
          {
            label: (allPlayers.find(p => p.id === player1Id) || {}).name,
            data: Object.values(stats1.barStats),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: (allPlayers.find(p => p.id === player2Id) || {}).name,
            data: Object.values(stats2.barStats),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }, [allPlayers, player1Id, player2Id]);
  
  const createRadarChart = useCallback((stats1, stats2) => {
    radarChartRef.current.chartInstance = new Chart(radarChartRef.current, {
      type: 'radar',
      data: {
        labels: ['Shots on Target', 'Fouls Committed', 'Penalties Scored', 'Interceptions', 'Duels Won'],
        datasets: [
          {
            label: (allPlayers.find(p => p.id === player1Id) || {}).name,
            data: Object.values(stats1.radarStats),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 2,
          },
          {
            label: (allPlayers.find(p => p.id === player2Id) || {}).name,
            data: Object.values(stats2.radarStats),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 2,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            ticks: { display: false }, // Cleaner look
            pointLabels: {
              font: {
                size: 13,
                family: 'Arial, sans-serif'
              }
            }
          }
        }
      }
    });
  }, [allPlayers, player1Id, player2Id]);
  
  const createPieChart = useCallback((stats1, stats2) => {
    pieChartRef.current.chartInstance = new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: [
          (allPlayers.find(p => p.id === player1Id) || {}).name,
          (allPlayers.find(p => p.id === player2Id) || {}).name
        ],
        datasets: [
          {
            data: [stats1.barStats.goals, stats2.barStats.goals],
            backgroundColor: ['#36a2eb', '#ff6384'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }, [allPlayers, player1Id, player2Id]);
 
  return (
    <div className="comparison-container">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p className="loading-text">Fetching Player Data...</p>
        </div>
      ) : allPlayers.length < 2 ? (
        <div className="loading-overlay">
          <p className="loading-text">Not enough players available to compare.</p>
        </div>
      ) : (
        <div className="comparison-content">
          <div className="player-header">
            <div className="player-card player1">
              <label htmlFor="player1">Player 1</label>
              <select
                id="player1"
                value={player1Id ?? ''}
                onChange={(e) => setPlayer1Id(Number(e.target.value))}
              >
                {allPlayers.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.team})</option>
                ))}
              </select>
            </div>
            <div className="vs-badge">VS</div>
            <div className="player-card player2">
              <label htmlFor="player2">Player 2</label>
              <select
                id="player2"
                value={player2Id ?? ''}
                onChange={(e) => setPlayer2Id(Number(e.target.value))}
              >
                {allPlayers.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.team})</option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected players quick info */}
          <div className="charts-grid" style={{marginBottom: '1rem'}}>
            <div className="chart-card">
              {(() => { const p = allPlayers.find(pl => pl.id === player1Id); return p ? (
                <div>
                  <h3>{p.name} - {p.team}</h3>
                  <p>Goals: {p.stats.goals} · Assists: {p.stats.assists} · Apps: {p.stats.appearances}</p>
                </div>
              ) : null; })()}
            </div>
            <div className="chart-card">
              {(() => { const p = allPlayers.find(pl => pl.id === player2Id); return p ? (
                <div>
                  <h3>{p.name} - {p.team}</h3>
                  <p>Goals: {p.stats.goals} · Assists: {p.stats.assists} · Apps: {p.stats.appearances}</p>
                </div>
              ) : null; })()}
            </div>
          </div>

          <div className="charts-grid">
            <div className="chart-card">
              <h3>Performance Comparison</h3>
              <canvas ref={barChartRef}></canvas>
            </div>
            <div className="chart-card">
              <h3>Skills Radar</h3>
              <canvas ref={radarChartRef}></canvas>
            </div>
            <div className="chart-card">
              <h3>Goals Distribution</h3>
              <canvas ref={pieChartRef}></canvas>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;