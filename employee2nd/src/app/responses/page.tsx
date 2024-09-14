import React from 'react';
import { DataGrid,GridRowsProp,GridColDef } from '@mui/x-data-grid';


const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
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
