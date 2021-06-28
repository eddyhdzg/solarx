import { useMemo } from "react";
import ProjectsTable from "./projectsTable/ProjectsTable";
import ProjectsCards from "./projectsCards/ProjectsCards";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import FilterChips from "./filterChips/FilterChips";
import FilterMenu from "./filterMenu/FilterMenu";
import { IconButton, Tooltip } from "@material-ui/core";
import { useProjectFilters, useStore } from "hooks";
import shallow from "zustand/shallow";
import GlobalFilter from "./reactTable/GlobalFilter";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import useProjectsColumns from "./reactTable/useProjectsColumns";
import { rows as localProjects } from "../projects.utils";
import useStyles from "./projects.jss";

const Projects = () => {
  const classes = useStyles();
  const { dispatch, projectType } = useStore(
    ({ dispatch, projectType }) => ({ dispatch, projectType }),
    shallow
  );
  const columns = useProjectsColumns();
  const data = useMemo(() => localProjects, []);

  const { setFilter, setGlobalFilter, ...table } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  const { control, reset, watch } = useProjectFilters({ setFilter });

  const handleProjectTypeChange = () => {
    dispatch({
      type: "PROJECTS_TOGGLE_TYPE",
      payload: projectType === "cards" ? "table" : "cards",
    });
  };

  return (
    <>
      <div className={classes.projects_root}>
        <FilterChips watch={watch} reset={reset} />
        <div className={classes.projects_filters}>
          <GlobalFilter
            globalFilter={table.state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <FilterMenu control={control} reset={reset} />
          <Tooltip title={projectType === "cards" ? "Cards" : "Table"}>
            <IconButton
              aria-label="project list type"
              onClick={handleProjectTypeChange}
            >
              {projectType === "cards" ? <ViewModuleIcon /> : <ViewListIcon />}
            </IconButton>
          </Tooltip>
        </div>
      </div>

      {projectType === "cards" ? (
        <ProjectsCards projects={table.rows} />
      ) : (
        <ProjectsTable {...table} />
      )}
    </>
  );
};

export default Projects;
