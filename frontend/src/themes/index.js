import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#008BE5"
    },
    secondary: {
      main: "#00C99F"
    },
  },
  status: {
    danger: 'orange',
  },
});
