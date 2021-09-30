import { Tooltip } from "@mui/material";
import useClipboard from "react-use-clipboard";
import SellOutlinedIcon from "@mui/icons-material/ContentCopyRounded";
import { useTranslation } from "react-i18next";
import { Caption, AccountNumber } from "./DepositTab.styled";

export default function DepositTab() {
  const { t } = useTranslation();
  const [isCopied, setCopied] = useClipboard("601-180-1000-0202-8474", {
    successDuration: 2000,
  });

  return (
    <div>
      <Caption variant="subtitle2" color="textSecondary">
        Fund your account with the following key
      </Caption>

      <Tooltip
        leaveTouchDelay={3000}
        enterTouchDelay={0}
        title={
          isCopied ? t("forms.copiedToClipboard") : t("forms.copyToClipboard")
        }
        onClick={setCopied}
      >
        <AccountNumber
          color="inherit"
          variant="outlined"
          fullWidth
          size="large"
          endIcon={<SellOutlinedIcon />}
        >
          601-180-1000-0202-8474
        </AccountNumber>
      </Tooltip>
    </div>
  );
}
