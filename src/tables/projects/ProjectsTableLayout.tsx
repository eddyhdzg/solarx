import { Box } from "@mui/material";
import ProjectsTable from "./projectsTable/ProjectsTable";
import ProjectCards from "./projectCards/ProjectCards";
import FilterChips from "./filterChips/FilterChips";
import FilterMenu from "./filterMenu/FilterMenu";
import { IconButton, Tooltip, Button } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { GlobalFilter } from "components";
import { Control, UseFormReset, UseFormWatch } from "react-hook-form";
import { ProjectFiltersSchema, useStore } from "hooks";
import shallow from "zustand/shallow";
import { ProjectSection } from "types";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProjectsTableLayoutProps {
  control: Control<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
  watch: UseFormWatch<ProjectFiltersSchema>;
  setGlobalFilter: any;
  table: any;
  section: ProjectSection;
}

export default function ProjectsTableLayout({
  control,
  reset,
  watch,
  setGlobalFilter,
  table,
  section = "crowdfunding",
}: IProjectsTableLayoutProps) {
  const { t } = useTranslation();
  const { dispatch, projects } = useStore(
    ({ dispatch, projects }) => ({ dispatch, projects }),
    shallow
  );

  const handleProjectTypeChange = () => {
    dispatch({
      type: "PROJECTS_TOGGLE_TYPE",
      payload: projects?.projectType === "cards" ? "table" : "cards",
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          mb: 1,
          justifyContent:
            section === "admin/projects" ? "space-between" : "flex-end",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddRoundedIcon />}
          to="/admin/projects/create-project"
          component={Link}
          sx={{
            mr: 2,
            mb: 1,
            display: section === "crowdfunding" ? "none" : undefined,
          }}
        >
          {t("pages.admin.createProject.title")}
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <FilterChips watch={watch} reset={reset} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&>:not(:last-child)": {
                mr: {
                  xxs: 0.5,
                  md: 1,
                },
              },
            }}
          >
            <GlobalFilter
              globalFilter={table.state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            <FilterMenu control={control} reset={reset} />
            <Tooltip
              title={
                projects?.projectType === "cards"
                  ? t("forms.card")
                  : t("forms.table")
              }
              sx={{
                textTransform: "capitalize",
              }}
            >
              <IconButton
                aria-label="project list type"
                onClick={handleProjectTypeChange}
              >
                {projects?.projectType === "cards" ? (
                  <ViewModuleIcon />
                ) : (
                  <ViewListIcon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      {projects?.projectType === "cards" ? (
        <ProjectCards {...table} section={section} />
      ) : (
        <ProjectsTable {...table} />
      )}
    </>
  );
}
