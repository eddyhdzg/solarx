import { Grid, Paper } from "@material-ui/core";
import { useCreateProjectForm } from "hooks";
import CreateProjectForm from "./createProjectForm/CreateProjectForm";

export default function CreateProject() {
  const { control, watch, setValue, reset } = useCreateProjectForm();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <CreateProjectForm
          control={control}
          setValue={setValue}
          watch={watch}
          reset={reset}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper>xs=12</Paper>
      </Grid>
    </Grid>
  );
}
