import { useTheme } from "@material-ui/core/styles";
import useDotStyles from "./dot.jss";

export interface IDotProps {
  color?: "default" | "green" | "red";
}

export default function Dot({ color = "default" }: IDotProps) {
  const theme = useTheme();
  const colorMap = {
    default: theme.palette.text.primary,
    green: theme.custom.cash,
    red: theme.palette.error.main,
  };

  const classes = useDotStyles({ color: colorMap[color] });

  return <div className={classes.walletHistory_dot} />;
}
