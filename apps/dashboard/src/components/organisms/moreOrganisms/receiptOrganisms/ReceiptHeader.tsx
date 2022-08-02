import { useQueryParams, useCurrInvestorHistoryDoc } from "hooks";
import { formatAbsoluteWithCurreny } from "utils";
import { Box, Typography } from "@mui/material";

export default function ReceiptHeader() {
  const { id } = useQueryParams();
  const { data } = useCurrInvestorHistoryDoc(id);
  const amount =
    typeof data?.amount === "number"
      ? formatAbsoluteWithCurreny(data?.amount, data?.currency)
      : "-";
  const receipt_number = data?.receipt_number
    ? `#${data?.receipt_number}`
    : "-";

  return (
    <Box
      sx={{
        mb: 8,
        textAlign: {
          xs: "right",
          md: "unset",
        },
      }}
    >
      <Box>
        <Typography variant="h4">{amount}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {receipt_number}
        </Typography>
      </Box>
    </Box>
  );
}
