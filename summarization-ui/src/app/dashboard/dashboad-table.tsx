import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {CandidateEntity} from '../types/candidate';
import {dashboardColumns} from './dashboard.column';

type Props = {
  data: CandidateEntity[];
};

export const DashboardTable: React.FC<Props> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {dashboardColumns.map((column) => (
              <TableCell key={column.value}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              {dashboardColumns.map((column) => (
                <TableCell key={column.value}>{row[column.value]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
