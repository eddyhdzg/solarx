import { useLocation } from "react-router";
import useClipboard from "react-use-clipboard";
import { Tooltip, Button } from "@material-ui/core";
import IosShareRoundedIcon from "@material-ui/icons/IosShareRounded";

export default function ShareButton() {
  const location = useLocation();
  const [isCopied, setCopied] = useClipboard(
    "https://solarx.app" + location.pathname,
    {
      successDuration: 2000,
    }
  );

  return (
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
