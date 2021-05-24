import { Paper, PaperProps } from "@material-ui/core";
import useStyles from "./sectionBlock.jss";

interface ISectionBlockCompoundComponents {
  Row: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

const SectionBlockRow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={[classes.sectionBlock_row, className].join(" ")} {...props}>
      {children}
    </div>
  );
};

const SectionBlock: React.FC<PaperProps> & ISectionBlockCompoundComponents = ({
  children,
  ...props
}) => {
  return (
    <Paper elevation={2} {...props}>
      {children}
    </Paper>
  );
};

SectionBlock.Row = SectionBlockRow;

export default SectionBlock;
