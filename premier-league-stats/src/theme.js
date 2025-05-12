// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // or 'light' if you prefer
    primary: {
      main: '#00b894', // teal green (modern and sporty)
    },
    secondary: {
      main: '#0984e3', // vibrant blue
    },
    background: {
      default: '#121212', // dark minimal background
      paper: '#1e1e1e',    // card and table backgrounds
    },
    text: {
      primary: '#ffffff',
      secondary: '#b2bec3',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '1rem',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #333',
        },
      },
    },
  },
});

export default theme;
