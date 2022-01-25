import { Button, styled } from "@mui/material";

export const SignInWithGoogleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(1),
  [theme.breakpoints.up("xs")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
