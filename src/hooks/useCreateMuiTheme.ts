import { useState, useEffect } from "react";
import {
  createMuiTheme,
  ThemeOptions,
  responsiveFontSizes,
} from "@material-ui/core";
import { useThemeType } from "hooks";
import { useStore } from "providers";
import shallow from "zustand/shallow";
import createBreakpoints from "theme/createBreakpoints";

export const customTheme = {
  custom: {
    gradient: "linear-gradient(45deg, #6EE7B7, #3B82F6)",
  },
};

const useCreateMuiTheme = () => {
  const system = useThemeType();
  const { themeType } = useStore(({ themeType }) => ({ themeType }), shallow);

  const [theme, setTheme] = useState<ThemeOptions>({
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
              color: "#FBDE51",
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
      type: themeType === "auto" ? system : themeType,
      primary: {
        light: "#FCE882",
        main: "#FBDE51",
        dark: "#F2CC0D",
        contrastText: "#fff",
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
        fontWeight: 600,
      },
      subtitle2: {
        fontWeight: 500,
      },
    },
  });

  useEffect(() => {
    setTheme((theme) => ({
      ...theme,
      palette: {
        ...theme.palette,
        type: themeType === "auto" ? system : themeType,
      },
    }));
  }, [themeType, system]);

  const muiTheme = createMuiTheme(theme, {
    ...customTheme,
  });

  return responsiveFontSizes(muiTheme);
};

export default useCreateMuiTheme;
