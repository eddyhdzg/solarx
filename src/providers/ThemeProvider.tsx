import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@material-ui/core";
import useCreateMuiTheme from "theme/useCreateMuiTheme";

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useCreateMuiTheme({ paletteType: "dark" });
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
