import { Box, Typography } from "@mui/material";
import { useQueryParams, useUserHistoryDoc } from "hooks";
import { useUser } from "reactfire";
import { formatAbsoluteWithCurreny } from "utils";

export default function ReceiptHeader() {
  const { id } = useQueryParams();
  const user = useUser();
  const { data } = useUserHistoryDoc(user.data?.uid, id);
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
          xxs: "right",
          sm: "unset",
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
