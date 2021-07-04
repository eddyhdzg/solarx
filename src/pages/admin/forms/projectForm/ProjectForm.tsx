import { Grid, Container } from "@material-ui/core";
import {
  Control,
  UseFormSetValue,
  UseFormWatch,
  FormState,
  UseFormTrigger,
  UseFormClearErrors,
} from "react-hook-form";
import { useProjectFormSchema } from "hooks/forms/schema.project";
import CreateProjectForm from "./projectFormBody/ProjectFormBody";
import CreateProjectSummary from "./projectFormSummary/ProjectFormSummary";

interface IProjectForm {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  control: Control<useProjectFormSchema>;
  setValue: UseFormSetValue<useProjectFormSchema>;
  watch: UseFormWatch<useProjectFormSchema>;
  formState: FormState<useProjectFormSchema>;
  trigger: UseFormTrigger<useProjectFormSchema>;
  clearErrors: UseFormClearErrors<useProjectFormSchema>;
  title: "Edit" | "Create";
}

export default function ProjectForm({
  control,
  watch,
  setValue,
  formState,
  trigger,
  clearErrors,
  onSubmit,
  title,
}: IProjectForm) {
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
            title={title}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
