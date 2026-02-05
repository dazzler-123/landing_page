import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0B4F3D',
      light: '#0B4F3D',
      dark: '#0B4F3D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E8A54C',
      light: '#E8A54C',
      dark: '#E8A54C',
      contrastText: '#1A2B25',
    },
    background: {
      default: '#F8F7F4',
      paper: '#ffffff',
    },
    text: {
      primary: '#1A2B25',
      secondary: 'rgba(26, 43, 37, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: {
      fontFamily: "'Instrument Serif', serif",
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: "'Instrument Serif', serif",
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: "'Instrument Serif', serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Instrument Serif', serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Instrument Serif', serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Instrument Serif', serif",
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

