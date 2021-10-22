import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectGalllery from "./projectGallery/ProjectGallery";
import ProjectSummary from "./projectSummary/ProjectSummary";
import ProjectBuyingOptions from "./projectBuyingOptions/ProjectBuyingOptions";
import { useProject, useHeader } from "hooks";
import { CenterLoader, Seo, GridItem } from "components";
import { useEffect } from "react";
// import ProjectTabs from "./projectTabs/ProjectTabs";
import { useTranslation } from "react-i18next";
import Project from "./Project.styled";

interface ProjectID {
  id?: string;
}

export default function ProjectTemplate() {
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
      <Project>
        <Project.HeaderGrid container spacing={4}>
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
        </Project.HeaderGrid>
        <Grid container spacing={4}>
          <GridItem lg={8}>
            <ProjectGalllery images={data?.images} />
            {/* <div>
              <Project.GreyBackground />
              <Project.Tabs>
                <ProjectTabs
                  general={data?.generalContent}
                  graphs={data?.graphsContent}
                  about={data?.aboutContent}
                />
              </Project.Tabs>
            </div> */}
          </GridItem>
          <Project.Sticky item lg={4}>
            <Project.StickyContent>
              <ProjectSummary
                goal={data?.goal}
                investors={data?.investors}
                roi={data?.roi}
                sharePrice={data?.sharePrice}
                sharesSold={data?.sharesSold}
                totalShares={data?.totalShares}
              />
              <ProjectBuyingOptions roi={data?.roi} />
            </Project.StickyContent>
          </Project.Sticky>
        </Grid>
      </Project>
    </>
  );
}
