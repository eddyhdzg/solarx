import { FilterSearch } from "atomic";
import { useRouterState } from "hooks";

export default function GlobalFilter() {
  const {
    values: { search = "" },
    onInputChange,
    onReset,
  } = useRouterState();

  return (
    <FilterSearch
      value={search as string}
      onChange={onInputChange}
      onReset={onReset}
    />
  );
}
