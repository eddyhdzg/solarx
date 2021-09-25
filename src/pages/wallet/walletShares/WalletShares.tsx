import { Paper, Typography } from "@mui/material";
import { WalletSharesTable } from "tables";

export default function WalletShares() {
  return (
    <Paper
      sx={{
        p: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          pt: 2,
          px: 2,
          pb: 1,
        }}
      >
        Shares
      </Typography>
      <WalletSharesTable />
    </Paper>
  );
}
