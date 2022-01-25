import { Grid, GridProps, styled } from "@mui/material";

export interface IGridItemProps extends GridProps {
  xxs?: number;
}

export const GridItem = styled(
  ({ xxs, ...rest }: IGridItemProps) => {
    const xxsClass = `MuiGrid-grid-xxs-${xxs}`;
    return <Grid item className={xxsClass} {...rest} />;
  },
  {
    shouldForwardProp: (prop) => prop !== "xxs",
  }
)(() => ({}));

export default GridItem;
