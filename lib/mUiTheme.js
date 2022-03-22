import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6a961f',
    },
    secondary: {
      main: '#0d3c00',
    },
  },
  props: {
    MuiAppBar: {
      color: 'secondary',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
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