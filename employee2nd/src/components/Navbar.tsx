import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg py-6 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold tracking-wider">Job Tracker</h1>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/" className="text-white hover:bg-indigo-500 px-4 py-2 rounded transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tracker" className="text-white hover:bg-indigo-500 px-4 py-2 rounded transition duration-300 ease-in-out">
              Tracker
            </Link>
          </li>
          <li>
            <Link href="/responses" className="text-white hover:bg-indigo-500 px-4 py-2 rounded transition duration-300 ease-in-out">
              Responses
            </Link>
          </li>
          <li>
            <Link href="/resume-management" className="text-white hover:bg-indigo-500 px-4 py-2 rounded transition duration-300 ease-in-out">
              Resume Management
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
