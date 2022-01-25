import { styled, Tab, tabClasses } from "@mui/material";
import { Size } from "./SegmentedControl";

export const StyledSegment = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "size",
})(({ theme }) => ({ size = "medium" }: { size?: Size }) => ({
  "&:hover": {
    color: theme.palette.text.primary,
  },
  "&:focus": {
    color: theme.palette.text.primary,
  },
  padding: size === "medium" ? theme.spacing(2, 5) : theme.spacing(2, 4),
  fontSize: "14px",
  [theme.breakpoints.up("xs")]: {
    padding: size === "medium" ? theme.spacing(2.5, 6) : theme.spacing(2, 4),
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [`&.${tabClasses.selected}`]: {
    color: theme.palette.text.primary,
  },
}));
