import { Grid, Container } from "@material-ui/core";
import { useCreateProjectForm, useProjectsMutations } from "hooks";
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
    handleSubmit,
    reset,
    defaultValues,
  } = useCreateProjectForm();

  const { createProject } = useProjectsMutations();

  const onSubmit = handleSubmit(({ state, ...data }, e) => {
    e?.preventDefault();

    createProject({
      // @ts-ignore
      state: state.name,
      // @ts-ignore
      ...data,
    }).then(() => {
      reset(defaultValues);
    });
  });

  return (
    <Container
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <CreateProjectForm
            control={control}
            setValue={setValue}
            watch={watch}
            onSubmit={onSubmit}
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
