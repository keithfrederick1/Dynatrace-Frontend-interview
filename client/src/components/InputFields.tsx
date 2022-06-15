import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useContext, useState } from 'react';
import { Context } from '../Context';

//complete fix context

const ValidationTextFields = () => {
  const { handleLeadSubmit, setShowLeads } = useContext(Context);
  const [name, setName] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<string| undefined>(undefined);

  const newLead = {
  name,
  value,
  date,
  clientName,
  ownerName
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
          <TextField id="outlined-basic" label="Lead name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
          <br />
          <TextField
            id="outlined-basic"
            label="Sales representative "
            variant="outlined"
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <br />
          <TextField id="outlined-basic" label="Client" variant="outlined" onChange={(e) => setClientName(e.target.value)}/>
          <br />
          <TextField id="outlined-basic" label="Value" variant="outlined" onChange={(e) => setValue(parseInt(e.target.value))}/>
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