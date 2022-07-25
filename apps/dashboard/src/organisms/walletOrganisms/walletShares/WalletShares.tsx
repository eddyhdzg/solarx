import { WalletSharesTable } from "tables";
import { useCurrUserShares } from "hooks";
import { useTranslation } from "react-i18next";
import { StyledPaper, StyledTypography } from "./WalletShares.styled";

export default function WalletShares() {
  const { data } = useCurrUserShares();
  const { t } = useTranslation();

  return (
    <StyledPaper>
      <StyledTypography variant="subtitle1">
        {t("pages.wallet.panels.panels")}
      </StyledTypography>
      <WalletSharesTable rows={data} />
    </StyledPaper>
  );
}
