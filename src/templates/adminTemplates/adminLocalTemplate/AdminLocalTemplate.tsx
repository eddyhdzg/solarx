import { GridItem } from "components";
import { Grid } from "@mui/material";
import { LocalTriggers } from "organisms";
import { StyledRoot } from "./AdminLocalTemplate.styled";

export default function AdminLocalTemplate() {
  return (
    <StyledRoot>
      <Grid container direction="row" spacing={4}>
        <GridItem xs={12}>
          <LocalTriggers />
        </GridItem>
      </Grid>
    </StyledRoot>
  );
}
