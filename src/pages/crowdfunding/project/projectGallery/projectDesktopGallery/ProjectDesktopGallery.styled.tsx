import { Button, styled } from "@mui/material";

export const GalleryGrid = styled("div")(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  minHeight: theme.spacing(40),
  maxHeight: theme.spacing(60),
  gridGap: theme.spacing(2),
}));

export const Item1 = styled("div")(({ theme }) => ({
  overflow: "hidden",
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  backgroundImage: theme.custom.elevation[1],
  borderRadius: theme.shape.borderRadius,
  // Item 1
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 3,
}));

export const Item2 = styled("div")(({ theme }) => ({
  overflow: "hidden",
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  backgroundImage: theme.custom.elevation[1],
  borderRadius: theme.shape.borderRadius,
  // Item 2
  gridColumnStart: 3,
  gridColumnEnd: 4,
  gridRowStart: 1,
  gridRowEnd: 2,
}));

export const Item3 = styled("div")(({ theme }) => ({
  overflow: "hidden",
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  backgroundImage: theme.custom.elevation[1],
  borderRadius: theme.shape.borderRadius,
  // Item 3
  gridColumnStart: 3,
  gridColumnEnd: 4,
  gridRowStart: 2,
  gridRowEnd: 3,
}));

export const Img = styled("img")({
  overflow: "hidden",
  height: "100%",
  width: "100%",
});

// FIXME
// VARIANT
export const ShowAllButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  backgroundImage: theme.custom.elevation[1],
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: theme.custom.elevation[3],
  },
}));
