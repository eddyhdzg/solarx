import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import {
  useInvestorsColumns,
  useStore,
  useInvestorsFilters,
  useFuzzyGlobalFilter,
  useInvestors,
} from "hooks";
import shallow from "zustand/shallow";
import { investorsSearchFilters } from "constant";
import { fuzzyTextFilterFn } from "utils";

export default function useInvestorsTable() {
  const { data: firestoreInvestors } = useInvestors();
  const investorsColumns = useInvestorsColumns();
  const globalFilter = useFuzzyGlobalFilter(investorsSearchFilters);
  const {
    investors: { pageSize },
  } = useStore(({ investors }) => ({ investors }), shallow);
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
    }),
    []
  );

  const table = useTable(
    {
      columns: investorsColumns,
      data: firestoreInvestors,
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

  useInvestorsFilters({
    setGlobalFilter: table?.setGlobalFilter,
    data: table?.data,
  });

  return table;
}
