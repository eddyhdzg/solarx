import ProjectDesktopGallery from "../projectDesktopGallery/ProjectDesktopGallery";
import ProjectMobileGallery from "../projectMobileGallery/ProjectMobileGallery";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Project } from "types";

export default function ProjectGalllery(props: Pick<Project, "images">) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? (
    <ProjectMobileGallery {...props} />
  ) : (
    <ProjectDesktopGallery {...props} />
  );
}
