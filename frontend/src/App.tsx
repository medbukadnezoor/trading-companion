import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Typography, Paper, AppBar, Toolbar, Button } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#757575',
      },
      success: {
        main: '#2e7d32',
      },
      error: {
        main: '#d32f2f',
      },
      warning: {
        main: '#ffa000',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Trading Companion
            </Typography>
            <Button color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Trading Companion
            </Typography>
            <Typography variant="body1" paragraph>
              This is a development version of the Trading Companion application. The full application is currently under development.
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Features Coming Soon:
            </Typography>
            <ul>
              <li>Connect to cryptocurrency exchanges via API</li>
              <li>Track your trading history</li>
              <li>Calculate profit and loss</li>
              <li>Analyze your trading performance</li>
              <li>Visualize your portfolio</li>
            </ul>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;