import React from 'react';
import { DataGrid,GridRowsProp,GridColDef } from '@mui/x-data-grid'; 

const rows: GridRowsProp = [
  { id: 1, col1: 'Interview', col2: 'Frontend Developer', col3: 'Company A', col4: 'In-person', col5: '2023-09-10' },
  { id: 2, col1: 'Rejected', col2: 'Backend Developer', col3: 'Company B', col4: 'N/A', col5: '2023-09-08' },
  { id: 3, col1: 'Offer', col2: 'Full Stack Developer', col3: 'Company C', col4: 'N/A', col5: '2023-09-06' },
  { id: 4, col1: 'Interview', col2: 'DevOps Engineer', col3: 'Company D', col4: 'Online', col5: '2023-09-11' },
  { id: 5, col1: 'Offer', col2: 'Data Scientist', col3: 'Company E', col4: 'N/A', col5: '2023-09-12' },
  { id: 6, col1: 'Online Assessment', col2: 'Machine Learning Engineer', col3: 'Company F', col4: 'Online', col5: '2023-09-15' },
  { id: 7, col1: 'Interview', col2: 'Cloud Architect', col3: 'Company G', col4: 'In-person', col5: '2023-09-14' },
  { id: 8, col1: 'Rejected', col2: 'Software Engineer', col3: 'Company H', col4: 'N/A', col5: '2023-09-16' },
  { id: 9, col1: 'Online Assessment', col2: 'Mobile Developer', col3: 'Company I', col4: 'Online', col5: '2023-09-13' },
  { id: 10, col1: 'Interview', col2: 'Product Manager', col3: 'Company J', col4: 'Online', col5: '2023-09-17' },
];

// Column definitions for DataGrid
const columns: GridColDef[] = [
  { field: 'col5', headerName: 'Date', width: 150 },
  { field: 'col1', headerName: 'Response Type', width: 200 },
  { field: 'col2', headerName: 'Position', width: 200 },
  { field: 'col3', headerName: 'Company', width: 200 },
  { field: 'col4', headerName: 'Format', width: 150 },
]; 

const Responses = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Responses</h1>
      <p>This is the page where you can manage your responses.</p>
      {/* You can include your resume management functionality here */}
      <DataGrid rows={rows} columns={columns} />
    </div>

  );
};



export default Responses;
