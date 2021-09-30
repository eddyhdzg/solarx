import { styled, Typography, Button } from "@mui/material";

export const Caption = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
})) as typeof Typography;

export const AccountNumber = styled(Button)(({ theme }) => ({
  minHeight: theme.spacing(8),
}));
