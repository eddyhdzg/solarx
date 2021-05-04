import React from "react";
import { Tooltip as MUITooltip, Zoom, TooltipProps } from "@material-ui/core";
import useStyles from "./tooltip.jss";

const Tooltip: React.FC<TooltipProps> = (props) => {
  const styles = useStyles();
  return (
    <MUITooltip
      {...props}
      classes={styles}
      TransitionComponent={Zoom}
      disableTouchListener
    />
  );
};

export default Tooltip;
