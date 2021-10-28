import { GridItem } from "components";
import { CreateProjectGeneralForm } from "forms";
import { Grid } from "@mui/material";

export default function AdminCreateProjectTemplate() {
  return (
    <Grid container spacing={3}>
      <GridItem lg={9}>
        <CreateProjectGeneralForm />
      </GridItem>
    </Grid>
  );
}
