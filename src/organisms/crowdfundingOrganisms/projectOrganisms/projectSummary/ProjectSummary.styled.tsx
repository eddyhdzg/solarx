import { styled, Divider } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";

export const ProjectSummaryRoot = styled("div")(({ theme }) => ({
  maxWidth: theme.spacing(60),
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
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

export const ProjectSummarySubtitle = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const ProjectSummaryDateIcon = styled(TodayIcon)(({ theme }) => ({
  fontSize: "14px",
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
