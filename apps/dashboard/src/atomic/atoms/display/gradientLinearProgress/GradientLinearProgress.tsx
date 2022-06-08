import { LinearProgress } from "@mui/material";

interface IGradientLinearProgressProps {
  value: number;
}

export default function GradientLinearProgress({
  value,
}: IGradientLinearProgressProps) {
  return (
    <LinearProgress
      variant="determinate"
      aria-label="progress-bar"
      value={value}
      sx={(theme) => ({
        height: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[700],
        "& .MuiLinearProgress-bar": {
          background: theme.custom.gradient,
          borderRadius: theme.shape.borderRadius,
        },
      })}
    />
  );
}
