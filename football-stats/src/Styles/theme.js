import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for primary elements
    },
    secondary: {
      main: '#ff9800', // Orange color for secondary elements
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1976d2', // Blue color for headings
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#ff9800', // Orange color for subheadings
    },
    body1: {
      fontSize: '1rem',
      color: '#333', // Dark grey color for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#666', // Medium grey color for secondary text
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;