import { WalletSharesTable } from "tables";
import { useCurrUserShares } from "hooks";
import { StyledPaper, StyledTypography } from "./WalletShares.styled";

export default function WalletShares() {
  const { data } = useCurrUserShares();

  return (
    <StyledPaper>
      <StyledTypography variant="subtitle1">Shares</StyledTypography>
      <WalletSharesTable rows={data} />
    </StyledPaper>
  );
}
