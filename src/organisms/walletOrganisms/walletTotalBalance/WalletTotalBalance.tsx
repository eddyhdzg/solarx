import { Typography } from "@mui/material";
import { useCurrUserWallet, useCurrLastUserMonthlyRevenue } from "hooks";
import { formatUnits, formatMoney } from "utils";
import Styled from "./WalletTotalBalance.styled";

export default function WalletTotalBalance() {
  const { data } = useCurrUserWallet();
  const { data: last } = useCurrLastUserMonthlyRevenue();
  const { total = 0 } = data || {};
  const totalBalance = data ? formatUnits(total) : "-";
  const { amount } = last || {};

  return (
    <Styled.Paper>
      <Styled.Body>
        <div>
          <Styled.Div>
            <Typography variant="h4">{totalBalance}</Typography>
            <Styled.TotalBalance variant="subtitle2" color="textSecondary">
              MXN
            </Styled.TotalBalance>
          </Styled.Div>
          <Typography variant="subtitle1" color="textSecondary">
            Total Balance
          </Typography>
        </div>
        {amount && (
          <Styled.CashWrapper>
            <Styled.Cash variant="subtitle1">
              +{formatMoney(amount)}
            </Styled.Cash>
            <Typography variant="subtitle3" color="textSecondary">
              Monthly Revenue
            </Typography>
          </Styled.CashWrapper>
        )}
      </Styled.Body>
    </Styled.Paper>
  );
}
