import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    project_mb1: {
      marginBottom: theme.spacing(1),
    },
    project_mb4: {
      marginBottom: theme.spacing(2),
    },
    project_section: {
      minHeight: theme.spacing(40),
      backgroundColor: "#1B1B1B",
      marginLeft: `calc(-16px - env(safe-area-inset-left))`,
      paddingLeft: `calc(16px + env(safe-area-inset-left))`,
      marginRight: `calc(-16px - env(safe-area-inset-right))`,
      paddingRight: `calc(16px + env(safe-area-inset-right))`,
      [theme.breakpoints.up("md")]: {
        marginLeft: `calc(-24px - env(safe-area-inset-left))`,
        paddingLeft: `calc(24px + env(safe-area-inset-left))`,
        marginRight: `calc(-24px - env(safe-area-inset-right))`,
        paddingRight: `calc(24px + env(safe-area-inset-right))`,
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: -theme.spacing(16),
      },
    },
    project_tabsContainerWrapper: {
      position: "relative",
    },
    project_tabsContainer: {
      width: "fit-content",
      [theme.breakpoints.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
      [theme.breakpoints.up("lg")]: {
        top: theme.spacing(-4),
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
  })
);

export default useStyles;
