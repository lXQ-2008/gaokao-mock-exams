import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e6b',
      light: '#4a6491',
      dark: '#1a2744',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5b6e8f',
      light: '#8a9bb5',
      dark: '#3a4a63',
    },
    background: {
      default: '#f8f9fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#5a5f72',
    },
    divider: '#e8eaef',
  },
  typography: {
    fontFamily: '"Noto Sans SC", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    subtitle2: { fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.7rem' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e8eaef',
          boxShadow: 'none',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            borderColor: '#c4cad4',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6,
          fontSize: '0.7rem',
          height: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          fontSize: '0.8rem',
          padding: '6px 18px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #e8eaef',
        },
      },
    },
  },
});

export default theme;
