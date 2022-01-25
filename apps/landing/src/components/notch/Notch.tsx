import { styled } from "@mui/material";

const Notch = styled("div")(({ theme }) => ({
  minHeight: "env(safe-area-inset-top)",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: theme.zIndex.drawer,
  backgroundColor: theme.palette.background.default,
}));

export default Notch;
