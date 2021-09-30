import { GradientLinearProgressRoot } from "./GradientLinearProgress.styled";

interface IGradientLinearProgressProps {
  value: number;
}

export default function GradientLinearProgress({
  value,
}: IGradientLinearProgressProps) {
  return (
    <GradientLinearProgressRoot
      variant="determinate"
      value={value}
      aria-label="progress-bar"
    />
  );
}
