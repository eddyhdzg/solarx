import { Zoom, TooltipProps } from "@mui/material";
import { DesktopTooltipRoot } from "./DesktopTooltip.styled";

const DesktopTooltip = ({ className, ...props }: TooltipProps) => (
  <DesktopTooltipRoot
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Zoom}
  />
);

export default DesktopTooltip;
