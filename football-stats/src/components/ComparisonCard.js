import React, { useState, useEffect, useRef } from 'react';
import { fetchPlayerData } from '../services/api'; // Import the function
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
    // Bar Chart Stats (Core Skills)
    barStats: {
      goals: player.statistics[0].goals.total || 0,
      passes: player.statistics[0].passes.total || 0,
      tackles: player.statistics[0].tackles.total || 0,
      dribbles: player.statistics[0].dribbles.success || 0,
    },
    // Radar Chart Stats (Advanced Metrics)
    radarStats: {
      shotsOnTarget: player.statistics[0].shots.on || 0,
      foulsCommitted: player.statistics[0].fouls.committed || 0,
      penaltiesScored: player.statistics[0].penalty.scored || 0,
      interceptions: player.statistics[0].interceptions || 0,
      duelsWon: player.statistics[0].duels.won || 0,
    }
  });
  
  const createBarChart = (stats1, stats2) => {
    barChartRef.current.chartInstance = new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Goals', 'Passes', 'Tackles', 'Dribbles'],
        datasets: [
          {
            label: players.player1.player.name,
            data: Object.values(stats1.barStats),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: players.player2.player.name,
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
  };
  
  const createRadarChart = (stats1, stats2) => {
    radarChartRef.current.chartInstance = new Chart(radarChartRef.current, {
      type: 'radar',
      data: {
        labels: ['Shots on Target', 'Fouls Committed', 'Penalties Scored', 'Interceptions', 'Duels Won'],
        datasets: [
          {
            label: players.player1.player.name,
            data: Object.values(stats1.radarStats),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 2,
          },
          {
            label: players.player2.player.name,
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
  };
  
  const createPieChart = (stats1, stats2) => {
    pieChartRef.current.chartInstance = new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: [players.player1.player.name, players.player2.player.name],
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