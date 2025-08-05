import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const BTCGradientChart = () => {
  const [btcPrices, setBtcPrices] = useState([]);
  const [labels, setLabels] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);

  const fetchBTCData = async () => {
    try {
      const response = await axios.get(
        'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=20'
      );

      const prices = response.data.map(item => parseFloat(item[4]));
      const timeLabels = response.data.map(item => {
        const date = new Date(item[0]);
        return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      });

      setBtcPrices(prices);
      setLabels(timeLabels);
      setCurrentPrice(prices[prices.length - 1]);
    } catch (error) {
      console.error('Error fetching BTC data:', error);
    }
  };

  useEffect(() => {
    fetchBTCData();
    const interval = setInterval(fetchBTCData, 60000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'BTC/USDT',
        data: btcPrices,
        fill: true,
        borderColor: 'rgba(255, 128, 0, 1)',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(255, 128, 0, 1)'); // orange
          gradient.addColorStop(1, '#FE7B2A'); // red
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#334145',
          borderDash: [4, 4],
        },
        ticks: {
          color: '#A0A5A9',
        },
      },
      y: {
        position: 'right',
        grid: { color: '#334145' },
        ticks: {
          color: '#A0A5A9',
          callback: value => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="text-white rounded-xl max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">BTC / USDT</h2>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">
            {currentPrice ? `$ ${currentPrice.toLocaleString()}` : 'Loading...'}
          </p>
          <p className="text-sm text-gray-300">Binance 1H Chart</p>
        </div>
      </div>

      <div className="navbar p-2 rounded-xl border-3 h-64 relative">
        {/* Highlighted label on the right */}
        {currentPrice && (
          <div className="absolute top-[55%] right-4 z-10 bg-[#00E6B8] text-black font-bold text-xs px-2 py-1 rounded-full shadow-md">
            ${currentPrice.toFixed(0)}
          </div>
        )}

        {/* Chart */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BTCGradientChart;