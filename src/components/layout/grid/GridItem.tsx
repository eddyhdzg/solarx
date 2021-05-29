import { Grid as MUIGrid, GridProps } from "@material-ui/core";
import useStyles from "./gridItem.jss";

interface IGridProps extends Omit<Partial<GridProps>, "xxs"> {
  xxs?: number;
}

const GridItem: React.FC<IGridProps> = ({ xxs, className, ...props }) => {
  const classes = useStyles(xxs)();

  return (
    <MUIGrid
      className={[classes.themeSection_grid, className].join(" ")}
      {...props}
    />
  );
};

export default GridItem;
