import { useEffect } from "react";
import { useAsyncDebounce } from "react-table";
import { useQueryParams } from "hooks";

interface useProjectsFiltersProps {
  setFilter: (
    columnId: string,
    filterValue: string | boolean | undefined
  ) => void;
  setGlobalFilter: any;
  data?: any;
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
    setFilter("id", id);
    setFilter("name", name);
    setFilter("location", location);
    setFilter("funded", funded);
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
