import { useMemo } from "react";
import {
  useProjectFilters,
  useProjectsNonDeleted,
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

const Projects = () => {
  const { data: projects } = useProjectsNonDeleted();
  const { publicColumns } = useProjectsColumns();
  const data = useMemo(() => projects, [projects]);
  const globalFilter = useFuzzyGlobalFilter();
  const {
    projects: { pageSize },
  } = useStore(({ projects }) => ({ projects }), shallow);

  const { setFilter, setGlobalFilter, ...table } = useTable(
    {
      columns: publicColumns,
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
    />
  );
};

export default Projects;
