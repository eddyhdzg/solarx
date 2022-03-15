import { styled, Box } from "@mui/material";

const ContentPadding = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));

export default ContentPadding;
