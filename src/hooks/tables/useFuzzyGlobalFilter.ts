import { useCallback } from "react";
import { Row, IdType } from "react-table";
import { matchSorter } from "match-sorter";

const filters = [
  "id",
  "name",
  "location",
  "funded",
  "sharePrice",
  "ror",
  "progress",
  "shares",
  "ppa",
  "created",
];
const useFuzzyGlobalFilter = () => {
  return useCallback((rows: Row<any>[], _: IdType<any>[], query: string) => {
    return matchSorter(rows, query, {
      keys: filters.map((columnName) => `values.${columnName}`),
    });
  }, []);
};

export default useFuzzyGlobalFilter;
