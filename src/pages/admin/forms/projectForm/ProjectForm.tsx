import { Grid, Container } from "@material-ui/core";
import ProjectFormBody from "./projectFormBody/ProjectFormBody";
import { ProjectForms } from "types";

interface IProjectForm {
  onSubmit: () => void;
  title: ProjectForms;
}

export default function ProjectForm({ onSubmit, title }: IProjectForm) {
  return (
    <Container
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      disableGutters
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3} />
        <Grid item xs={12} lg={9}>
          <ProjectFormBody title={title} />
        </Grid>
      </Grid>
    </Container>
  );
}
