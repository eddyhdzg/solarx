import { Zoom, TooltipProps, styled, Tooltip } from "@mui/material";

export const DesktopTooltipRoot = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)();

const DesktopTooltip = ({ className, ...props }: TooltipProps) => (
  <DesktopTooltipRoot
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Zoom}
  />
);

export default DesktopTooltip;
