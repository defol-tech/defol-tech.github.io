import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark', // Padrão escuro como na home
    primary: {
      main: '#00ffff', // Cor do particles
      dark: '#1e293b',
    },
    secondary: {
      main: '#4f46e5',
      light: '#e0e7ff',
    },
    background: {
      default: '#0f2027',
      paper: '#1e293b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
