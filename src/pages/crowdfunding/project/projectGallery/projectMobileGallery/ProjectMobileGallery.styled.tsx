import { styled, Skeleton, MobileStepper } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

export const SkeletonWrapper = styled("div")({
  flexGrow: 1,
  position: "relative",
});

export const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  height: theme.spacing(45),
}));

export const Img = styled("img")(({ theme }) => ({
  height: theme.spacing(45),
  display: "block",
  objectFit: "cover",
  overflow: "hidden",
  width: "100%",
  pointerEvents: "none",
  userSelect: "none",
}));

export const StyledMobileStepper = styled(MobileStepper)({
  justifyContent: "center",
});

export const StyledSwipeableViews = styled(SwipeableViews)({
  minHeight: 360,
});
