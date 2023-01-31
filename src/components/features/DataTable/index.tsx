import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  TableContainer,
  Paper,
} from '@mui/material';
import { FormValues } from 'actions/actions';
import React from 'react';
import { useSelector } from 'react-redux';

const DataTable: React.FC = () => {
  const values: FormValues[] = useSelector((state: any) => state.form.values);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleReset = () => {
    setSearchTerm('');
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const filteredValues = values.filter(
    (value) =>
      value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          gap: (theme) => theme.spacing(10),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: (theme) => theme.spacing(10),
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleReset}>
            Reset
          </Button>
        </Box>
        <Paper variant="outlined">
          <TableContainer sx={{ width: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              {filteredValues.map((data, index) => {
                return (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.email}</TableCell>
                      <TableCell>{data.message}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default DataTable;
