import { Box, Typography } from "@mui/material";

export default function ReceiptHeader() {
  return (
    <Box
      sx={{
        mb: 8,
        textAlign: {
          xxs: "right",
          sm: "unset",
        },
      }}
    >
      <Box>
        <Typography variant="h4">$2,000.00 MXN</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          #2825-6351
        </Typography>
      </Box>
    </Box>
  );
}
