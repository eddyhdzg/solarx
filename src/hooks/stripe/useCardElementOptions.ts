import { alpha, useTheme } from "@mui/material";

const useCardElementOptions = () => {
  const theme = useTheme();
  return {
    style: {
      base: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.grey[800],
        fontSize: "16px",
        lineHeight: "1.4375em",
        fontFamily: theme.typography.fontFamily,
        "::placeholder": {
          color: alpha(theme.palette.text.primary, 0.42),
        },
      },
      invalid: {
        color: theme.palette.error.main,
      },
    },
  };
};

export default useCardElementOptions;
