import { styled, Typography, Divider } from "@mui/material";

export const AdminProjectSummaryBody = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const AdminProjectSummaryTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
})) as typeof Typography;

export const AdminProjectSummaryDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const AdminProjectSummaryUL = styled("ul")(({ theme }) => ({
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
