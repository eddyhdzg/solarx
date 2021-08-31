import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    link: {
      color: "inherit",
      textDecoration: "inherit",
    },
  })
);

export default useStyles;
