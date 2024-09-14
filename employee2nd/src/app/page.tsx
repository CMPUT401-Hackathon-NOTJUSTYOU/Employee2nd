'use client'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the components required for the Pie chart
ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function Home() {
  // Sample data for the Pie chart
  const data = {
    labels: ['Rejected', 'In Progress', 'Accepted', 'Up Coming', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Sample Pie Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Pie chart to control its size
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div style={{ width: '300px', height: '300px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}