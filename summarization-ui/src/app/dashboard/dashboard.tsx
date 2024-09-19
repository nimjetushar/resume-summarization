import {Alert} from '@mui/material';
import {CandidateEntity} from '../types/candidate';
import {DashboardTable} from './dashboad-table';

type Props = {
  data: CandidateEntity[];
};

export const Dashboard: React.FC<Props> = (props) => {
  if (!props.data.length) {
    return <Alert severity="info">No Data available.</Alert>;
  }

  return <DashboardTable data={props.data} />;
};
