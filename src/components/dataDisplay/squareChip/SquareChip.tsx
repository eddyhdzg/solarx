import { Chip, ChipProps, useTheme } from "@material-ui/core";
import useStyles from "./squareChip.jss";

interface ISquareChipProps extends Omit<ChipProps, "className" | "color"> {
  color?: "default" | "green" | "red";
}

export default function SquareChip({
  color = "default",
  ...rest
}: ISquareChipProps) {
  const theme = useTheme();

  const colorMap = {
    default: theme.palette.text.primary,
    green: theme.custom.cash,
    red: theme.palette.error.main,
  };
  const backgroundColorMap = {
    default: "rgba(255, 255, 255, 0.10)",
    green: "rgba(0, 191, 165, 0.21)",
    red: "rgba(250, 82, 82, 0.21)",
  };

  const classes = useStyles({
    color: colorMap[color],
    backgroundColor: backgroundColorMap[color],
  });

  return <Chip className={classes.squareChip_root} {...rest} />;
}
