import { Typography, styled } from "@mui/material";

export const PageTitleTypography = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(5),
  },
})) as typeof Typography;
