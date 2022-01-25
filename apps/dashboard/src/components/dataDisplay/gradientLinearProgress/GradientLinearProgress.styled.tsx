import { styled, LinearProgress } from "@mui/material";

export const GradientLinearProgressRoot = styled(LinearProgress)(
  ({ theme }) => ({
    height: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[700],
    "& .MuiLinearProgress-bar": {
      background: theme.custom.gradient,
      borderRadius: theme.shape.borderRadius,
    },
  })
);
