import { TabsProps, TabProps } from "@mui/material";
import Segment from "./Segment";
import { StyledSegmentedControl } from "./SegmentedControl.styled";

export type Size = "medium" | "small";

interface ISegmentedControlProps extends TabsProps {
  size?: Size;
}

export interface ISegmentProps extends TabProps {
  size?: Size;
}

interface ISegmentedControlCompoundComponents {
  Segment: React.FC<ISegmentProps>;
}
const SegmentedControl: React.FC<ISegmentedControlProps> &
  ISegmentedControlCompoundComponents = ({ size = "medium", ...rest }) => {
  return <StyledSegmentedControl size={size} variant="scrollable" {...rest} />;
};

SegmentedControl.Segment = Segment;

export default SegmentedControl;
