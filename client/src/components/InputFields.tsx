import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as React from "react";

const handleSubmit = () => {
  //post
  axios
    .post("", {})
    .then(({ data }) => {
      //add response to data array
    })
    .catch((err) => {
      console.error(err);
    });
};

const handleCancel = () => {
  //redirect to sales lead list
};

const ValidationTextFields = () => {
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
          <TextField id="outlined-basic" label="Lead name" variant="outlined" />
          <br />
          <TextField
            id="outlined-basic"
            label="Sales representative "
            variant="outlined"
          />
          <br />
          <TextField id="outlined-basic" label="Client" variant="outlined" />
          <br />
          <TextField id="outlined-basic" label="Value" variant="outlined" />
          <br />
          <TextField id="outlined-basic" label="Date" variant="outlined" />
        </div>
      </Box>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">Save</Button>
    </div>
  );
}

export default ValidationTextFields;