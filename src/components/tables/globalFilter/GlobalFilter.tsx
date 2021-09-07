import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import FilterSearch from "../filterSearch/FilterSearch";

export default function GlobalFilter({ globalFilter, setGlobalFilter }: any) {
  const [search, setSearch] = useState(globalFilter || "");

  const globalSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  const globalSearchReset = useAsyncDebounce(() => {
    setGlobalFilter("");
  }, 200);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    globalSearchChange(e.target.value);
  };

  const handleSearchReset = () => {
    setSearch("");
    globalSearchReset();
  };

  return (
    <FilterSearch
      value={search}
      onChange={handleSearchChange}
      onReset={handleSearchReset}
    />
  );
}
