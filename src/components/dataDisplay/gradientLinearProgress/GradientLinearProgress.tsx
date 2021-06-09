import { LinearProgress } from "@material-ui/core";
import useStyles from "./gradientLinearProgress.jss";

interface IGradientLinearProgressProps {
  value: number;
}

export default function GradientLinearProgress({
  value,
}: IGradientLinearProgressProps) {
  const classes = useStyles();
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      classes={{
        root: classes.gradientLinearProgress_progressBarRoot,
        colorPrimary: classes.gradientLinearProgress_progressBarColorPrimary,
        bar: classes.gradientLinearProgress_bar,
      }}
      aria-label="progress-bar"
    />
  );
}
