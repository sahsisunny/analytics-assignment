// BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  data: {
    Day: string;
    Age: string;
    Gender: string;
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const labels = data.map((entry) => entry.Day);
  const datasets = [
    { label: 'A', data: data.map((entry) => entry.A) },
    { label: 'B', data: data.map((entry) => entry.B) },
    { label: 'C', data: data.map((entry) => entry.C) },
    { label: 'D', data: data.map((entry) => entry.D) },
    { label: 'E', data: data.map((entry) => entry.E) },
    { label: 'F', data: data.map((entry) => entry.F) },
  ];

  const chartData = {
    labels,
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`,
      borderColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`,
      borderWidth: 1,
    })),
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
