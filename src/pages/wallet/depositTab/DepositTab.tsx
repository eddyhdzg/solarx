import { Button, Tooltip, Typography } from "@material-ui/core";
import useClipboard from "react-use-clipboard";
import SellOutlinedIcon from "@material-ui/icons/ContentCopyRounded";
import { useTranslation } from "react-i18next";
import useStyles from "./depositTab.jss";

export default function DepositTab() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isCopied, setCopied] = useClipboard("601-180-1000-0202-8474", {
    successDuration: 2000,
  });

  return (
    <div>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        className={classes.depositTab_subtitle}
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
          className={classes.depositTab_button}
        >
          601-180-1000-0202-8474
        </Button>
      </Tooltip>
    </div>
  );
}
