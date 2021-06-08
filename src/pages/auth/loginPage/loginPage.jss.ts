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
      background:
        theme.palette.type === "dark" ? theme?.custom?.login : undefined,
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      backgroundColor:
        theme.palette.type === "dark" ? "transparent" : undefined,
      boxShadow: theme.palette.type === "dark" ? "none" : undefined,
      width: "100%",
      maxWidth: theme.spacing(50),
      padding: theme.spacing(8, 4),
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
