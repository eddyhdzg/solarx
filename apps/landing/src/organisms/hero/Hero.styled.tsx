import { Typography, styled } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.only("xs")]: {
    fontSize: "3rem",
  },
})) as typeof Typography;
