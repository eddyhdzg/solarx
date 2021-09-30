import { Typography, styled } from "@mui/material";

export const PageTitleTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
})) as typeof Typography;
