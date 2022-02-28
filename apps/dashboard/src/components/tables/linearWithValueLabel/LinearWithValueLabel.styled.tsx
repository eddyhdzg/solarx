import { styled, LinearProgress } from "@mui/material";

export const GradientLinearProgress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[700],
  "& .MuiLinearProgress-bar": {
    background: theme.custom.gradient,
    borderRadius: theme.shape.borderRadius,
  },
}));
