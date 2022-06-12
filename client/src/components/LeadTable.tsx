import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import { useContext } from 'react';
import Context from '../Context';




const BasicTable = () => {
  const { leadsList, handleDelete, setChosenLead, chosenLead } = useContext(Context);

  //helper function to assign chosen lead and delete
  const selectAndSend  = (e? : MouseEvent) => {
    if (e && e.target) {
    setChosenLead((e.target as HTMLButtonElement).value);
    handleDelete(chosenLead.id);
    }
    
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Lead name</TableCell>
            <TableCell align="left">Sales Rep</TableCell>
            <TableCell align="left">Clients</TableCell>
            <TableCell align="left">Value</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leadsList.map((lead) => (
            <TableRow
              key={lead.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {lead.name}
              </TableCell>
              <TableCell align="left">{lead.ownerName}</TableCell>
              <TableCell align="left">{lead.clientName}</TableCell>
              <TableCell align="left">{lead.value}</TableCell>
              <TableCell align="left">{lead.date}</TableCell>
              <TableCell align="left">
                <Button 
                variant="text"
                onClick={() => selectAndSend()}>
                  x
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;