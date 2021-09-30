import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectGalllery from "./projectGallery/ProjectGallery";
import { useProject, useHeader } from "hooks";
import { CenterLoader, Seo, GridItem } from "components";
import { useEffect } from "react";
import ProjectTabs from "./projectTabs/ProjectTabs";
import { useTranslation } from "react-i18next";
import { HeaderGrid, Content, RelativeDiv } from "./Project.styled";

interface ProjectID {
  id?: string;
}

export default function Project() {
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { status, data } = useProject(id || "");
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.crowdfunding"), url: "/crowdfunding" });
  }, [onChangeRoute, t]);

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <>
      <Seo
        title={
          data?.name ||
          t("router.project", {
            postProcess: "capitalize",
          })
        }
        description="Project information page."
      />
      <div>
        <HeaderGrid container spacing={2}>
          <GridItem lg={8}>
            <ProjectHeader
              id={data?.id}
              name={data?.name}
              city={data?.city}
              state={data?.state}
              businessType={data?.businessType}
              company={data?.company}
            />
          </GridItem>
        </HeaderGrid>
        <Grid container spacing={2}>
          <GridItem lg={8}>
            <ProjectGalllery images={data?.images} />
          </GridItem>
          <GridItem lg={4}>
            <ProjectCard
              sharesSold={data?.sharesSold}
              totalShares={data?.totalShares}
              sharePrice={data?.sharePrice}
              roi={data?.roi}
              investors={42}
            />
          </GridItem>
        </Grid>
      </div>
      <Content>
        <Grid container spacing={3}>
          <GridItem lg={8}>
            <RelativeDiv>
              <ProjectTabs />
            </RelativeDiv>
          </GridItem>
        </Grid>
      </Content>
    </>
  );
}
