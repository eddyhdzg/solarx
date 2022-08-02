import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatDisplayDate, formatPaymentMethod } from "utils";
import { useQueryParams, useCurrInvestorHistoryDoc } from "hooks";

export default function ReceiptData() {
  const { t } = useTranslation();
  const { id } = useQueryParams();
  const { data } = useCurrInvestorHistoryDoc(id);
  const date = data?.date ? formatDisplayDate(data?.date?.seconds) : "-";

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
          {date}
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
