import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1d1d1dff',
    },
    secondary: {
      main: '#4ade80',
    },
    
  },
  typography:{
    fontFamily: "Segoe UI",
  }
});

theme = responsiveFontSizes(theme);
export default theme;