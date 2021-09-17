import { Button, NumberFormatInput } from "components";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import useStyles from "./withdrawTab.jss";

export default function WithdrawTab() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.walletActions_inputs}>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.walletActions_toWithdraw}
        >
          <InputLabel htmlFor="account-to-withdraw">To</InputLabel>
          <Select
            native
            label="To"
            inputProps={{
              name: "account-to-withdraw",
              id: "account-to-withdraw",
            }}
            disabled
          >
            <option aria-label="None" value="" />
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="amount-to-withdraw"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            endAdornment={<InputAdornment position="end">MXN</InputAdornment>}
            aria-describedby="amount-to-withdraw"
            inputProps={{
              "aria-label": "amount-to-withdraw",
              min: 1,
              fixedDecimalScale: true,
              thousandSeparator: true,
              decimalScale: 2,
            }}
            labelWidth={0}
            inputComponent={NumberFormatInput as any}
            defaultValue={0}
          />
          <FormHelperText id="amount-to-withdraw-helper-text">
            Available cash:{" "}
            <strong className={classes.walletActions_formHelperTextStrong}>
              $684.16 MXN
            </strong>
          </FormHelperText>
        </FormControl>
      </div>
      <div className={classes.walletActions_summary}>
        <ul className={classes.walletActions_ul}>
          <li>
            <Typography color="textSecondary">
              Transaction Fee:{" "}
              <strong className={classes.walletActions_summaryTextStrong}>
                $10.60 MXN
              </strong>
            </Typography>
          </li>
          <li>
            <Typography color="textSecondary">
              You will get:{" "}
              <strong className={classes.walletActions_summaryTextStrong}>
                $581.40 MXN
              </strong>
            </Typography>
          </li>
        </ul>
      </div>
      <Button size="large" variant="contained" type="submit" disabled fullWidth>
        Withdraw
      </Button>
    </>
  );
}
