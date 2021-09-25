import { Box } from "@mui/material";
import { ProjectCard, CustomTablePagination } from "components";
import { Row } from "react-table";
import { Project, ProjectSection } from "types";

interface IProjectCardsProps {
  page: Row<Project>[];
  rows: any;
  gotoPage: any;
  setPageSize: any;
  state: any;
  section: ProjectSection;
}

export default function ProjectCards({
  page: projects,
  rows,
  gotoPage,
  setPageSize,
  state,
  section = "crowdfunding",
}: IProjectCardsProps) {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: {
            xxs: "repeat(auto-fill,minmax(288px,1fr))",
            xs: "repeat(auto-fill,minmax(320px,1fr))",
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.original.id}
            {...project.original}
            url={`/${section}/${project.original.id}`}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          my: 1,
        }}
      >
        <CustomTablePagination
          component="div"
          rows={rows}
          gotoPage={gotoPage}
          setPageSize={setPageSize}
          state={state}
          actionType="PROJECTS_CHANGE_PAGESIZE"
        />
      </Box>
    </>
  );
}
