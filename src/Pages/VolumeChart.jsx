import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const VolumeChart = () => {
  const labels = [
    "02", "17", "02", "18", "02", "18", "30", "17", "02", "18",
    "02", "17", "02", "18", "02", "17", "01", "02", "17", "01"
  ];

  const volumeData = [
    400, 405, 410, 430, 420, 420, 410, 405, 403, 402, 401, 410, 413, 416, 420, 420, 425, 430, 430, 420
  ];

  // Raise the line 10 units higher
  const lineData = volumeData.map(v => v + 5);

  const totalVolume = volumeData.reduce((acc, val) => acc + val, 0).toFixed(3);

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Bar Volume',
        data: volumeData,
        backgroundColor: '#00E6B8',
        borderRadius: 4,
        barThickness: 9, // 👈 narrower bars
      },
      {
        type: 'line',
        label: 'Line Volume',
        data: lineData,
        borderColor: '#9DFFB0',
        backgroundColor: '#9DFFB0',
        tension: 0.1,
        pointRadius: 3,
        pointBackgroundColor: '#9DFFB0',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },

    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#ffffff',
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false, // 👈 show all labels
        },
      },
      y: {
        position: 'right',
        grid: { color: '#5b6369' },
        ticks: {
          callback: (value) => `$${value} M`,
          color: '#C9CDD0',
        },
        min: 380,
        max: 440,
      },
    },
  };

  return (
    <div className="text-white rounded-xl max-w-3xl">
      <div className="lg:flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Volume</h2>
        <div className="lg:text-right">
          <p className="text-2xl font-bold text-white">$ {totalVolume} M</p>
          <p className="text-sm text-gray-300">Dec-20–2023 , 9:12 AM (UTC)</p>
        </div>
      </div>
      <div className="navbar sm:p-4 p-2 rounded-xl border-3 h-64 overflow-x-auto">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default VolumeChart;