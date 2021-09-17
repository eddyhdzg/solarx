import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletActions_toWithdraw: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
    },
    walletActions_inputs: {
      marginBottom: theme.spacing(4),
    },
    walletActions_summary: {
      marginBottom: theme.spacing(3),
    },
    walletActions_formHelperTextStrong: {
      color: theme.palette.text.primary,
      fontSize: 14,
    },
    walletActions_summaryTextStrong: {
      color: theme.palette.text.primary,
    },
    walletActions_ul: {
      textAlign: "end",
    },
  })
);

export default useStyles;
