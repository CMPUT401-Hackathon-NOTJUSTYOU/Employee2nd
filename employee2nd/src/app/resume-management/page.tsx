'use client';
import React, { useState } from 'react';

const ResumeManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [resumeFileName, setResumeFileName] = useState('');
  const [resumeCategory, setResumeCategory] = useState('Data Analytics');

  const categories = [
    'Data Analytics',
    'Data Science',
    'Software Development',
    'Machine Learning',
    'DevOps',
  ];

  const handleAddResumeClick = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    // Handle the logic for saving the new resume file and category
    console.log('Resume File Name:', resumeFileName);
    console.log('Resume Category:', resumeCategory);
    setShowModal(false); // Close the modal after saving
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Management</h1>

      {/* Master Resume Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Master Resume</h2>
        <p>
          <a href="#" className="text-blue-500 underline">
            Download Master Resume
          </a>
        </p>
      </div>

      {/* Tailored Resumes Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tailored Resumes</h2>
          <button
            onClick={handleAddResumeClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            + Add New Resume
          </button>
        </div>

        {/* Subsections for Tailored Resumes */}
        {categories.map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-medium">{category}</h3>
            <p>
              <a href="#" className="text-blue-500 underline">
                Download {category} Resume
              </a>
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Adding New Resume */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add New Resume</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">File Name</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                value={resumeFileName}
                onChange={(e) => setResumeFileName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Category</label>
              <select
                className="border rounded-lg p-2 w-full"
                value={resumeCategory}
                onChange={(e) => setResumeCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeManagement;
