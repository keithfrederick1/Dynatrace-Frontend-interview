import ClearIcon from '@mui/icons-material/Clear';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import { useContext } from 'react';
import { Context } from '../Context';
//for formatting currency
const currFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
//for formatting date 
const formatDate = (date: Date ) => {
  function pad(s : any) { return (s < 10) ? '0' + s : s; }
  var d = new Date(date)
  return [pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/')
}



const columns = ['Lead name', 'Sales rep', 'Clients', 'Value', 'Date', 'Delete'];


const BasicTable = () => {
  const { leadsList, handleDelete, setChosenLead, chosenLead } = useContext(Context);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , fontFamily: 'Open Sans, Sans-serif', }} aria-label="simple table">
        <TableHead>
          <TableRow>
            { columns.map(c =>  <TableCell align="left" sx={{fontWeight: 'bold'}}>{c}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {leadsList ? leadsList.map((lead) => (
            <TableRow
              key={lead.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#1f94b8" }}>
                {lead.name}
              </TableCell>
              <TableCell align="left" sx={{ color: "black" }}>{lead.ownerName}</TableCell>
              <TableCell align="left" sx={{ color: "#636363" }}>{lead.clientName}</TableCell>
              <TableCell align="left" sx={{ color: "#636363" }}>{currFormatter.format(lead.value)}</TableCell>
              <TableCell align="left" sx={{ color: "#636363" }}>{lead.date !== null ? formatDate(lead.date): lead.date}</TableCell>
              <TableCell align="left">
                <Button
                variant="text"
                onClick={() => handleDelete(lead.id)}
                sx={{ color: "#51b7c2", fontWeight: "bold" }}>
                  <ClearIcon />
                </Button>
              </TableCell>
            </TableRow>
          )): <div>No Data</div>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;