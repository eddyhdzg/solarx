// import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectHeader from "./projectHeader/ProjectHeader";
import useStyles from "./project.jss";
import ProjectCardTabulator from "./projectCardTabulator/ProjectCardTabulator";
import ProjectGalllery from "./projectGallery/ProjectGalllery";

// interface ProjectID {
//   id?: string;
// }

export default function Project() {
  // const { id } = useParams<ProjectID>();
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.project_mb2}>
        <ProjectHeader />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <ProjectGalllery />
          <ProjectDescription />
        </Grid>
        <Grid item xs={12} lg={5}>
          <ProjectCardTabulator />
        </Grid>
      </Grid>
    </Container>
  );
}
