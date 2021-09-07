import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import ProjectHeader from "./projectHeader/ProjectHeader";
import useStyles from "./project.jss";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectGalllery from "./projectGallery/ProjectGallery";
import { useProject, useHeader } from "hooks";
import { CenterLoader, Seo } from "components";
import { useEffect } from "react";
import ProjectTabs from "./projectTabs/ProjectTabs";

interface ProjectID {
  id?: string;
}

export default function Project() {
  const { id } = useParams<ProjectID>();
  const classes = useStyles();
  const { status, data } = useProject(id || "");
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "crowdfunding", url: "/crowdfunding" });
  }, [onChangeRoute]);

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <>
      <Seo
        title={data?.name || "Project"}
        description="Project information page."
      />
      <div>
        <Grid container spacing={2} className={classes.project_mb1}>
          <Grid item xs={12} lg={8}>
            <ProjectHeader
              id={data?.id}
              name={data?.name}
              city={data?.city}
              state={data?.state}
              businessType={data?.businessType}
              company={data?.company}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <ProjectGalllery images={data?.images} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProjectCard
              sharesSold={data?.sharesSold}
              totalShares={data?.totalShares}
              sharePrice={data?.sharePrice}
              roi={data?.roi}
              investors={42}
            />
          </Grid>
        </Grid>
      </div>
      <Section>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            lg={8}
            className={classes.project_tabsContainerWrapper}
          >
            <div className={classes.project_tabsContainer}>
              <ProjectTabs />
            </div>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}

const Section: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.project_section}>{children}</div>;
};
