import { useMemo } from "react";
import {
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
import shallow from "zustand/shallow";
import { projectSearchFilters } from "constant";
import { fuzzyTextFilterFn } from "utils";
import { Project, ProjectSection } from "solarx-types";

interface useProjectsTableProps {
  data: Project[];
  section: ProjectSection;
}

export default function useProjectsTable({
  data,
  section,
}: useProjectsTableProps) {
  const { publicColumns, privateColumns } = useProjectsColumns({ section });
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
      columns: section === "admin/projects" ? privateColumns : publicColumns,
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

  return table;
}
