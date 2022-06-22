import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from "react";
import { useContext, useState } from 'react';
import { Context } from '../Context';


const ValidationTextFields = () => {
  const { handleLeadSubmit, setShowLeads, showLeads, leadsList, setLeadsList } = useContext(Context);

  const [leadName, setLeadName] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [salesRep, setSalesRep] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<Date | null>(new Date());

  const handleChange = (newDate: Date | null) => {
    setDate(newDate);
  };


  const newLead = {
    name: leadName,
    value: value,
    date: date,
    clientName: client,
    ownerName: salesRep
  }


  return (
    <div>
      <h2>Add sales lead</h2>
      <p>Enter sales lead information below.</p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-basic" label="Lead name" variant="outlined" onChange={(e) => setLeadName(e.target.value)}/>
          <br />
          <TextField
            id="outlined-basic"
            label="Sales representative "
            variant="outlined"
            onChange={(e) => setSalesRep(e.target.value)}
          />
          <br />
          <TextField id="outlined-basic" label="Client" variant="outlined" onChange={(e) => setClient(e.target.value)}/>
          <br />
          <TextField id="outlined-basic" label="Value" variant="outlined" onChange={(e) => setValue(parseInt(e.target.value))}/>
          <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
             <DesktopDatePicker
              label=""
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleChange}
              renderInput={(params: any) => <TextField {...params} />}
              />
            </Stack>
         </LocalizationProvider>
        </div>
      </Box>
      <Button variant="outlined" onClick={() => setShowLeads(!showLeads)} sx={{ left: '540px', borderColor: '#00C5E0', color: '#00C5E0', boxShadow: 0 }}>Cancel</Button>
      <Button variant="contained" onClick={() => handleLeadSubmit(newLead)} sx={{  left: '550px', backgroundColor: '#00C5E0', boxShadow: 0}}>Save</Button>
    </div>
  );
}

export default ValidationTextFields;



