import { useMemo } from "react";
import {
  useProjectFilters,
  useProjects,
  useProjectsColumns,
  useFuzzyGlobalFilter,
} from "hooks";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { ProjectsTableLayout } from "tables";

const Projects = () => {
  const { data: projects } = useProjects();
  const { privateColumns } = useProjectsColumns();
  const data = useMemo(() => projects, [projects]);
  const globalFilter = useFuzzyGlobalFilter();
  const { setFilter, setGlobalFilter, ...table } = useTable(
    {
      columns: privateColumns,
      data,
      initialState: {
        hiddenColumns: ["id"],
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
    />
  );
};

export default Projects;
