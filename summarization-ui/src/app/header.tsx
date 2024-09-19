import {AppBar, Toolbar, Typography} from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          CV Summarization Tool
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
