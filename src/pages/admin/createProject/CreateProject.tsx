import { Grid, Container } from "@material-ui/core";
import { useCreateProjectForm } from "hooks";
import CreateProjectForm from "./createProjectForm/CreateProjectForm";
import CreateProjectSummary from "./createProjectSummary/CreateProjectSummary";

export default function CreateProject() {
  const {
    control,
    watch,
    setValue,
    formState,
    trigger,
    clearErrors,
    onSubmit,
  } = useCreateProjectForm();

  return (
    <Container
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      disableGutters
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <CreateProjectForm
            control={control}
            setValue={setValue}
            watch={watch}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CreateProjectSummary
            formState={formState}
            watch={watch}
            trigger={trigger}
            clearErrors={clearErrors}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
