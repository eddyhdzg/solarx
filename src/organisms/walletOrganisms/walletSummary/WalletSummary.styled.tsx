import { styled, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

export const ChartContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {},
}));

export const FlexGrid = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: theme.spacing(85),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

export const StyledLabel = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledUl = styled("ul")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(45),
}));

export const StyledLi = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(4),
  },
}));
