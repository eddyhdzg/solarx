import { Button, Tooltip, Typography } from "@mui/material";
import useClipboard from "react-use-clipboard";
import SellOutlinedIcon from "@mui/icons-material/ContentCopyRounded";
import { useTranslation } from "react-i18next";

export default function DepositTab() {
  const { t } = useTranslation();
  const [isCopied, setCopied] = useClipboard("601-180-1000-0202-8474", {
    successDuration: 2000,
  });

  return (
    <div>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{
          mt: 5,
          mb: 2,
        }}
      >
        Fund your account with the following key
      </Typography>

      <Tooltip
        arrow
        leaveTouchDelay={3000}
        enterTouchDelay={0}
        title={
          isCopied ? t("forms.copiedToClipboard") : t("forms.copyToClipboard")
        }
        onClick={setCopied}
      >
        <Button
          variant="outlined"
          fullWidth
          size="large"
          endIcon={<SellOutlinedIcon />}
          sx={{
            minHeight: (theme) => theme.spacing(8),
          }}
        >
          601-180-1000-0202-8474
        </Button>
      </Tooltip>
    </div>
  );
}
