'use client'
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the components required for the Pie chart and Histogram
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

export default function Home() {
  // Sample data for the Pie chart
  const pieData = {
    labels: ['Rejected', 'In Progress', 'Accepted', 'Up Coming'],
    datasets: [
      {
        label: 'Sample Pie Chart',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#CC0A0A',
          '#861657',
          '#3DB522',
          '#2266B4',
        ],
        borderColor: [
          '#000000',
          '#000000',
          '#000000',
          '#000000',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Pie chart
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#000000', // Change legend text color to black
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          },
        },
        titleColor: '#000000',
        bodyColor: '#000000',
      },
    },
  };

  // Sample data for the Histogram
  const barData = {
    labels: ['Cyber Security', 'Software Engineering', 'Dev Ops', 'Full Stack', 'ML', 'AI'],
    datasets: [
      {
        label: 'Field Distribution',
        data: [20, 30, 15, 25, 10, 5],
        backgroundColor: [
          '#6A5ACD', // SlateBlue
          '#7B68EE', // MediumSlateBlue
          '#87CEFA', // LightSkyBlue
          '#4682B4', // SteelBlue
          '#4169E1', // RoyalBlue
          '#6495ED', // CornflowerBlue
        ],
        borderColor: '#000000',
        borderWidth: 1,
      },
    ],
  };

  // Options for the Histogram
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#000000', // Change legend text color to black
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          },
        },
        titleColor: '#000000',
        bodyColor: '#000000',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000000', // Change x-axis text color to black
        },
      },
      y: {
        ticks: {
          color: '#000000', // Change y-axis text color to black
        },
      },
    },
  };

  return (
    <div className="flex justify-start items-center min-h-screen p-8 space-x-8">
      <div style={{ width: '400px', height: '400px' }}>
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div style={{ width: '500px', height: '700px' }}>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
