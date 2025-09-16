import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#4ade80',
    },
    secondary: {
      main: '#050505ff',
    },
    
  },
  typography:{
    fontFamily: "Segoe UI",
  }
});

theme = responsiveFontSizes(theme);
export default theme;