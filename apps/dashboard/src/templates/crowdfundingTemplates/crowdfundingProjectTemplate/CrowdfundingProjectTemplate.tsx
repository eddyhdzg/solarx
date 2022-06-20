import { useParams } from "react-router-dom";
import { useProject, useBreakpoint, useProjectContent } from "hooks";
import { CenterLoader, GridItem } from "atomic";
import {
  ProjectGallery,
  ProjectHeader,
  ProjectPrices,
  ProjectSummary,
  ProjectTabs,
} from "organisms";
import { ProjectIDParams } from "solarx-types";
import { Container } from "@mui/material";
import Styled from "./CrowdfundingProjectTemplate.styled";

export default function CrowdfundingProjectTemplate() {
  const { id } = useParams<ProjectIDParams>();
  const { status, data } = useProject(id || "");
  const { status: contentStatus, data: content } = useProjectContent(id || "");
  const lg = useBreakpoint("lg");

  if (status === "loading" || contentStatus === "loading") {
    return <CenterLoader />;
  }

  return (
    <>
      <Container maxWidth="xl">
        <Styled.HeaderGrid container spacing={4}>
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
        </Styled.HeaderGrid>
        <Styled.PrimaryContent container spacing={4}>
          <GridItem lg={8}>
            <ProjectGallery images={content?.images} />
          </GridItem>
          <GridItem lg={4}>
            <Styled.MaxWidth>
              <ProjectSummary
                goal={data?.goal}
                investors={data?.investors}
                raised={data?.raised}
                roi={data?.roi}
                basePrice={data?.basePrice}
                sharesSold={data?.sharesSold}
                totalShares={data?.totalShares}
                releaseDate={data?.releaseDate}
              />
            </Styled.MaxWidth>
          </GridItem>
        </Styled.PrimaryContent>
      </Container>
      <Styled.Background>
        <Container maxWidth="xl">
          <Styled.BodyGrid container spacing={4}>
            <GridItem lg={8}>
              {lg && (
                <Styled.Tabs>
                  <ProjectTabs
                    general={content?.general}
                    graphs={content?.graphs}
                    about={content?.about}
                  />
                </Styled.Tabs>
              )}
            </GridItem>
            <Styled.Sticky lg={4}>
              <Styled.MaxWidth>
                <ProjectPrices roi={data?.roi} />
              </Styled.MaxWidth>
              {!lg && (
                <div>
                  <Styled.Tabs>
                    <ProjectTabs
                      general={content?.general}
                      graphs={content?.graphs}
                      about={content?.about}
                    />
                  </Styled.Tabs>
                </div>
              )}
            </Styled.Sticky>
          </Styled.BodyGrid>
        </Container>
      </Styled.Background>
    </>
  );
}
