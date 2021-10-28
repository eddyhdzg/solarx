import { WalletSharesTable } from "tables";
import { StyledPaper, StyledTypography } from "./WalletShares.styled";

export default function WalletShares() {
  return (
    <StyledPaper>
      <StyledTypography variant="subtitle1">Shares</StyledTypography>
      <WalletSharesTable />
    </StyledPaper>
  );
}
