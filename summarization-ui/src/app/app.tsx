import {Box, Container, createTheme, ThemeProvider} from '@mui/material';
import {Dashboard} from './dashboard/dashboard';
import {Filter} from './filter/filter';
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
          <Filter sx={{mb: 4}} />
          <Dashboard data={candidates} loading={loading} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
