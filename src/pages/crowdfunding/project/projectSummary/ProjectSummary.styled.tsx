import { styled, Divider } from "@mui/material";

export const ProjectSummaryRoot = styled("div")(({ theme }) => ({
  maxWidth: theme.spacing(60),
  margin: "auto",
  [theme.breakpoints.up("lg")]: {
    margin: "unset",
    marginBottom: theme.spacing(5),
  },
}));

export const ProjectSummaryContent = styled("div")(({ theme }) => ({
  // padding: theme.spacing(2),
}));

export const ProjectSummaryHeader = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const ProjectSummaryProgressWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const ProjectSummaryStyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const ProjectSummaryStatsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginTop: theme.spacing(-3),
  "& > div": {
    marginTop: theme.spacing(3),
  },
  "& > div:not(:last-child)": {
    marginRight: theme.spacing(4),
  },
}));

export const ProjectSummaryLi = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "capitalize",
  flexWrap: "wrap",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(3),
  },
}));
