import { styled, Tooltip, Grid, Popover } from "@mui/material";

export const StyledTooltip = styled(Tooltip)({
  textTransform: "capitalize",
});

export const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 3, 3),
  display: "flex",
  flexDirection: "column",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1),
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: theme.spacing(60),
}));

export const StyledPopover = styled(Popover)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
