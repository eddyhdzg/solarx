import { IconButton, Tooltip, TooltipProps } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IInfoTooltipProps extends Omit<TooltipProps, "children"> {}

export default function InfoTooltip(props: IInfoTooltipProps) {
  return (
    <Tooltip arrow leaveTouchDelay={3000} enterTouchDelay={0} {...props}>
      <IconButton size="small">
        <InfoOutlinedIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
}
