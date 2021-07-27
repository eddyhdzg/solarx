import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterSearch_search: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    filterSearch_searchIcon: {
      padding: theme.spacing(0, 1),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    filterSearch_inputRoot: {
      color: "inherit",
    },
    filterSearch_inputInput: {
      padding: theme.spacing(1, 4),
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
    filterSearch_clearIcon: {
      position: "absolute",
      right: theme.spacing(0.25),
    },
  })
);

export default useStyles;
