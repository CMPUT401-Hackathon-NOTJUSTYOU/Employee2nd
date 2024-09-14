"use client"
import React, { useState } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConstructionIcon from '@mui/icons-material/Construction';
import CancelIcon from '@mui/icons-material/Cancel';

const Tracker = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Co",
      status: "Applied",
      minPay: 50000,
      maxPay: 70000,
      location: "Remote",
      date: "2023-01-15"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Startup Inc.",
      status: "In Progress",
      minPay: 60000,
      maxPay: 90000,
      location: "New York",
      date: "2023-01-20"
    }
  ]); // Preset data added here
  const [open, setOpen] = useState(false);
  const [newApp, setNewApp] = useState({
    title: '',
    company: '',
    status: '',
    minPay: '',
    maxPay: '',
    location: '',
    date: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setNewApp({ ...newApp, [e.target.name]: e.target.value });
  };

  const addApplication = () => {
    const newApplication = { ...newApp, id: applications.length + 1 };
    setApplications([...applications, newApplication]);
    handleClose();
    setNewApp({ title: '', company: '', status: '', minPay: '', maxPay: '', location: '', date: '' });
  };

  const deleteApplication = (id) => {
    const filteredApps = applications.filter(app => app.id !== id);
    const updatedApps = filteredApps.map((app, index) => ({ ...app, id: index + 1 }));
    setApplications(updatedApps);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Applied':
        return <CheckCircleIcon style={{ color: 'green', marginRight: 8 }} />;
      case 'In Progress':
        return <ConstructionIcon style={{ color: 'orange', marginRight: 8 }} />;
      case 'Rejected':
        return <CancelIcon style={{ color: 'red', marginRight: 8 }} />;
      default:
        return null;
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'company', headerName: 'Company Name', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      renderCell: (params) => (
        <>
          {getStatusIcon(params.value)}
          {params.value}
        </>
      )
    },
    { field: 'minPay', headerName: 'Min Pay', type: 'number', width: 120 },
    { field: 'maxPay', headerName: 'Max Pay', type: 'number', width: 120 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'date', headerName: 'Date Applied', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Button color="error">Delete</Button>}
          label="Delete"
          onClick={() => deleteApplication(params.id)}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button onClick={handleOpen} style={{ marginBottom: 16 }}>Add New Application</Button>
      <DataGrid
        rows={applications}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Application</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" name="title" label="Title" fullWidth variant="standard" value={newApp.title} onChange={handleChange}/>
          <TextField margin="dense" name="company" label="Company Name" fullWidth variant="standard" value={newApp.company} onChange={handleChange}/>
          <FormControl fullWidth margin="dense">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-select"
              name="status"
              value={newApp.status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="Applied"><CheckCircleIcon style={{ color: 'green' }} /> Applied</MenuItem>
              <MenuItem value="In Progress"><ConstructionIcon style={{ color: 'orange' }} /> In Progress</MenuItem>
              <MenuItem value="Rejected"><CancelIcon style={{ color: 'red' }} /> Rejected</MenuItem>
            </Select>
          </FormControl>
          <TextField margin="dense" name="minPay" label="Min Pay" fullWidth variant="standard" type="number" value={newApp.minPay} onChange={handleChange}/>
          <TextField margin="dense" name="maxPay" label="Max Pay" fullWidth variant="standard" type="number" value={newApp.maxPay} onChange={handleChange}/>
          <TextField margin="dense" name="location" label="Location" fullWidth variant="standard" value={newApp.location} onChange={handleChange}/>
          <TextField margin="dense" name="date" label="Date Applied" type="date" fullWidth variant="standard" value={newApp.date} onChange={handleChange} InputLabelProps={{ shrink: true }}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addApplication}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Tracker;
