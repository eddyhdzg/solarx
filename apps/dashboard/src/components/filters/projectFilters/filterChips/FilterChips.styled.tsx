import { styled, Chip } from "@mui/material";

export const StyledUl = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginLeft: theme.spacing(0.5),
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0, 0.5, 0.5),
}));
