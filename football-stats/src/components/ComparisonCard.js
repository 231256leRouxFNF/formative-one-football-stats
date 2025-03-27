import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import './ComparisonCard.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

const ComparisonPage = () => {
  const [players, setPlayers] = useState({ player1: null, player2: null });
  const [isLoading, setIsLoading] = useState(true);
  const barChartRef = useRef(null);
  const radarChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const [player1, player2] = await Promise.all([
          fetchPlayerData('276', '2020'),
          fetchPlayerData('277', '2020')
        ]);
        
        setPlayers({ player1, player2 });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching players:', error);
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const fetchPlayerData = async (playerId, season) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/players',
      params: { id: playerId, season },
      headers: {
        'x-rapidapi-key': '4b9b1c34d0msh93dcd20b236efbcp13f3e2jsn8ced65aa9dba',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    return response.data.response[0];
  };

  useEffect(() => {
    if (!isLoading && players.player1 && players.player2) {
      const stats1 = getStats(players.player1);
      const stats2 = getStats(players.player2);

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
  }, [isLoading, players]);

  const getStats = (player) => ({
    goals: player.statistics[0].goals.total,
    passes: player.statistics[0].passes.total,
    tackles: player.statistics[0].tackles.total,
    dribbles: player.statistics[0].dribbles.success,
  });

// Updated chart creation functions with improved readability options
const createBarChart = (stats1, stats2) => {
  barChartRef.current.chartInstance = new Chart(barChartRef.current, {
    type: 'bar',
    data: {
      labels: ['Goals', 'Passes', 'Tackles', 'Dribbles'],
      datasets: [
        {
          label: players.player1.player.name,
          data: Object.values(stats1),
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          barThickness: 40,
        },
        {
          label: players.player2.player.name,
          data: Object.values(stats2),
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          barThickness: 40,
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
            color: '#34495e',
            font: {
              size: 14
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          ticks: {
            color: '#34495e',
            font: {
              size: 14
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14
            }
          }
        },
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#34495e',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      }
    }
  });
};

const createRadarChart = (stats1, stats2) => {
  radarChartRef.current.chartInstance = new Chart(radarChartRef.current, {
    type: 'radar',
    data: {
      labels: ['Goals', 'Assists', 'Passes', 'Tackles', 'Dribbles'],
      datasets: [
        {
          label: players.player1.player.name,
          data: Object.values(stats1),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.8)',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        },
        {
          label: players.player2.player.name,
          data: Object.values(stats2),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.8)',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          ticks: {
            color: '#34495e',
            backdropColor: 'transparent',
            font: {
              size: 12
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          pointLabels: {
            color: '#34495e',
            font: {
              size: 14
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14
            }
          }
        }
      }
    }
  });
};

  const createPieChart = (stats1, stats2) => {
    pieChartRef.current.chartInstance = new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: [players.player1.player.name, players.player2.player.name],
        datasets: [
          {
            data: [stats1.goals, stats2.goals],
            backgroundColor: ['#36a2eb', '#ff6384'],
          },
        ],
      },
    });
  };

  return (
    <div className="comparison-container">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p className="loading-text">Fetching Player Data...</p>
        </div>
      ) : (
        <div className="comparison-content">
          <div className="player-header">
            <div className="player-card player1">
              <h2>{players.player1.player.name}</h2>
              <p className="team-name">{players.player1.statistics[0].team.name}</p>
            </div>
            <div className="vs-badge">VS</div>
            <div className="player-card player2">
              <h2>{players.player2.player.name}</h2>
              <p className="team-name">{players.player2.statistics[0].team.name}</p>
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