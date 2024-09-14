import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Grid for dashboard cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Applications Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Applications</h2>
          <p className="text-4xl font-bold text-blue-600">25</p>
        </div>

        {/* Pending Applications Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Pending Applications</h2>
          <p className="text-4xl font-bold text-yellow-500">10</p>
        </div>

        {/* Interviews Scheduled Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Interviews Scheduled</h2>
          <p className="text-4xl font-bold text-green-600">3</p>
        </div>

        {/* More cards can be added here */}
      </div>

      {/* Recent Applications Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Recent Applications</h2>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Frontend Developer at Company A</h3>
            <p className="text-sm">Applied on: 2023-09-10 | Status: Pending</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Backend Developer at Company B</h3>
            <p className="text-sm">Applied on: 2023-09-08 | Status: Interview</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Full Stack Developer at Company C</h3>
            <p className="text-sm">Applied on: 2023-09-06 | Status: Rejected</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Dashboard />
    </main>
  );
}
