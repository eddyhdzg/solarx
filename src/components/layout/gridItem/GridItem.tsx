import { Grid, GridProps } from "@material-ui/core";
import useStyles from "./gridItem.jss";

interface IGridProps extends Omit<Partial<GridProps>, "xxs"> {
  xxs?: number;
}

const GridItem: React.FC<IGridProps> = ({ xxs, className, ...props }) => {
  const classes = useStyles(xxs)();

  return (
    <Grid
      item
      className={[classes.themeSection_grid, className].join(" ")}
      {...props}
    />
  );
};

export default GridItem;
