import { SwitchProps } from "@mui/material/Switch";
import { IOSStyledSwitch } from "./Switch.styled";

const IOSSwitch = (props: SwitchProps) => (
  <IOSStyledSwitch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
);

export default IOSSwitch;
