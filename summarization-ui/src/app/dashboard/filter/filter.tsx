import FilterListIcon from '@mui/icons-material/FilterList';
import {Box, IconButton, SxProps, TextField, Tooltip} from '@mui/material';
import React, {useState} from 'react';
import {Filter as FilterParam} from '../../types/candidate';
import {FilterPopup} from './filter-popup';

type Props = {
  applyFilter: (filter: FilterParam) => void;
  filterByName: (name: string) => void;
  sx?: SxProps;
};

export const Filter: React.FC<Props> = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box sx={{...props.sx, display: 'flex', alignItems: 'center'}}>
      <TextField
        id="name"
        label="Search by name"
        variant="standard"
        onChange={(event) => props.filterByName(event.target.value)}
      />

      <Box ml={2}>
        <Tooltip title="Advance filter">
          <IconButton onClick={() => setOpenDialog(true)}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <FilterPopup
          open={openDialog}
          closeDialog={() => setOpenDialog(false)}
          applyFilter={props.applyFilter}
        />
      </Box>
    </Box>
  );
};
