import { styled, Typography, Divider } from "@mui/material";

export const ProjectSummaryBody = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const ProjectSummaryTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
})) as typeof Typography;

export const ProjectSummaryDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const ProjectSummaryUL = styled("ul")(({ theme }) => ({
  "& li": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "capitalize",
    "&:not(:last-child)": {
      marginBottom: theme.spacing(1),
    },
  },
}));
