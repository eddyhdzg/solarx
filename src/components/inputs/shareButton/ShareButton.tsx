import { useLocation } from "react-router";
import useClipboard from "react-use-clipboard";
import { Tooltip, Button } from "@material-ui/core";
import IosShareRoundedIcon from "@material-ui/icons/IosShareRounded";
import { useCanUseShareAPI } from "hooks";

export default function ShareButton() {
  const location = useLocation();
  const [isCopied, setCopied] = useClipboard(
    "https://solarx.app" + location.pathname,
    {
      successDuration: 2000,
    }
  );

  const canUseShareAPI = useCanUseShareAPI();

  const shareDetails = {
    url: "https://solarx.app" + location.pathname,
    title: "Solar X",
    text: "Invest in Solar Energy",
  };

  const handleShareButton = () => {
    if (navigator.share) {
      navigator
        .share(shareDetails)
        .then(() => {
          console.log("Sharing successfull");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
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
      Share
    </Button>
  ) : (
    <Tooltip
      arrow
      leaveTouchDelay={3000}
      enterTouchDelay={0}
      title={isCopied ? "Copied to clipboard ✅" : "Copy to clipboard"}
      onClick={setCopied}
    >
      <Button startIcon={<IosShareRoundedIcon />} size="small">
        Share
      </Button>
    </Tooltip>
  );
}
