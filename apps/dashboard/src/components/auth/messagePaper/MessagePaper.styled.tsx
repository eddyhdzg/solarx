import { Paper, styled } from "@mui/material";

export const MessagePaperRoot = styled(Paper)(({ theme }) => ({
  maxWidth: theme.spacing(100),
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 4),
  },
}));
