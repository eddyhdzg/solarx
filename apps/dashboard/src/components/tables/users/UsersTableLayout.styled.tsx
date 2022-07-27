import { styled } from "@mui/material";

export const UsersTableLayoutRoot = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));
