import { styled } from "@mui/material";

const GradientLine = styled("div")(({ theme }) => ({
  backgroundImage: theme.custom.gradient,
  width: "100%",
  height: theme.spacing(0.5),
  position: "absolute",
  top: "env(safe-area-inset-top)",
  left: 0,
}));

export default GradientLine;
