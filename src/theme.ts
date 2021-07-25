import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';

const theme = createTheme({
  palette: {
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[900],
    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
    },
  },
  typography: {
    fontFamily: ['"Varela Round", sans-serif', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
