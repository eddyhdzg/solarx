import { styled } from "@mui/material";

export const DotRoot = styled("div", {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})(({ theme }) => ({ backgroundColor }: { backgroundColor: string }) => ({
  marginRight: theme.spacing(1.5),
  padding: theme.spacing(0.5),
  borderRadius: "50%",
  display: "inline-block",
  backgroundColor,
}));
