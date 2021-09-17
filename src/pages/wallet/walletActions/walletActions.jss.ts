import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletActions_root: {
      backgroundColor: "#1B1B1B",
      padding: theme.spacing(3),
    },
    walletActions_panel: {
      padding: 0,
    },
  })
);

export default useStyles;
