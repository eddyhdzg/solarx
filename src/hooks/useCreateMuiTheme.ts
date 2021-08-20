import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { usePalette } from "hooks";
import createBreakpoints from "theme/createBreakpoints";
import yellow from "@material-ui/core/colors/yellow";

export interface CustomTheme {
  custom: {
    gradient: string;
    login: string;
  };
}

export const customTheme: CustomTheme = {
  custom: {
    gradient: "linear-gradient(60deg, #FBDE51, #F2805A)",
    // gradient2: "linear-gradient(60deg, #EBCE41, #E2704A)",
    login: "linear-gradient(135deg,rgb(48, 50, 54), rgb(31, 32, 35))",
  },
};

const useCreateMuiTheme = () => {
  const palette = usePalette();

  const theme = {
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "::selection": {
            color: "#333333",
            background: "#FCE882",
          },
        },
      },
      MuiListItem: {
        button: {
          "&.Mui-selected": {
            backgroundColor: "transparent",
            "& div": {
              color: palette === "dark" ? yellow[500] : yellow[700],
            },
            "&:hover, &:focus": {
              backgroundColor: "rgba(255, 250, 130, 0.24)",
            },
          },
        },
      },
    },
    breakpoints: createBreakpoints({
      values: {
        xxs: 0,
        xs: 400,
        sm: 768,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
      keys: ["xxs", "xs", "sm", "md", "lg", "xl"],
    }),
    palette: {
      type: palette,
      primary:
        palette === "dark"
          ? yellow
          : {
              light: yellow[500],
              main: yellow[700],
              dark: yellow[900],
              contrastText: "#000000",
            },
    },
    typography: {
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
      subtitle1: {
        fontWeight: 700,
        lineHeight: "1.5rem",
      },
      subtitle2: {
        fontWeight: 600,
        lineHeight: "1.5rem",
      },
    },
  };

  const muiTheme = createMuiTheme(theme, {
    ...customTheme,
  });

  return responsiveFontSizes(muiTheme);
};

export default useCreateMuiTheme;
