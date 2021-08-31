import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectHeader_root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    projectHeader_title: {
      marginBottom: theme.spacing(1.5),
    },
    projectHeader_chips: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
        [theme.breakpoints.only("xxs")]: {
          fontSize: "10px",
        },
        [theme.breakpoints.only("xs")]: {
          fontSize: "11px",
        },
      },
    },
    projectHeader_button: {
      marginLeft: theme.spacing(0.5),
    },
  })
);

export default useStyles;
