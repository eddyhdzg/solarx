import { Typography, styled } from "@mui/material";

export const PageTitleTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
})) as typeof Typography;
