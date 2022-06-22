import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';


export default function DatePicker() {
  const [value, setValue] = React.useState<Date | null>(
    new Date(),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label=""
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  )};