import { styled, Chip } from "@mui/material";

export const StyledUl = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0.25, 0.5),
  },
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.25, 0.5),
}));
