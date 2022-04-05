import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import hexRgb from 'hex-rgb';

const primaryColor = '#2f7955';
const secondaryColor = '#0A3000';

const primaryBoxShaddow = '0px 8px 20px 0px ' + hexRgb(primaryColor, {format: 'css'}).replace(/.$/," / 30%)")


// Elena,-apple-system,BlinkMacSystemFont,Roboto,roboto slab,droid serif,segoe ui,system-ui,Arial,sans-serif
// Elena,-apple-system,BlinkMacSystemFont,Roboto,roboto slab,droid serif,segoe ui,system-ui,Arial,sans-serif
// 1.125em


// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '1.125rem',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1.225rem',
        },
        contained: {
          boxShadow: primaryBoxShaddow,
          '&:hover': {
            boxShadow: primaryBoxShaddow,
          },
        }
      }
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;