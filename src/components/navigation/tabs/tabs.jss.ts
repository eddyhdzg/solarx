import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useTabsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
    },
    flexContainer: {
      position: "relative",
      zIndex: 1,
    },
    scroller: {
      padding: theme.spacing(0.5),
      [theme.breakpoints.up("xs")]: {
        padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
      },
      backgroundColor: "#1B1B1B",
      borderColor: "#313537",
      borderStyle: "solid",
      borderWidth: 1,
      boxShadow:
        "0px 15px 29px rgba(0, 0, 0, 0.21), 0px 1.87823px 3.63125px rgba(0, 0, 0, 0.105)",
      borderRadius: 10,
      maxWidth: "fit-content",
    },
    indicator: {
      top: 8,
      bottom: 8,
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
export default useTabsStyles;
