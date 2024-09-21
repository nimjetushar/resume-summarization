import {Box, Chip} from '@mui/material';
import React from 'react';

export const Skills: React.FC<{skills: string}> = ({skills}) => {
  if (!skills.length) {
    return null;
  }

  return (
    <Box mb={2}>
      {skills.split(',').map((skill, key) => (
        <Chip
          sx={{mr: 0.5, ml: 0.5}}
          key={key}
          label={skill}
          variant="outlined"
        />
      ))}
    </Box>
  );
};
