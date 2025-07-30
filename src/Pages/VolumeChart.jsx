// VolumeChart.jsx
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
  const labels = ["02", "17", "02", "18", "02", "18", "30", "17", "02", "18", "02", "17", "02"];
  const volumeData = [300, 420, 410, 390, 370, 360, 350, 340, 360, 400, 430, 440, 430];

  const totalVolume = volumeData.reduce((acc, val) => acc + val, 0).toFixed(3);

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Bar Volume',
        data: volumeData,
        backgroundColor: '#00E6B8',
        borderRadius: 6,
        barThickness: 14,
      },
      {
        type: 'line',
        label: 'Line Volume',
        data: volumeData,
        borderColor: '#9DFFB0',
        backgroundColor: '#9DFFB0',
        tension: 0.4,
        pointRadius: 4,
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
      },
      y: {
        grid: { color: '#334145' },
        ticks: {
          callback: (value) => `$${value} M`,
          color: '#C9CDD0',
        },
        min: 360,
        max: 460,
      },
    },
  };

  return (
    <div className="text-white p-6 rounded-xl max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Volume</h2>
        <div className="text-right">
          <p className="text-3xl font-bold text-[#9DFFB0]">${totalVolume} M</p>
          <p className="text-sm text-gray-400">Dec-20–2023 , 9:12 AM (UTC)</p>
        </div>
      </div>
      <div className="bg-[#2B3335] p-4 rounded-lg h-64">
        <Chart type='bar' data={data} options={options} />
      </div>
    </div>
  );
};

export default VolumeChart;
