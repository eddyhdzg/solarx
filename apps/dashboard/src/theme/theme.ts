import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { yellow, grey } from "@mui/material/colors";

const customTheme = {
  custom: {
    gradient: "linear-gradient(60deg, #FBDE51, #F2805A)",
    login: "linear-gradient(135deg,rgb(48, 50, 54), rgb(31, 32, 35))",
    glassBackground: {
      backgroundColor: "#212121E5",
      backdropFilter: "blur(10px)",
    },
    cash: "#00BFA5",
    totalBalance: "#fff",
    sxp: "#80B0FF",
    stocks: yellow[500],
    border: "#313537",
    elevation: {
      0: "linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03))",
      1: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
      2: "linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07))",
      3: "linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
      4: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
      6: "linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
      8: "linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",
      12: "linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14))",
      16: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
      24: "linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))",
    },
  },
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: yellow,
    secondary: grey,
  },
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl"],
    values: {
      xxs: 0,
      xs: 400,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  components: {
    StyledSelect: {},
    StyledTextField: {},
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontWeight: 600,
        },
        icon: {
          color: "inherit",
          fontSize: "inherit",
          marginRight: 0,
        },
      },
      variants: [
        {
          props: { variant: "blue" },
          style: {
            color: "#80B0ff",
            backgroundColor: "#80B0ff15",
          },
        },
        {
          props: { variant: "yellow" },
          style: {
            color: "#fad452",
            backgroundColor: "#fad45215",
          },
        },
        {
          props: { variant: "red" },
          style: {
            color: "#f44336",
            backgroundColor: "rgba(250, 82, 82, 0.15)",
          },
        },
        {
          props: { variant: "green" },
          style: {
            color: "#00BFA5",
            backgroundColor: "rgba(0, 191, 165, 0.15)",
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#212121",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-colorInherit:not(:last-of-type)": {
            borderRightColor: "inherit",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "inherit" },
          style: {
            backgroundColor: `#121212 !important`,
            backgroundImage: `${customTheme.custom.elevation[6]} !important`,
          },
        },
      ],
    },
    MuiGrid: {
      defaultProps: {},
      variants: [
        {
          props: {
            item: true,
          },
          style: {
            maxWidth: "100%",
            flexBasis: "100%",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily:
      "'Satoshi-Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    h1: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h2: {
      fontWeight: 500,
      lineHeight: "135%",
    },
    h3: {
      fontWeight: 600,
      lineHeight: "135%",
    },
    h4: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h5: {
      fontWeight: 500,
      lineHeight: "135%",
    },
    h6: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    subtitle1: {
      fontWeight: 700,
      lineHeight: "150%",
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: "150%",
    },
    subtitle3: {
      fontSize: 12,
      lineHeight: "150%",
      fontWeight: 600,
    },
    body1: {
      lineHeight: "150%",
    },
    body2: {
      lineHeight: "150%",
    },
    body3: {
      fontSize: 12,
      lineHeight: "150%",
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
      lineHeight: "150%",
      textTransform: "none",
    },
    caption: {},
    overline: {},
  },
  ...customTheme,
});

export default responsiveFontSizes(theme, {
  disableAlign: true,
});
