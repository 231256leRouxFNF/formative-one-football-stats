import React, { useState, useRef, useCallback } from 'react';
import { mockTeamStats } from '../data/dummyData';
import { Chart } from 'chart.js/auto';
import './ComparisonCard.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

const teams = Object.keys(mockTeamStats);

const ComparisonCard = () => {
  const [team1, setTeam1] = useState(teams[0]);
  const [team2, setTeam2] = useState(teams[1]);
  const barChartRef = useRef(null);
  const radarChartRef = useRef(null);
  const pieChartRef = useRef(null);

  const getStats = (team) => mockTeamStats[team];

  const createBarChart = useCallback((stats1, stats2) => {
    if (!barChartRef.current) return;
    if (barChartRef.current.chartInstance) barChartRef.current.chartInstance.destroy();
    barChartRef.current.chartInstance = new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Attack', 'Defense', 'Stamina', 'Speed', 'Skill'],
        datasets: [
          {
            label: team1,
            data: Object.values(stats1),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: team2,
            data: Object.values(stats2),
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
  }, [team1, team2]);

  const createRadarChart = useCallback((stats1, stats2) => {
    if (!radarChartRef.current) return;
    if (radarChartRef.current.chartInstance) radarChartRef.current.chartInstance.destroy();
    radarChartRef.current.chartInstance = new Chart(radarChartRef.current, {
      type: 'radar',
      data: {
        labels: ['Attack', 'Defense', 'Stamina', 'Speed', 'Skill'],
        datasets: [
          {
            label: team1,
            data: Object.values(stats1),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 2,
          },
          {
            label: team2,
            data: Object.values(stats2),
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
            ticks: { display: false },
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
  }, [team1, team2]);

  const createPieChart = useCallback((stats1, stats2) => {
    if (!pieChartRef.current) return;
    if (pieChartRef.current.chartInstance) pieChartRef.current.chartInstance.destroy();
    pieChartRef.current.chartInstance = new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: [team1, team2],
        datasets: [
          {
            data: [stats1.attack, stats2.attack],
            backgroundColor: ['#36a2eb', '#ff6384'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }, [team1, team2]);

  React.useEffect(() => {
    const stats1 = getStats(team1);
    const stats2 = getStats(team2);
    createBarChart(stats1, stats2);
    createRadarChart(stats1, stats2);
    createPieChart(stats1, stats2);
  }, [team1, team2, createBarChart, createRadarChart, createPieChart]);

  return (
    <div className="comparison-container">
      <div className="comparison-content">
        <div className="player-header">
          <div className="player-card player1">
            <label htmlFor="team1">Team 1</label>
            <select
              id="team1"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
            >
              {teams.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="vs-badge">VS</div>
          <div className="player-card player2">
            <label htmlFor="team2">Team 2</label>
            <select
              id="team2"
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
            >
              {teams.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected teams quick info */}
        <div className="charts-grid" style={{marginBottom: '1rem'}}>
          <div className="chart-card">
            <h3>{team1}</h3>
            <p>Attack: {mockTeamStats[team1].attack} · Defense: {mockTeamStats[team1].defense} · Stamina: {mockTeamStats[team1].stamina} · Speed: {mockTeamStats[team1].speed} · Skill: {mockTeamStats[team1].skill}</p>
          </div>
          <div className="chart-card">
            <h3>{team2}</h3>
            <p>Attack: {mockTeamStats[team2].attack} · Defense: {mockTeamStats[team2].defense} · Stamina: {mockTeamStats[team2].stamina} · Speed: {mockTeamStats[team2].speed} · Skill: {mockTeamStats[team2].skill}</p>
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
            <h3>Attack Distribution</h3>
            <canvas ref={pieChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;