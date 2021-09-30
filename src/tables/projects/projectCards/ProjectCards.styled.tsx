import { styled } from "@mui/material";

export const ProjectCardsGird = styled("div")(({ theme }) => ({
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(auto-fill,minmax(288px,1fr))",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
  },
}));

export const PaginationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));
