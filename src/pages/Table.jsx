import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, buttonAdd, buttonDelete) {
    return { name, buttonAdd, buttonDelete };
  }
  
  const rows = [
    createData('Parjo', 'add', 6.0),
    createData('Billie', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Eilish', 305, 3.7),
    createData('Shrek', 356, 16.0),
    createData('Selena', 356, 16.0),
    createData('Taylor', 356, 16.0),
    createData('Gomez', 356, 16.0),
    createData('Swift', 356, 16.0),
    createData('charlie', 356, 16.0),
  ];

export default function CustomTable() {
  return (
    <TableContainer component={Paper} sx={{ width: 400, height:400, textAlign: 'center' }}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">button(Add)</StyledTableCell>
            <StyledTableCell align="right">button(Delete)</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.buttonAdd}</StyledTableCell>
              <StyledTableCell align="right">{row.buttonDelete}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
