import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import hexRgb from 'hex-rgb';

const primaryColor = '#2f7955';
const secondaryColor = '#0A3000';

const primaryBoxShaddow = '0px 8px 20px 0px ' + hexRgb(primaryColor, {format: 'css'}).replace(/.$/," / 30%)")

// Create a theme instance.
let theme = createTheme({
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
        contained: {
          boxShadow: primaryBoxShaddow,
          '&:hover': {
            boxShadow: primaryBoxShaddow,
          },
        }
      }
    }
  },
  typography: {
    h2: {
      fontSize: '2.9rem',
    },
    h3: {
      fontSize: '2.8rem',
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.71,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;