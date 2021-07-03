import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectHeader from "./projectHeader/ProjectHeader";
import useStyles from "./project.jss";
import ProjectCardTabulator from "./projectCardTabulator/ProjectCardTabulator";
import ProjectGalllery from "./projectGallery/ProjectGalllery";
import { useProject } from "hooks";
import { CenterLoader, ProjectDataList } from "components";

interface ProjectID {
  id?: string;
}

export default function Project() {
  const { id } = useParams<ProjectID>();
  const classes = useStyles();
  const { status, data } = useProject(id);

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <Container>
      <div className={classes.project_mb2}>
        <ProjectHeader id={data.id} name={data.name} location={data.location} />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <ProjectGalllery images={data.images} />
          <ProjectDescription
            sharesSold={data.sharesSold}
            totalShares={data.totalShares}
            sharePrice={data.sharePrice}
          />
          <ProjectDataList
            sharePrice={data.sharePrice}
            ror={data.ror}
            ppa={5}
            company="Nestlé"
            businessType="Food and Drinks"
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <ProjectCardTabulator />
        </Grid>
      </Grid>
    </Container>
  );
}
