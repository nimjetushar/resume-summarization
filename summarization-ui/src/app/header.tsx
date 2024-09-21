import UploadIcon from '@mui/icons-material/Upload';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
            CV Summarization Tool
          </span>
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => navigate('upload')}
          color="inherit"
        >
          <UploadIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
