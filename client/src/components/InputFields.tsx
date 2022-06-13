import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useContext, useState } from 'react';
import Context from '../Context';

//complete fix context

const ValidationTextFields = () => {
  const { handleLeadSubmit, setShowLeads } = useContext(Context);
  const [leadName, setLeadName] = useState<string>('');
  const [salesRep, setSalesRep] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const newLead = {
    name: leadName,
    value: value,
    date: date,
    ownerName: salesRep,
    clientName: client
  };

  return (
    <div>
      <h2>Add sales lead</h2>
      <p>Enter sales lead information below.</p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
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
          <TextField id="outlined-basic" label="Value" variant="outlined" onChange={(e) => setValue(e.target.value)}/>
          <br />
          <TextField id="outlined-basic" label="Date" variant="outlined" onChange={(e) => setDate(e.target.value)}/>
        </div>
      </Box>
      <Button variant="outlined" onClick={() => setShowLeads(false)}>Cancel</Button>
      <Button variant="contained" onClick={() => handleLeadSubmit(newLead)}>Save</Button>
    </div>
  );
}

export default ValidationTextFields;