import { Box, Typography, alpha, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTranslation } from "react-i18next";
import { useQueryParams, useCurrInvestorHistoryDoc } from "hooks";

export default function ReceiptActions() {
  const { t } = useTranslation();
  const { id } = useQueryParams();
  const { data } = useCurrInvestorHistoryDoc(id);

  return (
    <Box
      sx={[
        (theme) => ({
          backgroundColor: alpha(theme.palette.common.white, 0.05),
          py: {
            xs: 2,
            md: 3,
          },
          px: {
            xs: 3,
            md: 6,
          },
          borderEndStartRadius: theme.shape.borderRadius,
          borderEndEndRadius: theme.shape.borderRadius,
          display: "flex",
          justifyContent: "space-between",
        }),
      ]}
    >
      <Box>
        <Typography variant="subtitle2">
          {t("pages.more.receipt.questions?")}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {t("pages.more.receipt.contactEmail")}
        </Typography>
      </Box>
      {data?.receipt_url && (
        <Button
          href={data?.receipt_url}
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LaunchIcon
            fontSize="small"
            sx={{
              mx: 1,
            }}
          />
          {t("pages.more.receipt.sharableReceipt")}
        </Button>
      )}
    </Box>
  );
}