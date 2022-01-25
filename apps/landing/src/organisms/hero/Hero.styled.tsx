import { Typography, styled } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.only("xxs")]: {
    fontSize: "3rem",
  },
})) as typeof Typography;
