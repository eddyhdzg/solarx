import { Grid, Paper, Typography } from "@material-ui/core";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import useStyles from "./walletSummary.jss";
import { formatMoney } from "utils";

export default function WalletSummary() {
  const classes = useStyles();

  return (
    <Paper className={classes.walletSummary_root} elevation={3}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={12}
          lg={4}
          className={classes.walletSummary_item}
        >
          <div className={classes.walletSummary_iconWrapper}>
            <MonetizationOnOutlinedIcon
              className={classes.walletSummary_icon__totalBalance}
            />
          </div>
          <div>
            <Typography variant="h6">{formatMoney(10684.16)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Total Balance
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={4} className={classes.walletSummary_item}>
          <div className={classes.walletSummary_iconWrapper}>
            <MonetizationOnOutlinedIcon
              className={classes.walletSummary_icon__stocks}
            />
          </div>
          <div>
            <Typography variant="h6">{formatMoney(10000)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Stocks
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.walletSummary_item}>
          <div className={classes.walletSummary_iconWrapper}>
            <MonetizationOnOutlinedIcon
              className={classes.walletSummary_icon__cash}
            />
          </div>
          <div>
            <Typography variant="h6">{formatMoney(684.16)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Cash
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
