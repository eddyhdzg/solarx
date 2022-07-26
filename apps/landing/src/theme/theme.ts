import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";
import { amber, blue, grey, red, teal, yellow } from "@mui/material/colors";

const customTheme = {
  custom: {
    gradient: `linear-gradient(60deg, ${yellow[400]}, ${amber[900]})`,
    gradient2: `linear-gradient(60deg, ${alpha(yellow[400], 0.9)}, ${alpha(
      amber[900],
      0.9
    )})`,
    glassBackground: {
      backgroundColor: alpha(grey[900], 0.9),
      backdropFilter: "blur(10px)",
    },
    blue: blue[300],
    red: red[300],
    teal: teal[300],
    yellow: yellow[300],
    cash: "#00BFA5",
    totalBalance: "#fff",
    sxp: "#80B0FF",
    panels: yellow[500],
    border: "#313537",
    grey950: "#121212",
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
    keys: ["xs", "sm", "md", "lg", "xl", "2xl"],
    values: {
      xs: 0,
      sm: 400,
      md: 768,
      lg: 1024,
      xl: 1440,
      "2xl": 1920,
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
            color: customTheme.custom.blue,
            backgroundColor: alpha(customTheme.custom.blue, 0.15),
          },
        },
        {
          props: { variant: "yellow" },
          style: {
            color: customTheme.custom.yellow,
            backgroundColor: alpha(customTheme.custom.yellow, 0.15),
          },
        },
        {
          props: { variant: "red" },
          style: {
            color: customTheme.custom.red,
            backgroundColor: alpha(customTheme.custom.red, 0.15),
          },
        },
        {
          props: { variant: "teal" },
          style: {
            color: customTheme.custom.teal,
            backgroundColor: alpha(customTheme.custom.teal, 0.15),
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: grey[900],
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
            backgroundColor: `${customTheme.custom.grey950} !important`,
            backgroundImage: `${customTheme.custom.elevation[6]} !important`,
          },
        },
      ],
    },
    MuiGrid: {
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
