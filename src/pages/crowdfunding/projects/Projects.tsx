import { useMemo } from "react";
import {
  useProjectFilters,
  usePublicProjects,
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

const Projects = () => {
  const { data: projects } = usePublicProjects();
  const { publicColumns } = useProjectsColumns({ section: "crowdfunding" });
  const data = useMemo(() => projects, [projects]);
  const globalFilter = useFuzzyGlobalFilter(projectSearchFilters);
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
      section="crowdfunding"
    />
  );
};

export default Projects;
