import {
  makeStyles,
  Theme,
  createStyles,
  alpha,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => {
  const space = theme.spacing(0.5);

  return createStyles({
    root: {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      padding: `${space}px ${space * 2}px`,
    },
    input: {
      fontSize: 16,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
      paddingRight: theme.spacing(3),
    },
    adornedStart: {
      "& > *:first-child": {
        fontSize: 20,
        color: theme.palette.text.secondary,
        marginRight: space,
      },
    },
    adornedEnd: {
      "& > *:last-child": {
        position: "absolute",
        right: theme.spacing(0.25),
      },
    },
  });
});

export default useStyles;
