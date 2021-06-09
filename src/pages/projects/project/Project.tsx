// import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import ProductGallery from "./ProjectGallery";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectHeader from "./projectHeader/ProjectHeader";
import useStyles from "./project.jss";
import ProjectCardTabulator from "./projectCardTabulator/ProjectCardTabulator";

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
      <div className={classes.project_mb4}>
        <ProductGallery />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <ProjectDescription />
        </Grid>
        <Grid item xs={12} lg={5}>
          <ProjectCardTabulator />
        </Grid>
      </Grid>
    </Container>
  );
}
