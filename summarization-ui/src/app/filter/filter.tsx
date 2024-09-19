import FilterListIcon from '@mui/icons-material/FilterList';
import {Box, SxProps, TextField} from '@mui/material';
import React, {useState} from 'react';
import {FilterPopup} from './filter-popup';

type Props = {
  sx?: SxProps;
};

export const Filter: React.FC<Props> = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box sx={{...props.sx, display: 'flex', alignItems: 'center'}}>
      <TextField id="name" label="Search by name" variant="standard" />

      <Box ml={2}>
        <FilterListIcon
          style={{cursor: 'pointer'}}
          onClick={() => setOpenDialog(true)}
        />
        <FilterPopup
          open={openDialog}
          closeDialog={() => setOpenDialog(false)}
        />
      </Box>
    </Box>
  );
};
