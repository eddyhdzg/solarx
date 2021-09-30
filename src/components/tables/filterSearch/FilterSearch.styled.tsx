import { InputBase, IconButton, styled, alpha } from "@mui/material";
import Search from "@mui/icons-material/Search";

export const FilterSearchInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-input": {
    color: theme.palette.text.secondary,
    fontSize: 16,
    transition: theme.transitions.create("width"),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(4),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const SearchIcon = styled(Search)(({ theme }) => ({
  color: theme.palette.text.secondary,
  position: "absolute",
  left: theme.spacing(1),
  userSelect: "none",
  pointerEvents: "none",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(0.5),
}));
