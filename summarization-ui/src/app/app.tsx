import {
  Box,
  CircularProgress,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import {Dashboard} from './dashboard/dashboard';
import {Header} from './header';
import {useFetchData} from './hooks/useFetchData';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const App = () => {
  const {loading, candidates} = useFetchData();

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Container>
        <Box mt={2}>
          {loading ? (
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <CircularProgress />
            </Box>
          ) : (
            <Dashboard data={candidates} />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
