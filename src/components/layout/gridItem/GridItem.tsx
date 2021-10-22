import { Grid, GridProps } from "@mui/material";

export interface IGridProps extends Omit<Partial<GridProps>, "xxs"> {
  xxs?: number;
}

const GridItem: React.FC<IGridProps> = ({ xxs = 12, ...props }) => {
  const xxsClass = `MuiGrid-grid-xxs-${xxs}`;
  return <Grid item className={xxsClass} {...props} />;
};

export default GridItem;
