import { FilterSearch } from "components";
import { useRouterState } from "hooks";

export default function GlobalFilter() {
  const {
    values: { search = "" },
    onChange,
    onReset,
  } = useRouterState();

  return <FilterSearch value={search} onChange={onChange} onReset={onReset} />;
}
