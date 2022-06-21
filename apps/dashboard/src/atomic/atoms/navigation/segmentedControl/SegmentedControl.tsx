import { styled, Tabs, tabsClasses, TabsProps } from "@mui/material";
import { SegmentSize } from "solarx-types";

interface SegmentedControlProps extends TabsProps {
  size?: SegmentSize;
}

const SegmentedControl: React.ComponentType<SegmentedControlProps> = styled(
  Tabs,
  {
    shouldForwardProp: (prop) => prop !== "size",
  }
)(({ theme }) => ({ size = "medium" }: { size?: SegmentSize }) => ({
  justifyContent: "center",
  maxWidth: "100%",
  overflow: "visible",
  [`& .${tabsClasses.flexContainer}`]: {
    position: "relative",
    zIndex: 1,
  },
  [`& .${tabsClasses.scroller}`]: {
    padding: size === "medium" ? theme.spacing(0.5) : theme.spacing(0.25),
    [theme.breakpoints.up("xs")]: {
      padding:
        size === "medium" ? theme.spacing(0.5, 1) : theme.spacing(0.25, 0.5),
    },
    backgroundImage: theme.custom.elevation[1],
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: size === "medium" ? theme.spacing(1.5) : theme.spacing(1),
    maxWidth: "fit-content",
    boxShadow: theme.shadows[3],
  },
  [`& .${tabsClasses.indicator}`]: {
    top: 8,
    bottom: 8,
    right: 3,
    height: "auto",
    background: "none",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 4,
      right: 4,
      bottom: 0,
      borderRadius: theme.spacing(1),
      backgroundColor: "#232526", // FIXME
      borderColor: theme.palette.divider,
      borderStyle: "solid",
      borderWidth: 1,
      boxShadow: theme.shadows[1],
    },
  },
}));

export default SegmentedControl;
