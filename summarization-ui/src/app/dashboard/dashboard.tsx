import {Alert, Box, CircularProgress} from '@mui/material';
import {CandidateEntity} from '../types/candidate';
import {DashboardTable} from './dashboad-table';

type Props = {
  data: CandidateEntity[];
  loading: boolean;
};

export const Dashboard: React.FC<Props> = (props) => {
  if (props.loading) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
      </Box>
    );
  }
  if (!props.data.length) {
    return <Alert severity="info">No Data available.</Alert>;
  }

  return <DashboardTable data={props.data} />;
};
