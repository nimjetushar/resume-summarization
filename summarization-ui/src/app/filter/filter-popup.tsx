import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {useState} from 'react';
import {Filter} from '../types/candidate';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialState: Filter = {
  gender: '',
  yearOfExperience: '',
};

type Props = {
  open: boolean;
  closeDialog: () => void;
  applyFilter: (filter: Filter) => void;
};

export const FilterPopup: React.FC<Props> = (props) => {
  const [filter, setFilter] = useState<Filter>({...initialState});

  const changeHandler = (value: string, field: keyof Filter) => {
    setFilter({
      ...filter,
      [field]: value,
    });
  };

  const searchHandler = () => {
    props.applyFilter(filter);
    props.closeDialog();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.closeDialog}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Search
        </Typography>
        <Box sx={{mt: 2}}>
          <Grid container spacing={4}>
            <Grid size={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="year-of-experience">
                  Year of experience
                </InputLabel>
                <Select
                  labelId="year-of-experience"
                  id="year-of-experience"
                  label="Year of experience"
                  value={filter.yearOfExperience}
                  onChange={(event) =>
                    changeHandler(event.target.value, 'yearOfExperience')
                  }
                >
                  <MenuItem value={0}>Fresher</MenuItem>
                  <MenuItem value={2}>2+</MenuItem>
                  <MenuItem value={4}>4+</MenuItem>
                  <MenuItem value={8}>8+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  label="Gender"
                  value={filter.gender}
                  onChange={(event) =>
                    changeHandler(event.target.value, 'gender')
                  }
                >
                  <MenuItem value={'Male'}>Male</MenuItem>
                  <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4} sx={{display: 'flex', justifyContent: 'end'}}>
          <Button sx={{mr: 2}} onClick={() => setFilter({...initialState})}>
            Reset
          </Button>
          <Button variant="contained" onClick={searchHandler}>
            Search
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
