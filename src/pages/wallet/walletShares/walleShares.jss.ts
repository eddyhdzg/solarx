import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletShares_root: {
      backgroundColor: "#1B1B1B",
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(1),
    },
    walletShares_title: {
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    },
  })
);

export default useStyles;
