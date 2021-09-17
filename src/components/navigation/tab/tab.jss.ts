import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useTabStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        opacity: 1,
      },
      "&:focus": {
        opacity: 1,
      },
      minWidth: theme.spacing(8),
      [theme.breakpoints.up("xs")]: {
        minWidth: theme.spacing(10),
      },
      [theme.breakpoints.up("sm")]: {
        minWidth: theme.spacing(15),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
      },
    },
    wrapper: {
      color: theme.palette.text.primary,
      textTransform: "initial",
      margin: "2px 12px",
      [theme.breakpoints.up("xs")]: {
        margin: "6px 20px",
      },
      [theme.breakpoints.up("sm")]: {
        margin: "8px 24px",
      },
    },
  })
);

export default useTabStyles;
