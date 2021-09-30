import { useEffect, useMemo } from "react";
import {
  useHeader,
  usePrivateProjects,
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
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.projects.administratorProjects")}
        description={t("pages.admin.projects.administratorProjectsDescription")}
      />
      <PageTitle>{t("pages.admin.projects.administratorProjects")}</PageTitle>
      <Projects />
    </>
  );
}

const Projects = () => {
  const section: ProjectSection = "admin/projects";
  const { data: projects } = usePrivateProjects();
  const { privateColumns } = useProjectsColumns({ section });
  const data = useMemo(() => projects, [projects]);
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
      columns: privateColumns,
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
