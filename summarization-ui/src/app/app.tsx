import {Box, Container, createTheme, ThemeProvider} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header';
import {AppRoute} from './route';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header />
        <Container>
          <Box mt={2}>
            <AppRoute />
          </Box>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
