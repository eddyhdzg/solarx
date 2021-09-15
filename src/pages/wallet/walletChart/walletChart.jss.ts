import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletChart_root: {
      backgroundColor: "#1B1B1B",
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(3),
    },
    walletChart_titleWrapper: {
      display: "flex",
      alignItems: "center",
    },
    walletChart_title: {
      marginRight: theme.spacing(0.5),
    },
    walletChart_titleActivity: {
      color: "#00BFA5",
    },
    formControl: {
      marginBottom: theme.spacing(2),
      minWidth: 120,
    },
    walletChart_header: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default useStyles;
