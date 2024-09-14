'use client'
import React, { useState } from 'react';

// Define a type for the categories and their associated resumes
type ResumeCategory = 'Data Analytics' | 'Data Science' | 'Software Development' | 'Machine Learning' | 'DevOps';

interface Resume {
  name: string;
  date: string;
  link: string; // Adding a link field for the Google Docs URL
}

const ResumeManagement = () => {
  // Use Record type to ensure that the keys are of type ResumeCategory
  const [resumes, setResumes] = useState<Record<ResumeCategory, Resume[]>>({
    'Data Analytics': [],
    'Data Science': [],
    'Software Development': [],
    'Machine Learning': [],
    DevOps: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [resumeFileName, setResumeFileName] = useState('');
  const [resumeCategory, setResumeCategory] = useState<ResumeCategory>('Data Analytics');

  const categories: ResumeCategory[] = ['Data Analytics', 'Data Science', 'Software Development', 'Machine Learning', 'DevOps'];

  // Function to handle adding a new resume
  const handleAddResumeClick = () => {
    setShowModal(true);
  };

  // Function to handle saving the new resume
  const handleSave = () => {
    if (resumeFileName) {
      const newDocId = Math.random().toString(36).substring(2, 15); // Generate a random document ID
      const newResume: Resume = {
        name: resumeFileName,
        date: new Date().toLocaleDateString(),
        link: `https://docs.google.com/document/d/${newDocId}/edit`, // Simulate a Google Docs link
      };

      setResumes((prevResumes) => {
        const updatedCategory = [...prevResumes[resumeCategory]];

        // Add new resume version at the beginning of the array
        updatedCategory.unshift(newResume);

        // Keep only the most recent 5 versions
        if (updatedCategory.length > 5) {
          updatedCategory.pop();
        }

        return {
          ...prevResumes,
          [resumeCategory]: updatedCategory,
        };
      });

      // Clear the input fields and close the modal
      setResumeFileName('');
      setResumeCategory('Data Analytics');
      setShowModal(false);
    }
  };

  // Function to handle deleting a resume
  const handleDelete = (category: ResumeCategory, index: number) => {
    setResumes((prevResumes) => {
      const updatedCategory = [...prevResumes[category]];

      // Remove the resume at the specified index
      updatedCategory.splice(index, 1);

      return {
        ...prevResumes,
        [category]: updatedCategory,
      };
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Management</h1>

      {/* Master Resume Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Master Resume</h2>
        <p>
          <a href="https://docs.google.com/document/d/1eQKdQlImbWRIpRXKV5OqAnFHsIDXBMeJM3qHJfCqXHw/edit?usp=sharing" className="text-blue-500 underline">
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

        {/* Subsections for Tailored Resumes with multiple versions */}
        {categories.map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium mb-2">{category}</h3>
            {resumes[category].length > 0 ? (
              resumes[category].map((resume, index) => (
                <div key={index} className="mb-2 flex justify-between items-center">
                  <a href={resume.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {resume.name} - {resume.date}
                  </a>
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(category, index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No resumes yet</p>
            )}
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
                onChange={(e) => setResumeCategory(e.target.value as ResumeCategory)}
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
