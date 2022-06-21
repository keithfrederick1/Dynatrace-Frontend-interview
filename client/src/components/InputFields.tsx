import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useContext, useState } from 'react';
import { Context } from '../Context';



const ValidationTextFields = () => {
  const { handleLeadSubmit, setShowLeads, showLeads, leadsList, setLeadsList } = useContext(Context);
  const [formData, setFormData] = useState({
    name: '',
    value: 0, 
    date: '',
    clientName: '',
    ownerName: ''
  })

  const handleFormChange : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    event.preventDefault();

    // const fieldName = event.target.getAttribute('name');
    // const fieldValue = event.target.value;

    // const newFormData = {...formData};
    // fieldName === 'value' ? newFormData[fieldName] = parseInt(fieldValue) : newFormData[fieldName] = fieldValue;

    // setFormData(newFormData);
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
          <TextField id="outlined-basic" label="Lead name" variant="outlined" onChange={handleFormChange}/>
          <br />
          <TextField
            id="outlined-basic"
            label="Sales representative "
            variant="outlined"
            onChange={handleFormChange}
          />
          <br />
          <TextField id="outlined-basic" label="Client" variant="outlined" onChange={handleFormChange}/>
          <br />
          <TextField id="outlined-basic" label="Value" variant="outlined" onChange={handleFormChange}/>
          <br />
          <TextField id="outlined-basic" label="Date" variant="outlined" onChange={handleFormChange}/>
        </div>
      </Box>
      <Button variant="outlined" onClick={() => setShowLeads(!showLeads)} sx={{ left: '540px', borderColor: '#00C5E0', color: '#00C5E0', boxShadow: 0 }}>Cancel</Button>
      <Button variant="contained" onClick={() => handleLeadSubmit(formData)} sx={{  left: '550px', backgroundColor: '#00C5E0', boxShadow: 0}}>Save</Button>
    </div>
  );
}

export default ValidationTextFields;