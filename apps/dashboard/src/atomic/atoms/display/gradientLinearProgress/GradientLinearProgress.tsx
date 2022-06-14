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
        height: 8,
        borderRadius: 1,
        backgroundColor: "grey.700",
        "& .MuiLinearProgress-bar": {
          background: theme.custom.gradient,
          borderRadius: 1,
        },
      })}
    />
  );
}
