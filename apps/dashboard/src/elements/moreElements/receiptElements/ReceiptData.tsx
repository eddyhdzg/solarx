import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatDisplayDate, formatPaymentMethod } from "utils";
import { useQueryParams, useUserHistoryDoc } from "hooks";
import { useUser } from "reactfire";

export default function ReceiptData() {
  const { t } = useTranslation();
  const { id } = useQueryParams();
  const user = useUser();
  const { data } = useUserHistoryDoc(user.data?.uid, id);

  return (
    <Box
      sx={{
        mb: 8,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          sx={{
            mb: 1,
          }}
        >
          {t("pages.more.receipt.date")}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textTransform: "capitalize",
          }}
        >
          {data?.date ? formatDisplayDate(data?.date?.seconds) : "-"}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "right",
        }}
      >
        <Typography
          variant="subtitle2"
          color="textSecondary"
          sx={{
            mb: 1,
          }}
        >
          {t("pages.more.receipt.paymentMethod")}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textTransform: "capitalize",
          }}
        >
          {formatPaymentMethod(data?.card?.brand, data?.card?.last4)}
        </Typography>
      </Box>
    </Box>
  );
}
