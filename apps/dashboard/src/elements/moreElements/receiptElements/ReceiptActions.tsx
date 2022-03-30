import { Box, Typography, alpha, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function ReceiptActions() {
  return (
    <Box
      sx={[
        (theme) => ({
          backgroundColor: alpha(theme.palette.common.white, 0.05),
          py: {
            xxs: 2,
            sm: 3,
          },
          px: {
            xxs: 3,
            sm: 6,
          },
          borderEndStartRadius: theme.shape.borderRadius,
          borderEndEndRadius: theme.shape.borderRadius,
          display: "flex",
          justifyContent: "space-between",
        }),
      ]}
    >
      <Box>
        <Typography variant="subtitle1">Questions?</Typography>
        <Typography variant="body1" color="textSecondary">
          eddy@solarx.app
        </Typography>
      </Box>
      <Button
        href="https://pay.stripe.com/receipts/acct_1IALxtLgJat5E8n5/ch_3KVpr8LgJat5E8n53WNiLhBt/rcpt_LCEJeVohV5oG9aa63m8yMXLF4BNKYXO"
        color="inherit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LaunchIcon
          sx={{
            mx: 1,
          }}
        />
        Sharable Receipt URL
      </Button>
    </Box>
  );
}
