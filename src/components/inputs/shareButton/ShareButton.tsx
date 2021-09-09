import { useLocation } from "react-router";
import useClipboard from "react-use-clipboard";
import { Tooltip, Button } from "@material-ui/core";
import IosShareRoundedIcon from "@material-ui/icons/IosShareRounded";
import { useCanUseShareAPI } from "hooks";
import { useTranslation } from "react-i18next";

export default function ShareButton() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isCopied, setCopied] = useClipboard(
    "https://dashboard.solarx.app" + location.pathname,
    {
      successDuration: 2000,
    }
  );

  const canUseShareAPI = useCanUseShareAPI();

  const shareDetails = {
    url: "https://dashboard.solarx.app" + location.pathname,
    title: "Solar X",
    text: "Invest in Solar Energy",
  };

  const handleShareButton = () => {
    if (navigator.share) {
      navigator
        .share(shareDetails)
        .then(() => {})
        .catch(() => {});
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };

  return canUseShareAPI ? (
    <Button
      startIcon={<IosShareRoundedIcon />}
      size="small"
      onClick={handleShareButton}
    >
      {t("forms.share")}
    </Button>
  ) : (
    <Tooltip
      arrow
      leaveTouchDelay={3000}
      enterTouchDelay={0}
      title={
        isCopied ? t("forms.copiedToClipboard") : t("forms.copyToClipboard")
      }
      onClick={setCopied}
    >
      <Button startIcon={<IosShareRoundedIcon />} size="small">
        {t("forms.share")}
      </Button>
    </Tooltip>
  );
}
