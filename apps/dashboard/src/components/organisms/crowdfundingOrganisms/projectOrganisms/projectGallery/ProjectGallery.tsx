import { useBreakpoint } from "hooks";
import { Project } from "solarx-types";
import ProjectDesktopGallery from "./projectDesktopGallery/ProjectDesktopGallery";
import ProjectMobileGallery from "./projectMobileGallery/ProjectMobileGallery";

export default function ProjectGallery(props: Pick<Project, "images">) {
  const md = useBreakpoint("md");
  return md ? (
    <ProjectDesktopGallery {...props} />
  ) : (
    <ProjectMobileGallery {...props} />
  );
}
