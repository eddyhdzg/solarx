import { useEffect, useMemo } from "react";
import {
  useHeader,
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
import { Seo, PageTitle } from "components";
import { fuzzyTextFilterFn } from "utils";
import { useTranslation } from "react-i18next";
import { ProjectSection } from "types";

export default function ProjectsPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.crowdfunding.projects.crowdfundingProjects")}
        description={t(
          "pages.crowdfunding.projects.crowdfundingProjectsDescription"
        )}
      />
      <PageTitle>
        {t("pages.crowdfunding.projects.crowdfundingProjects")}
      </PageTitle>
      <Projects />
    </>
  );
}

const Projects = () => {
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

  const { setFilter, setGlobalFilter, ...table } = useTable(
    {
      columns: publicColumns,
      data,
      initialState: {
        // @ts-ignore
        pageSize,
      },
      // @ts-ignore
      globalFilter,
      // @ts-ignore
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  useProjectsFilters({
    setFilter,
    setGlobalFilter,
    data: table?.data,
  });

  return <ProjectsTableLayout table={table} section={section} />;
};
