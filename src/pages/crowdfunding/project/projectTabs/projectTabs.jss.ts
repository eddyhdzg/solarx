import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useTabsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#1B1B1B",
      borderColor: "#313537",
      borderStyle: "solid",
      borderWidth: 1,
      boxShadow:
        "0px 15px 29px rgba(0, 0, 0, 0.21), 0px 1.87823px 3.63125px rgba(0, 0, 0, 0.105)",
      borderRadius: 10,
    },
    flexContainer: {
      position: "relative",
      zIndex: 1,
    },
    scroller: {
      marginTop: "4px",
      marginBottom: "4px !important",
      padding: "0px 4px",
      [theme.breakpoints.up("md")]: {
        padding: "0px 8px",
      },
    },
    indicator: {
      top: 3,
      bottom: 3,
      right: 3,
      height: "auto",
      background: "none",
      "&:after": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 4,
        right: 4,
        bottom: 0,
        borderRadius: 8,
        backgroundColor: "#232526",
        borderColor: "#2E3133",
        borderStyle: "solid",
        borderWidth: 1,
        boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
      },
    },
  })
);

export const useTabStyles = makeStyles((theme: Theme) =>
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
        minWidth: theme.spacing(12),
      },
      [theme.breakpoints.up("md")]: {
        minWidth: theme.spacing(15),
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
