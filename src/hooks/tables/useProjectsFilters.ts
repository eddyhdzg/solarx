import { useEffect } from "react";
import { useQueryParams } from "hooks";
import { useAsyncDebounce, TableInstance } from "react-table";

interface useProjectsFiltersProps {
  setFilter: (
    columnId: string,
    filterValue: string | boolean | undefined
  ) => void;
  setGlobalFilter: TableInstance<object>["setGlobalFilter"];
  data?: TableInstance<object>["data"];
}

export default function useProjectsFilters({
  setFilter,
  setGlobalFilter,
  data,
}: useProjectsFiltersProps) {
  const {
    id = "",
    name = "",
    location = "",
    funded = "",
    search = "",
  } = useQueryParams();

  const performantChange = useAsyncDebounce((name, value) => {
    setFilter(name, value);
  }, 200);

  const performantGlobalChange = useAsyncDebounce((value) => {
    setGlobalFilter(value);
  }, 200);

  useEffect(() => {
    setGlobalFilter(search);
    setFilter("id", id?.toString());
    setFilter("name", name?.toString());
    setFilter("location", location?.toString());
    setFilter("funded", funded?.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    performantGlobalChange(search);
  }, [search, performantGlobalChange]);

  useEffect(() => {
    performantChange("id", id);
  }, [id, performantChange]);

  useEffect(() => {
    performantChange("name", name);
  }, [name, performantChange]);

  useEffect(() => {
    performantChange("location", location);
  }, [location, performantChange]);

  useEffect(() => {
    performantChange("funded", funded);
  }, [funded, performantChange]);
}
