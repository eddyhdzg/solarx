import { StyledSegment } from "./Segment.styled";
import { ISegmentProps } from "./SegmentedControl";

const Segment: React.FC<ISegmentProps> = ({ size = "medium", ...rest }) => {
  return <StyledSegment size={size} {...rest} />;
};

export default Segment;
