import { styled } from "@mui/material/styles";
import { Tooltip, Zoom, TooltipProps, tooltipClasses } from "@mui/material";

const DesktopTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Zoom}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
}));

export default DesktopTooltip;
