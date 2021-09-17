import {
  createTheme,
  PaletteType,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core";
import createBreakpoints from "theme/createBreakpoints";
import yellow from "@material-ui/core/colors/yellow";

export interface CustomTheme {
  custom: {
    gradient: string;
    login: string;
    glassBackground: {
      backgroundColor: string;
      backdropFilter: string;
    };
    cash: string;
    totalBalance: string;
    stocks: string;
  };
}

export const customTheme: CustomTheme = {
  custom: {
    gradient: "linear-gradient(60deg, #FBDE51, #F2805A)",
    // gradient2: "linear-gradient(60deg, #EBCE41, #E2704A)",
    login: "linear-gradient(135deg,rgb(48, 50, 54), rgb(31, 32, 35))",
    glassBackground: {
      backgroundColor: "rgba(31, 31, 31, 0.90)",
      backdropFilter: "blur(10px)",
    },
    cash: "#00BFA5",
    totalBalance: "#80B0FF",
    stocks: yellow[500],
  },
};

const useCreateMuiTheme = () => {
  const palette: PaletteType = "dark";

  const theme: ThemeOptions = {
    overrides: {
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
      MuiButton: {
        root: {
          textTransform: "capitalize",
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
        "'Satoshi-Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 700,
      },
      subtitle1: {
        fontWeight: 700,
      },
      subtitle2: {
        fontWeight: 600,
      },
      button: {
        textTransform: "capitalize",
      },
    },
  };

  const muiTheme = createTheme(theme, {
    ...customTheme,
  });

  return responsiveFontSizes(muiTheme);
};

export default useCreateMuiTheme;
