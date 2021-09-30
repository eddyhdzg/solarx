import { Card, CardMedia, Skeleton, styled, Typography } from "@mui/material";
import SellOutlined from "@mui/icons-material/SellOutlined";
import SavingsOutlined from "@mui/icons-material/SavingsOutlined";

export const ProjectCardCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  overflow: "visible",
  position: "relative",
  backgroundClip: "padding-box",
  border: "solid 3px transparent",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "-1",
    margin: "-3px",
    borderRadius: "inherit",
    background: theme.custom.gradient,
  },
}));

export const ProjectSkeleton = styled(Skeleton, {
  shouldForwardProp: (prop) => prop !== "loading",
})((props: { loading: boolean }) => ({
  display: props.loading ? undefined : "none",
}));

export const ProjectCardMedia = styled(CardMedia, {
  shouldForwardProp: (prop) => prop !== "loading",
})((props: { loading: boolean }) => ({
  height: 160,
  width: "100%",
  display: props.loading ? "none" : "block",
})) as any;

export const ProjectCardHeaders = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const ProjectCardDataRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}));

export const ProjectCardDataColumn = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "50%",
}));

export const SellOutlinedIcon = styled(SellOutlined)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1),
}));

export const SavingsOutlinedIcon = styled(SavingsOutlined)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1),
}));

export const ProjectCardDataTextWrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  display: "flex",
  flexDirection: "column",
}));

export const ProjectCardSummary = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: theme.spacing(1),
}));

export const SharesTypography = styled(Typography)({
  textTransform: "lowercase",
});
