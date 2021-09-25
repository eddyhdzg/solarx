import { Paper, PaperProps, Box, BoxProps } from "@mui/material";

interface ISectionBlockCompoundComponents {
  Row: React.FC<BoxProps>;
}

const SectionBlockRow: React.FC<BoxProps> = ({ sx, ...props }) => {
  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        ...sx,
      }}
      {...props}
    />
  );
};

const SectionBlock: React.FC<PaperProps> & ISectionBlockCompoundComponents = (
  props
) => {
  return <Paper {...props} />;
};

SectionBlock.Row = SectionBlockRow;
export default SectionBlock;
