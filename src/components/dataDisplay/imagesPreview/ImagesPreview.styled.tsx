import { styled } from "@mui/material";

export const ImagesPreviewUl = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
});

export const ImagesPreviewLi = styled("li")(({ theme }) => ({
  display: "inline-flex",
  borderRadius: theme.shape.borderRadius,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  boxSizing: "border-box",
  alignItems: "flex-end",
  marginRight: "auto",
  marginBottom: theme.spacing(1),
  padding: theme.spacing(0.5),
}));

export const ImagesPreviewImg = styled("img")(({ theme }) => ({
  height: theme.spacing(8),
  width: theme.spacing(16),
  objectFit: "cover",
}));
