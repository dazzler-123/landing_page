import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2F5F86',
      light: '#4F86A7',
      dark: '#1F3F5B',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4F86A7',
      light: '#4F86A7',
      dark: '#1F3F5B',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2FA36B',
      contrastText: '#ffffff',
    },
    error: {
      main: '#D64541',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F4F6F8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F3F5B',
      secondary: 'rgba(31, 63, 91, 0.7)',
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

