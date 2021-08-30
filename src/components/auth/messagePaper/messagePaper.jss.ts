import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messagePaper_root: {
      maxWidth: "56rem",
      display: "flex",
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      [theme.breakpoints.up("md")]: {
        padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
      },
    },
  })
);

export default useStyles;
