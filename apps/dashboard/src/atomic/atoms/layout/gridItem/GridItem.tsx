import { Grid, GridProps, styled } from "@mui/material";

export const GridItem = styled(({ xs = 12, ...rest }: GridProps) => {
  return <Grid item xs={xs} {...rest} />;
}, {})(() => ({}));

export default GridItem;
