import { useEffect } from "react";
import { useAsyncDebounce, TableInstance } from "react-table";
import { useQueryParams } from "hooks";

interface useInvestorsFiltersProps {
  setGlobalFilter: TableInstance<object>["setGlobalFilter"];
  data?: TableInstance<object>["data"];
}

export default function useInvestorsFilters({
  setGlobalFilter,
  data,
}: useInvestorsFiltersProps) {
  const { search = "" } = useQueryParams();

  const performantGlobalChange = useAsyncDebounce((value) => {
    setGlobalFilter(value);
  }, 200);

  useEffect(() => {
    setGlobalFilter(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    performantGlobalChange(search);
  }, [search, performantGlobalChange]);
}
