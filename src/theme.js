import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F4F3FA',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#5248B0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5248B0',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#3D3D5C',
      secondary: '#5248B0',
    },
    divider: '#DDDAF8',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1A1A2E',
      paper: '#2C2C4A',
    },
    primary: {
      main: '#8C86D4',
      contrastText: '#1A1A2E',
    },
    secondary: {
      main: '#F5C518',
      contrastText: '#1A1A2E',
    },
    text: {
      primary: '#8C86D4',
      secondary: '#B0ABE0',
    },
    divider: '#3D3D5C',
  },
});
