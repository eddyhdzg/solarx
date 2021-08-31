import { useEffect, useMemo } from "react";
import { UsersTableLayout } from "tables";
import { useFuzzyGlobalFilter, useFirestoreUsers } from "hooks";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { useHeader, useUsersColumns } from "hooks";
import { Seo, PageTitle } from "components";

export default function UsersPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "admin", url: "/admin" });
  }, [onChangeRoute]);

  return (
    <>
      <Seo title="Users" description="Manage users as an administrators." />
      <PageTitle>Users</PageTitle>
      <Users />
    </>
  );
}

function Users() {
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
