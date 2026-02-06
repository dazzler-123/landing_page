import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0F223F',
      light: '#2B5A8E',
      dark: '#0A1628',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3097C0',
      light: '#4F86A7',
      dark: '#0F223F',
      contrastText: '#ffffff',
    },
    success: {
      main: '#50BB5A',
      contrastText: '#ffffff',
    },
    error: {
      main: '#D64541',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F0942D',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAFD',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: 'rgba(51, 51, 51, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: "'IPlus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    body2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '12px 32px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

