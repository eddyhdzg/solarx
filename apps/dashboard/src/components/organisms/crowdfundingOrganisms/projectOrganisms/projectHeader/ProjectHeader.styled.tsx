import { styled, Chip } from "@mui/material";

export const ProjectHeaderRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const ProjectHeaderWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  margin: theme.spacing(0.5),
}));

export const ShareButtonContainer = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
}));
