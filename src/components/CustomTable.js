import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { mockData } from '../helpers';

function createData(name, redeemed, remain) {
  return { name, redeemed, remain };
}



export default function BasicTable({ dateKey }) {
  const [rows, setRows] = React.useState([])
  const { records } = useSelector(state => state.log);
  React.useEffect(() => {
    let log = records[dateKey];
    let data = mockData.filter(r => ![4, 8].includes(r.index))

    let rows = data.map(r => {
      let redeemed = log.filter(rec => rec === r.index)
      return createData(r.name, redeemed?.length, (r.propability - redeemed?.length))
    })
    setRows(rows)

  }, [records])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,fontFamily:'inherit'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item </TableCell>
            <TableCell align="right">Redeemed</TableCell>
            {/* <TableCell align="right">Remained</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.redeemed}</TableCell>
              {/* <TableCell align="right">{row.remain}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}