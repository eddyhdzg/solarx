import { NumberFormatInput } from "components";
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  InputsContainer,
  StyledFormControl,
  SummaryContainer,
} from "./WithdrawTab.styled";

export default function WithdrawTab() {
  return (
    <>
      <InputsContainer>
        <StyledFormControl variant="outlined" fullWidth>
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
        </StyledFormControl>
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
      </InputsContainer>
      <SummaryContainer>
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
      </SummaryContainer>
      <Tooltip title="Coming soon">
        <div>
          <Button
            size="large"
            variant="contained"
            type="submit"
            disabled
            fullWidth
          >
            Withdraw
          </Button>
        </div>
      </Tooltip>
    </>
  );
}
