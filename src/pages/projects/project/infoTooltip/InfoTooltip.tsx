import { IconButton, Tooltip, TooltipProps } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

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
