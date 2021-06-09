import ProjectsTable from "./projectsTable/ProjectsTable";
import ProjectsCards from "./projectsCards/ProjectsCards";
import useStyles from "./projects.jss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TableChartIcon from "@material-ui/icons/TableChart";
import FilterChips from "./filterChips/FilterChips";
import FilterMenu from "./filterMenu/FilterMenu";
import FilterSearch from "./filterSearch/FilterSearch";
import { IconButton, Tooltip } from "@material-ui/core";
import { useProjectFilters, useProjectsSearch, useStore } from "hooks";
import shallow from "zustand/shallow";
import { rows } from "../projects.utils";

const Projects = () => {
  const classes = useStyles();
  const { control, reset, watch, setValue } = useProjectFilters();
  const { dispatch, projectType } = useStore(
    ({ dispatch, projectType }) => ({ dispatch, projectType }),
    shallow
  );

  const handleProjectTypeChange = () => {
    dispatch({
      type: "PROJECTS_TOGGLE_TYPE",
      payload: projectType === "cards" ? "table" : "cards",
    });
  };

  const search = watch("search", "");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("search", event.target.value);
  };

  const handleSearchReset = () => {
    setValue("search", "");
  };

  const filteredRows = useProjectsSearch(rows, watch, (l) => [
    l.id,
    l.name,
    l.location,
    l.funded,
    l.sharesSold,
    l.totalShares,
  ]);

  return (
    <>
      <div className={classes.projects_root}>
        <FilterChips watch={watch} reset={reset} />
        <div className={classes.projects_filters}>
          <FilterSearch
            value={search}
            onChange={handleSearchChange}
            onReset={handleSearchReset}
          />
          <FilterMenu control={control} reset={reset} />
          <Tooltip title={projectType === "cards" ? "Cards" : "Table"}>
            <IconButton
              aria-label="project list type"
              onClick={handleProjectTypeChange}
            >
              {projectType === "cards" ? <DashboardIcon /> : <TableChartIcon />}
            </IconButton>
          </Tooltip>
        </div>
      </div>

      {projectType === "cards" ? (
        <ProjectsCards projects={filteredRows} />
      ) : (
        <ProjectsTable projects={filteredRows} />
      )}
    </>
  );
};

export default Projects;
