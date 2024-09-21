import {Alert, Box, CircularProgress} from '@mui/material';
import {useFilter} from '../hooks/useFilter';
import {CandidateEntity} from '../types/candidate';
import {DashboardTable} from './dashboad-table';
import {Filter} from './filter/filter';

type Props = {
  data: CandidateEntity[];
  loading: boolean;
};

export const Dashboard: React.FC<Props> = (props) => {
  const {filteredCandidate, applyFilter, filterByName} = useFilter(props.data);

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

  return (
    <>
      <Filter
        sx={{mb: 4}}
        applyFilter={applyFilter}
        filterByName={filterByName}
      />
      <DashboardTable data={filteredCandidate} />
    </>
  );
};
