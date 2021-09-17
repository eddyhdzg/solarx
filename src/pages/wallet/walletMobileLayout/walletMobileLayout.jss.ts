import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletMobileLayout_tabs: {
      paddingBottom: theme.spacing(3),
    },
    walletMobileLayout_tab: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    walletMobileLayout_panel: {
      padding: 0,
    },
  })
);

export default useStyles;
