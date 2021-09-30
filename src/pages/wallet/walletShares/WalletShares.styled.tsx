import { styled, Paper, Typography } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 2, 1),
}));
