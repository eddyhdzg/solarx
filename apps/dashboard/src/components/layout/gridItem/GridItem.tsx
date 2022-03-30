import { Grid, GridProps, styled } from "@mui/material";

export interface IGridItemProps extends GridProps {
  xxs?: number;
}

export const GridItem = styled(
  ({ xxs = 12, className, ...rest }: IGridItemProps) => {
    const xxsClass = `MuiGrid-grid-xxs-${xxs}`;
    return <Grid item {...rest} className={xxsClass} />;
  },
  {}
)(() => ({}));

export default GridItem;
