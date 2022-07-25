import {
  Box,
  LinearProgress,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import { Project } from "solarx-types";

interface LinearWithValueLabelProps
  extends Pick<Project, "panelsSold" | "totalShares"> {
  label: string;
}

export default function LinearWithValueLabel({
  label,
  panelsSold = 0,
  totalShares = 1,
}: LinearWithValueLabelProps) {
  const value = (panelsSold / totalShares) * 100;
  return (
    <Box sx={{ width: "100%", textAlign: "right" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={value}
            aria-label="progress-bar"
            sx={(theme) => ({
              width: 80,
              borderRadius: 1,
              backgroundColor: theme.palette.grey[700],
              [`& .${linearProgressClasses.bar}`]: {
                background: theme.custom.gradient,
                borderRadius: 1,
              },
            })}
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
