import { Box, Typography, alpha, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTranslation } from "react-i18next";
import { useQueryParams, useUserHistoryDoc } from "hooks";
import { useUser } from "reactfire";

export default function ReceiptActions() {
  const { t } = useTranslation();
  const { id } = useQueryParams();
  const user = useUser();
  const { data } = useUserHistoryDoc(user.data?.uid, id);

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
