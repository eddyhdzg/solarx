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
      value={value}
      aria-label="progress-bar"
      sx={{
        height: (theme) => theme.spacing(1),
        borderRadius: 5,
        bgcolor: (theme) => theme.palette.grey[700],
        "& .MuiLinearProgress-bar": {
          background: (theme) => theme.custom.gradient,
          borderRadius: 5,
        },
      }}
    />
  );
}
