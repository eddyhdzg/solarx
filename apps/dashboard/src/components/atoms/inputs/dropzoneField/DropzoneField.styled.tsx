import { styled } from "@mui/material";

export const DropzoneFieldBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "success",
})(({ theme }) => ({ success }: { success: boolean }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  padding: theme.spacing(4, 2),
  minHeight: theme.spacing(10),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[800],
  color: success ? theme.palette.success.main : theme.palette.text.secondary,
}));
