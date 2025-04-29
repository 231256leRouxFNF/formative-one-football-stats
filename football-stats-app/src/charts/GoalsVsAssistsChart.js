import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GoalsVsAssistsChart = ({ goals, assists }) => {
  const data = {
    labels: ["Goals", "Assists"],
    datasets: [
      {
        label: "Player Contributions",
        data: [goals, assists],
        backgroundColor: ["#1976d2", "#9c27b0"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Goals vs Assists" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GoalsVsAssistsChart;
