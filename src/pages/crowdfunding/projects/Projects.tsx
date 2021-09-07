import { useEffect, useMemo } from "react";
import {
  useHeader,
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
import { Seo, PageTitle } from "components";
import { fuzzyTextFilterFn } from "utils";

export default function ProjectsPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo title="Crowdfunding projects" description="Crowdfunding projects." />
      <PageTitle>Crowdfunding projects</PageTitle>
      <Projects />
    </>
  );
}

const Projects = () => {
  const { data: projects } = usePublicProjects();
  const { publicColumns } = useProjectsColumns({ section: "crowdfunding" });
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
      columns: publicColumns,
      data,
      initialState: {
        hiddenColumns: ["id"],
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

  const { control, reset, watch } = useProjectFilters({
    setFilter,
    length: table?.data?.length,
  });

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
