import { Box, Typography } from "@mui/material";
import { Project } from "solarx-types";
import { GradientLinearProgress } from "./LinearWithValueLabel.styled";

interface LinearWithValueLabelProps
  extends Pick<Project, "sharesSold" | "totalShares"> {
  label: string;
}

export default function LinearWithValueLabel({
  label,
  sharesSold = 0,
  totalShares = 1,
}: LinearWithValueLabelProps) {
  const value = (sharesSold / totalShares) * 100;
  return (
    <Box sx={{ width: "100%", textAlign: "right" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <GradientLinearProgress
            variant="determinate"
            value={value}
            aria-label="progress-bar"
            sx={{
              width: 80,
            }}
          />
        </Box>
        <Box sx={{ minWidth: 32 }}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
