import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@material-ui/core";
import { useCreateMuiTheme } from "hooks";

const ThemeProvider: React.FC = ({ children }) => {
  const muiTheme = useCreateMuiTheme();

  return (
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
