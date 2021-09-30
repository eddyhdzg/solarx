import { Typography, styled, Chip } from "@mui/material";

export const ProjectHeaderRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const ProjectName = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
})) as typeof Typography;

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
