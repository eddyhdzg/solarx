import { useMemo } from "react";
import { UsersTableLayout } from "tables";
import { useFuzzyGlobalFilter, useFirestoreUsers } from "hooks";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { useUsersColumns } from "hooks";

export default function Users() {
  const { data: firestoreUsers } = useFirestoreUsers();

  const usersColumns: any = useUsersColumns();
  const usersFilters = useMemo(
    () => ["uid", "displayName", "email", "role"],
    []
  );
  const globalFilter = useFuzzyGlobalFilter(usersFilters);
  const { setFilter, setGlobalFilter, ...table } = useTable(
    {
      columns: usersColumns,
      data: firestoreUsers,
      initialState: {
        // @ts-ignore
        // pageSize,
      },
      // @ts-ignore
      globalFilter,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  return <UsersTableLayout setGlobalFilter={setGlobalFilter} table={table} />;
}
