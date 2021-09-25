import { Grid } from "@mui/material";
import ProjectFormBody from "./projectFormBody/ProjectFormBody";
import { ProjectForms } from "types";
import { checkKeyDown } from "utils";
import { GridItem } from "components";

interface IProjectForm {
  onSubmit: () => void;
  title: ProjectForms;
}

export default function ProjectForm({ onSubmit, title }: IProjectForm) {
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      onKeyDown={(e) => checkKeyDown(e)}
    >
      <Grid container spacing={3}>
        <GridItem lg={9}>
          <ProjectFormBody title={title} />
        </GridItem>
      </Grid>
    </form>
  );
}
