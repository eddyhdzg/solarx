import ProjectsTable from "./projectsTable/ProjectsTable";
import ProjectsCards from "./projectsCards/ProjectsCards";
import FilterChips from "./filterChips/FilterChips";
import FilterMenu from "./filterMenu/FilterMenu";
import { IconButton, Tooltip } from "@material-ui/core";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { GlobalFilter } from "components";
import useStyles from "./projectsTableLayout.jss";
import { Control, UseFormReset, UseFormWatch } from "react-hook-form";
import { ProjectFiltersSchema, useStore } from "hooks";
import shallow from "zustand/shallow";

interface IProjectsTableLayoutProps {
  control: Control<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
  watch: UseFormWatch<ProjectFiltersSchema>;
  setGlobalFilter: any;
  table: any;
}

export default function ProjectsTableLayout({
  control,
  reset,
  watch,
  setGlobalFilter,
  table,
}: IProjectsTableLayoutProps) {
  const classes = useStyles();
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
      <div className={classes.projectTableLayout_root}>
        <FilterChips watch={watch} reset={reset} />
        <div className={classes.projectTableLayout_filters}>
          <GlobalFilter
            globalFilter={table.state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <FilterMenu control={control} reset={reset} />
          <Tooltip
            title={projects?.projectType === "cards" ? "Cards" : "Table"}
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
        </div>
      </div>

      {projects?.projectType === "cards" ? (
        <ProjectsCards {...table} />
      ) : (
        <ProjectsTable {...table} />
      )}
    </>
  );
}
