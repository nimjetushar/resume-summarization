import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {useState} from 'react';
import {CandidateEntity} from '../types/candidate';
import {dashboardColumns} from './dashboard.column';
import {SummaryPopup} from './summary-popup/summary-popup';

type Props = {
  data: CandidateEntity[];
};

export const DashboardTable: React.FC<Props> = (props) => {
  const [dialogData, setDialogData] = useState<CandidateEntity | null>(null);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              {dashboardColumns.map((column) => (
                <TableCell key={column.value}>{column.label}</TableCell>
              ))}
              <TableCell>Action</TableCell>
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
                <TableCell>
                  <IconButton onClick={() => setDialogData(row)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SummaryPopup data={dialogData} closeDialog={() => setDialogData(null)} />
    </>
  );
};
