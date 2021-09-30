import { styled, Card, CardContent, Divider, CardActions } from "@mui/material";

export const ProjectCardRoot = styled(Card)(({ theme }) => ({
  maxWidth: theme.spacing(60),
  borderRadius: theme.spacing(1.25),
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: theme.palette.grey[800],
  boxShadow: theme.shadows[10],
  margin: "auto",
  // zIndex: 1,
  [theme.breakpoints.up("lg")]: {
    margin: "unset",
  },
}));

export const Content = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const Header = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const ProgressWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

export const StatsWrapper = styled("div")(({ theme }) => ({
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

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  backgroundImage: theme.custom.elevation[1],
  padding: theme.spacing(4),
  flexDirection: "column",
  alignItems: "stretch",
}));

export const Li = styled(CardActions)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "capitalize",
  flexWrap: "wrap",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(1),
  },
}));

export const Ul = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
