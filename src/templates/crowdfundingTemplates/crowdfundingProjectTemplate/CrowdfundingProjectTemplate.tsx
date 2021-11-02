import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useProject, useBreakpoint } from "hooks";
import { CenterLoader, GridItem } from "components";
import {
  ProjectBuyingOptions,
  ProjectGallery,
  ProjectHeader,
  ProjectSummary,
  ProjectTabs,
} from "organisms";
import { ProjectIDParams } from "types";
import Template from "./CrowdfundingProjectTemplate.styled";

export default function CrowdfundingProjectTemplate() {
  const { id } = useParams<ProjectIDParams>();
  const { status, data } = useProject(id || "");
  const lg = useBreakpoint("lg");

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <Template>
      <Template.HeaderGrid container spacing={4}>
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
      </Template.HeaderGrid>
      <Grid container spacing={4}>
        <GridItem lg={8}>
          <ProjectGallery images={data?.images} />
          {lg && (
            <div>
              <Template.GreyBackground />
              <Template.Tabs>
                <ProjectTabs
                  general={data?.generalContent}
                  graphs={data?.graphsContent}
                  about={data?.aboutContent}
                />
              </Template.Tabs>
            </div>
          )}
        </GridItem>
        <Template.Sticky lg={4}>
          <Template.StickyContent>
            <ProjectSummary
              goal={data?.goal}
              investors={data?.investors}
              roi={data?.roi}
              sharePrice={data?.sharePrice}
              sharesSold={data?.sharesSold}
              totalShares={data?.totalShares}
            />
            <ProjectBuyingOptions roi={data?.roi} />
          </Template.StickyContent>
          {!lg && (
            <div>
              <Template.GreyBackground />
              <Template.Tabs>
                <ProjectTabs
                  general={data?.generalContent}
                  graphs={data?.graphsContent}
                  about={data?.aboutContent}
                />
              </Template.Tabs>
            </div>
          )}
        </Template.Sticky>
      </Grid>
    </Template>
  );
}
