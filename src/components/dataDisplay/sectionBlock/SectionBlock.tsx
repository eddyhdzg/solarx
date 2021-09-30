import { Paper, PaperProps, BoxProps } from "@mui/material";
import { SectionBlockRoot } from "./SectionBlock.styled";

interface ISectionBlockCompoundComponents {
  Row: React.FC<BoxProps>;
}

const SectionBlockRow: React.FC = (props) => {
  return <SectionBlockRoot {...props} />;
};

const SectionBlock: React.FC<PaperProps> & ISectionBlockCompoundComponents = (
  props
) => {
  return <Paper {...props} />;
};

SectionBlock.Row = SectionBlockRow;
export default SectionBlock;
