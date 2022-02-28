import { styled } from "../../config";

export type ButtonProps = Omit<React.ComponentProps<typeof Button>, "css">;

export const Button = styled("button", {
  position: "relative",
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  border: "0",
  "&:hover": {
    backgroundColor: "lightgray",
  },
  "&::before": {
    content: `''`,
    display: "block",
    backgroundImage: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
    position: "absolute",
    top: "-3px",
    left: "-3px",
    width: "calc(100% + 6px)",
    height: "calc(100% + 6px)",
    borderRadius: "inherit",
    zIndex: -1,
  },
});
