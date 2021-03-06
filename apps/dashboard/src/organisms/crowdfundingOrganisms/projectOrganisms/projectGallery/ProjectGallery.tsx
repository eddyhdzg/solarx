import ProjectDesktopGallery from "./projectDesktopGallery/ProjectDesktopGallery";
import ProjectMobileGallery from "./projectMobileGallery/ProjectMobileGallery";
import { useTheme, useMediaQuery } from "@mui/material";
import { Project } from "solarx-types";

export default function ProjectGallery(props: Pick<Project, "images">) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? (
    <ProjectMobileGallery {...props} />
  ) : (
    <ProjectDesktopGallery {...props} />
  );
}
