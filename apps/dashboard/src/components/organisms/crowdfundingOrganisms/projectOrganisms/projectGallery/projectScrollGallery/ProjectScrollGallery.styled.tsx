import { styled, ImageListItem, imageListItemClasses } from "@mui/material";

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  [`& .${imageListItemClasses.img}`]: {
    borderRadius: theme.shape.borderRadius,
  },
}));
