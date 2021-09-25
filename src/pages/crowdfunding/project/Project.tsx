import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectGalllery from "./projectGallery/ProjectGallery";
import { useProject, useHeader } from "hooks";
import { CenterLoader, Seo, GridItem } from "components";
import { useEffect } from "react";
import ProjectTabs from "./projectTabs/ProjectTabs";
import { useTranslation } from "react-i18next";

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
        <Grid
          container
          spacing={2}
          sx={{
            mb: 1,
          }}
        >
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
        </Grid>
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
      <Section>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            lg={8}
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                top: {
                  lg: -32,
                },
                position: {
                  lg: "absolute",
                },
                left: {
                  lg: "50%",
                },
                transform: {
                  lg: "translateX(-50%)",
                },
              }}
            >
              <ProjectTabs />
            </Box>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}

const Section: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: (theme) => theme.spacing(40),
        backgroundImage: (theme) => theme.custom.elevation[1],
        ml: {
          xxs: "calc(-16px - env(safe-area-inset-left))",
          md: "calc(-24px - env(safe-area-inset-left))",
        },
        mr: {
          xxs: "calc(-16px - env(safe-area-inset-right))",
          md: "calc(-24px - env(safe-area-inset-right))",
        },
        pl: {
          xxs: "calc(16px + env(safe-area-inset-left))",
          md: "calc(24px + env(safe-area-inset-left))",
        },
        pr: {
          xxs: "calc(16px + env(safe-area-inset-right))",
          md: "calc(24px + env(safe-area-inset-right))",
        },
        mt: {
          lg: -16,
        },
      }}
    >
      {children}
    </Box>
  );
};
