import { useMemo } from "react";
import {
  usePublicProjects,
  useProjectsColumns,
  useFuzzyGlobalFilter,
  useStore,
  useProjectsFilters,
} from "hooks";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { ProjectsTableLayout } from "tables";
import shallow from "zustand/shallow";
import { projectSearchFilters } from "constant";
import { fuzzyTextFilterFn } from "utils";
import { ProjectSection } from "solarx-types";
import { PageTitle } from "components";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

export default function CrowdfundingProjectsTemplate() {
  const { t } = useTranslation();
  const section: ProjectSection = "crowdfunding";
  const { data } = usePublicProjects();
  const { publicColumns } = useProjectsColumns({ section });
  const globalFilter = useFuzzyGlobalFilter(projectSearchFilters);
  const {
    projects: { pageSize },
  } = useStore(({ projects }) => ({ projects }), shallow);
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
    }),
    []
  );

  const table = useTable(
    {
      columns: publicColumns,
      data,
      initialState: {
        pageSize,
      },
      globalFilter,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useProjectsFilters({
    setFilter: table?.setFilter,
    setGlobalFilter: table?.setGlobalFilter,
    data: table?.data,
  });

  return (
    <Container disableGutters maxWidth="xl">
      <PageTitle>
        {t("pages.crowdfunding.projects.crowdfundingProjects")}
      </PageTitle>
      <ProjectsTableLayout table={table} section={section} />
    </Container>
  );
}
