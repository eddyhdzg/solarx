import { useEffect } from "react";
import { useRouterState } from "hooks";
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
    values: { funded = "", search = "", basePriceFrom = "", basePriceTo = "" },
    onReset,
  } = useRouterState();

  const performantChange = useAsyncDebounce((name, value) => {
    setFilter(name, value);
  }, 200);

  const performantGlobalChange = useAsyncDebounce((value) => {
    setGlobalFilter(value);
  }, 200);

  useEffect(() => {
    setGlobalFilter(search);
    setFilter("funded", funded?.toString());
    if (basePriceFrom && basePriceTo) {
      // @ts-ignore
      setFilter("basePrice", [
        // @ts-ignore
        Number(basePriceFrom),
        // @ts-ignore
        Number(basePriceTo),
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    performantGlobalChange(search);
  }, [search, performantGlobalChange]);

  useEffect(() => {
    performantChange("funded", funded);
  }, [funded, performantChange]);

  useEffect(() => {
    if (basePriceFrom && basePriceTo) {
      if (basePriceFrom === "0" && basePriceTo === "2000") {
        onReset(["basePriceFrom", "basePriceTo"]);
      } else {
        performantChange("basePrice", [
          Number(basePriceFrom),
          Number(basePriceTo),
        ]);
      }
    } else performantChange("basePrice", undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePriceFrom, basePriceTo, performantChange]);
}
