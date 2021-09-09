import ProjectsTable from "./projectsTable/ProjectsTable";
import ProjectCards from "./projectCards/ProjectCards";
import FilterChips from "./filterChips/FilterChips";
import FilterMenu from "./filterMenu/FilterMenu";
import { IconButton, Tooltip, Button } from "@material-ui/core";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { GlobalFilter } from "components";
import useStyles from "./projectsTableLayout.jss";
import { Control, UseFormReset, UseFormWatch } from "react-hook-form";
import { ProjectFiltersSchema, useStore } from "hooks";
import shallow from "zustand/shallow";
import { ProjectSection } from "types";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
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
  const classes = useStyles();
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
      <div
        className={[
          classes.projectTableLayout_wrapper,
          section === "admin/projects"
            ? classes.projectTableLayout_wrapper__admin
            : undefined,
        ].join(" ")}
      >
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddRoundedIcon />}
          to="/admin/projects/create-project"
          component={Link}
          className={[
            classes.projectTableLayout_button,
            section !== "admin/projects"
              ? classes.projectTableLayout_button__crowdfunding
              : undefined,
          ].join(" ")}
        >
          {t("pages.admin.createProject.title")}
        </Button>

        <div className={classes.projectTableLayout_root}>
          <FilterChips watch={watch} reset={reset} />
          <div className={classes.projectTableLayout_filters}>
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
              classes={{
                tooltip: classes.projectTableLayout_tooltip,
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
          </div>
        </div>
      </div>
      {projects?.projectType === "cards" ? (
        <ProjectCards {...table} section={section} />
      ) : (
        <ProjectsTable {...table} />
      )}
    </>
  );
}
