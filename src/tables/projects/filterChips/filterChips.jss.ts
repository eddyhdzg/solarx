import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: 0,
      margin: 0,
      [theme.breakpoints.up("xs")]: {
        marginRight: 8,
      },
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

export default useStyles;
