"use client"
import React, { useState } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// Status Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConstructionIcon from '@mui/icons-material/Construction';
import CancelIcon from '@mui/icons-material/Cancel';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import PeopleIcon from '@mui/icons-material/People';

// Title Icons
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FunctionsIcon from '@mui/icons-material/Functions';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import LayersIcon from '@mui/icons-material/Layers';
import LanguageIcon from '@mui/icons-material/Language';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Tracker = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      title: "Software Developer",
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
      case 'Upcoming':
        return <UpcomingIcon style={{ color: 'blue', marginRight: 8 }} />;
      case 'Interview':
        return <PeopleIcon style={{ color: 'grey', marginRight: 8 }} />;
      default:
        return null;
    }
  };

  const getTitleIcon = (title) => {
    switch (title) {
      case 'Software Developer':
        return <DeveloperModeIcon style={{ color: 'blue', marginRight: 8 }} />;
      case 'Computer Engineer':
        return <ComputerIcon style={{ color: 'blue', marginRight: 8 }} />;
      case 'Product Manager':
        return <BusinessCenterIcon style={{ color: 'green', marginRight: 8 }} />;
      case 'Machine Learning Engineer':
        return <FunctionsIcon style={{ color: 'purple', marginRight: 8 }} />;
      case 'Data Scientist':
        return <InsightsIcon style={{ color: 'teal', marginRight: 8 }} />;
      case 'Devops':
        return <CloudIcon style={{ color: 'orange', marginRight: 8 }} />;
      case 'AI Developer':
        return <SmartToyIcon style={{ color: 'red', marginRight: 8 }} />;
      case 'CyberSecurity':
        return <SecurityIcon style={{ color: 'black', marginRight: 8 }} />;
      case 'Full Stack':
        return <LayersIcon style={{ color: 'cyan', marginRight: 8 }} />;
      case 'WebDev':
        return <LanguageIcon style={{ color: 'blue', marginRight: 8 }} />;
      case 'UX Designer':
        return <DesignServicesIcon style={{ color: 'pink', marginRight: 8 }} />;
      default:
        return null;
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      renderCell: (params) => (
        <>
          {getTitleIcon(params.value)}
          {params.value}
        </>
      ),
    },
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
      ),
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
          <FormControl fullWidth margin="dense">
            <InputLabel id="title-label">Title</InputLabel>
            <Select
              labelId="title-label"
              id="title-select"
              name="title"
              value={newApp.title}
              label="Title"
              onChange={handleChange}
            >
              <MenuItem value="Software Developer"><DeveloperModeIcon style={{ color: 'blue' }} /> Software Developer</MenuItem>
              <MenuItem value="Computer Engineer"><ComputerIcon style={{ color: 'blue' }} /> Computer Engineer</MenuItem>
              <MenuItem value="Product Manager"><BusinessCenterIcon style={{ color: 'green' }} /> Product Manager</MenuItem>
              <MenuItem value="Machine Learning Engineer"><FunctionsIcon style={{ color: 'purple' }} /> Machine Learning Engineer</MenuItem>
              <MenuItem value="Data Scientist"><InsightsIcon style={{ color: 'teal' }} /> Data Scientist</MenuItem>
              <MenuItem value="Devops"><CloudIcon style={{ color: 'orange' }} /> DevOps</MenuItem>
              <MenuItem value="AI Developer"><SmartToyIcon style={{ color: 'red' }} /> AI Developer</MenuItem>
              <MenuItem value="CyberSecurity"><SecurityIcon style={{ color: 'black' }} /> CyberSecurity</MenuItem>
              <MenuItem value="Full Stack"><LayersIcon style={{ color: 'cyan' }} /> Full Stack Developer</MenuItem>
              <MenuItem value="WebDev"><LanguageIcon style={{ color: 'blue' }} /> Web Developer</MenuItem>
              <MenuItem value="UX Designer"><DesignServicesIcon style={{ color: 'pink' }} /> UX Designer</MenuItem>
            </Select>
          </FormControl>
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
              <MenuItem value="Upcoming"><UpcomingIcon style={{ color: 'blue' }} /> Upcoming</MenuItem>
              <MenuItem value="Interview"><PeopleIcon style={{ color: 'grey' }} /> Interview</MenuItem>
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
