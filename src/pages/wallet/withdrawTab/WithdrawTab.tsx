import { NumberFormatInput } from "components";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

export default function WithdrawTab() {
  return (
    <>
      <Box
        sx={{
          mb: 4,
        }}
      >
        <FormControl
          variant="outlined"
          fullWidth
          sx={{
            mt: 5,
            mb: 2,
          }}
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
            inputComponent={NumberFormatInput as any}
            defaultValue={0}
          />
          <FormHelperText id="amount-to-withdraw-helper-text">
            Available cash:{" "}
            <Typography
              variant="subtitle2"
              component="strong"
              color="textPrimary"
            >
              $684.16 MXN
            </Typography>
          </FormHelperText>
        </FormControl>
      </Box>
      <Box
        sx={{
          mb: 3,
        }}
      >
        <Box
          sx={{
            textAlign: "end",
          }}
        >
          <li>
            <Typography color="textSecondary">
              Transaction Fee:{" "}
              <Typography
                variant="subtitle1"
                component="strong"
                color="textPrimary"
              >
                $10.60 MXN
              </Typography>
            </Typography>
          </li>
          <li>
            <Typography color="textSecondary">
              You will get:{" "}
              <Typography
                variant="subtitle1"
                component="strong"
                color="textPrimary"
              >
                $581.40 MXN
              </Typography>
            </Typography>
          </li>
        </Box>
      </Box>
      <Button size="large" variant="contained" type="submit" disabled fullWidth>
        Withdraw
      </Button>
    </>
  );
}
