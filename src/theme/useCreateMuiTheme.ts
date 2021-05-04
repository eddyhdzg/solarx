import { PaletteType, createMuiTheme } from "@material-ui/core";
import createBreakpoints from "./createBreakpoints";

export const customTheme = {
  custom: {
    gradient: "linear-gradient(45deg, #6EE7B7, #3B82F6)",
  },
};

interface useCreateMuiThemeArgs {
  paletteType: PaletteType;
}
const useCreateMuiTheme = ({ paletteType }: useCreateMuiThemeArgs) => {
  const muiTheme = createMuiTheme(
    {
      breakpoints: createBreakpoints({
        values: {
          xxs: 0,
          xs: 400,
          sm: 768,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      }),
      palette: {
        type: paletteType,
        primary: {
          light: "#7DE8BE",
          main: "#47D19A",
          dark: "#339971",
          contrastText: "#fff",
        },
      },
      typography: {
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      },
    },
    {
      ...customTheme,
    }
  );

  return muiTheme;
};

export default useCreateMuiTheme;
