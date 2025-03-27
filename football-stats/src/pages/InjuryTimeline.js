import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { fetchInjuries } from "../services/api"; // Import the function
import "./InjuryTimeline.css"; // Import the CSS file

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PremierLeagueInjuries = () => {
  const [injuries, setInjuries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInjuries = async () => {
      try {
        const injuriesData = await fetchInjuries(39, new Date().getFullYear() - 1); // Premier League ID and latest season
        setInjuries(injuriesData);
      } catch (err) {
        setError("Failed to fetch injuries.");
      } finally {
        setLoading(false);
      }
    };

    getInjuries();
  }, []);

  if (loading) return <p className="text-center">Loading injuries...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const groupedInjuries = injuries.reduce((acc, injury) => {
    const date = injury.fixture.date.split("T")[0]; // Extract date without time
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(groupedInjuries).sort(),
    datasets: [
      {
        label: "Number of Injuries",
        data: Object.values(groupedInjuries),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Premier League Injury Timeline</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PremierLeagueInjuries;
