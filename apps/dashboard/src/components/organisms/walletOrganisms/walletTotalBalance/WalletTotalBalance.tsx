import { Typography } from "@mui/material";
import {
  useCurrInvestorWallet,
  useCurrLastInvestorMonthlyRevenue,
} from "hooks";
import { formatUnits, formatHistoryValue } from "utils";
import { useTranslation } from "react-i18next";
import Styled from "./WalletTotalBalance.styled";

export default function WalletTotalBalance() {
  const { data } = useCurrInvestorWallet();
  const { data: last } = useCurrLastInvestorMonthlyRevenue();
  const { total = 0 } = data || {};
  const totalBalance = data ? formatUnits(total) : "-";
  const { amount, currency } = last || {};
  const { t } = useTranslation();

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
            {t("pages.wallet.sections.totalBalance")}
          </Typography>
        </div>
        {amount && (
          <Styled.CashWrapper>
            <Styled.Cash variant="subtitle1">
              {formatHistoryValue(amount, currency)}
            </Styled.Cash>
            <Typography variant="subtitle3" color="textSecondary">
              {t("projects.monthlyRevenue")}
            </Typography>
          </Styled.CashWrapper>
        )}
      </Styled.Body>
    </Styled.Paper>
  );
}
