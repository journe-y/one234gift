import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTableHead({ datas }) {
  return (
    <TableHead>
      <TableRow>
        {datas.map((data) => (
          <TableCell align="center">{data}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function DataTableBody({ datas, hover, ignoreKey }) {
  const [selectedRow, setSelectedRow] = React.useState();

  return (
    <TableBody>
      {datas.map((data, idx) => (
        <TableRow
          onClick={() => {
            if(data.selectable){
              setSelectedRow(data.idx)
            }
            data.onClick(data.idx);
          }}
          selected={selectedRow === data.idx}
          hover={hover}
          key={idx}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {Object.keys(data).map((key, _idx) => {
            if (ignoreKey && ignoreKey.includes(key)) {
              return null;
            }
            return (
              <TableCell key={_idx} align="center">
                {data[key]}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
}

function DataTable({ header, data, ignoreKey, size }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        size={size}
      >
        {header && <DataTableHead datas={header} />}
        <DataTableBody datas={data} hover ignoreKey={ignoreKey} />
      </Table>
    </TableContainer>
  );
}

export default DataTable;
