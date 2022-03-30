import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatAbsoluteWithCurreny } from "utils";
import { useQueryParams, useUserPaymentDoc } from "hooks";
import { useUser } from "reactfire";

export default function ReceiptSummary() {
  const { t } = useTranslation();
  const { id } = useQueryParams() as {
    id: string;
  };
  const user = useUser();
  const { data: payment } = useUserPaymentDoc(user.data?.uid, id);

  return (
    <Box
      sx={{
        mb: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{
          mb: 2,
        }}
      >
        {t("pages.more.receipt.summary")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mr: 1.5,
          }}
        >
          <Box
            component="img"
            src="https://files.stripe.com/links/MDB8YWNjdF8xSUFMeHRMZ0phdDVFOG41fGZsX3Rlc3RfSTJZZmZRNUc3SVhPdndZQUJSWTRKbjho00XSSzMWWi"
            height={48}
            width={48}
            alt="project-avatar"
            sx={{
              borderRadius: 1,
              mr: 1.5,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1">
              {payment?.metadata?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {payment?.metadata?.description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "right",
          }}
        >
          <Typography variant="subtitle1">
            {formatAbsoluteWithCurreny(payment?.amount, payment?.currency)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {Number(payment?.metadata?.quantity) > 1 &&
              `${formatAbsoluteWithCurreny(
                payment?.amount || 0 / Number(payment?.metadata?.quantity),
                payment?.currency
              )} ${t("pages.more.receipt.each")}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
