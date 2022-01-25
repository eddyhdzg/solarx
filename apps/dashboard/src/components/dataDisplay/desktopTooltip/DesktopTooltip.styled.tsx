import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

export const DesktopTooltipRoot = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)({
  [`& .${tooltipClasses.tooltip}`]: {
    textTransform: "capitalize",
  },
});
