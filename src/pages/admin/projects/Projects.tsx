import { useEffect, useMemo } from "react";
import {
  useHeader,
  useProjectFilters,
  usePrivateProjects,
  useProjectsColumns,
  useFuzzyGlobalFilter,
  useStore,
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

export default function ProjectsPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "admin", url: "/admin" });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title="Administrator projects"
        description="Projects only administrators can see."
      />
      <PageTitle>Administrator projects</PageTitle>
      <Projects />
    </>
  );
}

const Projects = () => {
  const { data: projects } = usePrivateProjects();
  const { privateColumns } = useProjectsColumns({ section: "admin/projects" });
  const data = useMemo(() => projects, [projects]);
  const globalFilter = useFuzzyGlobalFilter(projectSearchFilters);
  const {
    projects: { pageSize },
  } = useStore(({ projects }) => ({ projects }), shallow);
  const { setFilter, setGlobalFilter, ...table } = useTable(
    {
      columns: privateColumns,
      data,
      initialState: {
        // hiddenColumns: ["id"],
        // @ts-ignore
        pageSize,
      },
      // @ts-ignore
      globalFilter,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  const { control, reset, watch } = useProjectFilters({ setFilter });

  return (
    <ProjectsTableLayout
      control={control}
      reset={reset}
      watch={watch}
      setGlobalFilter={setGlobalFilter}
      table={table}
      section="admin/projects"
    />
  );
};
