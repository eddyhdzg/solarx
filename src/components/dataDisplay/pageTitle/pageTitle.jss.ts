import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      lineHeight: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
      },
    },
  })
);

export default useStyles;
