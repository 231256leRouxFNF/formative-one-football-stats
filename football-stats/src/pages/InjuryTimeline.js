import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { mockInjuryData } from "../data/dummyData";
import "./InjuryTimeline.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PremierLeagueInjuries = () => {
  // Use static injury data
  const injuries = mockInjuryData;

  const chartData = {
    labels: injuries.map((injury) => injury.date),
    datasets: [
      {
        label: "Number of Injuries",
        data: injuries.map((injury) => injury.count),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Premier League Injury Timeline</h2>
      <div style={{ height: '500px', width: '100%' }}>
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default PremierLeagueInjuries;
