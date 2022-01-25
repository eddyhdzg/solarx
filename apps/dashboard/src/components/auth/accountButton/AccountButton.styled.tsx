import { Menu, styled, menuClasses } from "@mui/material";

export const AccountButtonMenu = styled(Menu)(({ theme }) => ({
  [`& .${menuClasses.paper}`]: {
    marginTop: theme.spacing(1.5),
    minWidth: theme.spacing(25),
  },
}));
