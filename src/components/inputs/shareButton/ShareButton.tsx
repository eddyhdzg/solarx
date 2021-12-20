import { useLocation } from "react-router";
import useClipboard from "react-use-clipboard";
import { Tooltip, Button } from "@mui/material";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
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
      color="inherit"
      sx={{
        textTransform: "capitalize",
      }}
    >
      {t("forms.share")}
    </Button>
  ) : (
    <Tooltip
      leaveTouchDelay={3000}
      enterTouchDelay={0}
      title={
        isCopied ? t("forms.copiedToClipboard") : t("forms.copyToClipboard")
      }
      onClick={setCopied}
    >
      <Button
        startIcon={<IosShareRoundedIcon />}
        size="small"
        color="inherit"
        sx={{
          textTransform: "capitalize",
        }}
      >
        {t("forms.share")}
      </Button>
    </Tooltip>
  );
}
