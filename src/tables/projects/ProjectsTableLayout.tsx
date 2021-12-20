import ProjectsTable from "./projectsTable/ProjectsTable";
import ProjectCards from "./projectCards/ProjectCards";
import FilterChips from "./filterChips/FilterChips";
import FilterMenu from "./filterMenu/FilterMenu";
import { IconButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { GlobalFilter } from "components";
import { useStore } from "hooks";
import shallow from "zustand/shallow";
import { Project, ProjectSection } from "types";
import { useTranslation } from "react-i18next";
import { TableInstance } from "react-table";
import {
  ActionsContainer,
  ActionsWrapper,
  InputsWrapper,
  StyledTooltip,
} from "./ProjectsTableLayout.styled";

interface IProjectsTableLayoutProps {
  table: TableInstance<Project>;
  section: ProjectSection;
}

export default function ProjectsTableLayout({
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
      <ActionsContainer>
        <ActionsWrapper>
          <FilterChips />
          <InputsWrapper>
            <GlobalFilter />
            <FilterMenu />
            <StyledTooltip
              title={
                projects?.projectType === "cards"
                  ? t("forms.cards", {
                      postProcess: "capitalize",
                    })
                  : t("forms.table", {
                      postProcess: "capitalize",
                    })
              }
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
            </StyledTooltip>
          </InputsWrapper>
        </ActionsWrapper>
      </ActionsContainer>
      {projects?.projectType === "cards" ? (
        <ProjectCards {...table} section={section} />
      ) : (
        <ProjectsTable {...table} />
      )}
    </>
  );
}
