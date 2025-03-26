import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './InjuryTimeline.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InjuryTimeline = () => {
  const [injuryData, setInjuryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInjuryData = async (startDate, endDate) => {
    try {
      const dates = getDateRange(startDate, endDate);
      const results = [];
      
      for (const date of dates) {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/injuries', {
          params: { date },
          headers: {
            'x-rapidapi-key': '1456145a0bmshc6a19f59662428fp10c532jsnbf332171c64b',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
          }
        });
        
        results.push({
          date,
          count: response.data.response.length
        });
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limit delay
      }
      
      setInjuryData(results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const getDateRange = (start, end) => {
    const dates = [];
    const current = new Date(start);
    while (current <= new Date(end)) {
      dates.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  useEffect(() => {
    fetchInjuryData('2021-04-01', '2021-04-30');
  }, []);

  if (loading) return <div>Loading injury data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="injury-chart">
      <h2>Injury Reports Timeline (April 2021)</h2>
      <Line
        data={{
          labels: injuryData.map(d => d.date),
          datasets: [{
            label: 'Number of Injuries',
            data: injuryData.map(d => d.count),
            borderColor: '#ff6384',
            tension: 0.3
          }]
        }}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                title: (context) => `Date: ${context[0].label}`,
                label: (context) => `${context.raw} reported injuries`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Injuries'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Date'
              }
            }
          }
        }}
      />
    </div>
  );
};

export default InjuryTimeline;