import { Tabs as MuiTabs, TabsProps, TabProps } from "@mui/material";
import Segment from "./Segment";

interface ISegmentedControlCompoundComponents {
  Segment: React.FC<TabProps>;
}
const SegmentedControl: React.FC<TabsProps> &
  ISegmentedControlCompoundComponents = ({ ...props }) => {
  return (
    <MuiTabs
      sx={{
        "&.MuiTabs-root": {
          justifyContent: "center",
          maxWidth: "100%",
          overflow: "visible",
        },
        "& .MuiTabs-flexContainer": {
          position: "relative",
          zIndex: 1,
        },
        "& .MuiTabs-scroller": {
          py: 0.5,
          px: {
            xxs: 0.5,
            xs: 1,
          },
          backgroundImage: (theme) => theme.custom.elevation[1],
          backgroundColor: (theme) => theme.palette.background.paper,
          borderColor: (theme) => theme.custom.border,
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 2.5,
          maxWidth: "fit-content",
          boxShadow: 3,
        },
        "& .MuiTabs-indicator": {
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
            borderRadius: 2,
            backgroundColor: "#232526", // FIXME
            borderColor: (theme) => theme.custom.border,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: (theme) => theme.shadows[1],
          },
        },
      }}
      variant="scrollable"
      {...props}
    />
  );
};

SegmentedControl.Segment = Segment;

export default SegmentedControl;
