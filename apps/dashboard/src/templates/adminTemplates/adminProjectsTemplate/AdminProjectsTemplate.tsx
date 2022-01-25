import { useMemo } from "react";
import {
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
import { fuzzyTextFilterFn } from "utils";
import { ProjectSection } from "solarx-types";

export default function AdminProjectsTemplate() {
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

  const table = useTable(
    {
      columns: privateColumns,
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

  return <ProjectsTableLayout table={table} section={section} />;
}
