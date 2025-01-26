// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Primary color - Blue
    },
    text: {
      primary: '#333', // Dark text for visibility
      secondary: '#ffffff', // White text for secondary text
    },
    background: {
      default: '#f0f0f0', // Light background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'capitalize', // Default textTransform for all buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 16px', // Button padding
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            backgroundColor: '#007bff',
            color: '#fff',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;