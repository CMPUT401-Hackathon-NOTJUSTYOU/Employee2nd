'use client'
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import type { TooltipItem, ChartOptions } from 'chart.js';
import React from 'react';

// Register the components required for the Pie chart and Histogram
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

export default function Home() {
  // Sample data for the Pie chart
  const pieData = {
    labels: ['Rejected', 'In Progress', 'Accepted', 'Up Coming', 'Interview'],
    datasets: [
      {
        label: 'Sample Pie Chart',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#CC0A0A',
          '#861657',
          '#3DB522',
          '#2266B4',
          '#FFFF00',
        ],
        borderColor: [
          '#000000',
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
  const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#000000', // Change legend text color to black
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<'pie'>) {
            const value = tooltipItem.raw as number; // Cast to number
            return value.toString(); // Show only the number
          },
        },
        titleColor: '#000000',
        bodyColor: '#FFFFFF', // Change tooltip body text color to white
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
  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<'bar'>) {
            const value = tooltipItem.raw as number; // Cast to number
            return value.toString(); // Show only the number
          },
        },
        titleColor: '#000000',
        bodyColor: '#FFFFFF', // Change tooltip body text color to white
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

  // Sample job data for the table
  const jobData = [
    { company: 'Company A', position: 'Software Engineer', progress: 'In Progress' },
    { company: 'Company B', position: 'Data Scientist', progress: 'Accepted' },
    { company: 'Company C', position: 'UX Designer', progress: 'Rejected' },
    { company: 'Company D', position: 'Project Manager', progress: 'Up Coming' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8 space-y-8">
      <div className="flex justify-between w-full max-w-screen-lg space-x-8">
        <div style={{ width: '400px', height: '400px' }}>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="flex justify-center items-center" style={{ width: '700px', height: '500px' }}>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Progress</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobData.map((job, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
