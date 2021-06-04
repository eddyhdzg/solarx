import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flex: "1 0 auto",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      minWidth: "100vw",
      background: "linear-gradient(rgb(48, 50, 54) 0%, rgb(31, 32, 35) 50%)",
    },
    logo: {
      marginBottom: theme.spacing(4),
    },
    text: {
      fontWeight: 500,
      marginBottom: theme.spacing(4),
    },
  })
);

export default useStyles;
