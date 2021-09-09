import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltip: {
      textTransform: "capitalize",
    },
    menu: {
      padding: theme.spacing(2, 3, 3),
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1),
    },
    form: {
      maxWidth: "500px",
    },
    field: {
      width: "100%",
    },
  })
);

export default useStyles;
