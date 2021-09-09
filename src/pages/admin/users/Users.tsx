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
import { useHeader, useUsersColumns, useStore } from "hooks";
import { Seo, PageTitle } from "components";
import shallow from "zustand/shallow";
import { useTranslation } from "react-i18next";

export default function UsersPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.users.users", {
          postProcess: "capitalize",
        })}
        description={t("pages.admin.users.usersDescription")}
      />
      <PageTitle>{t("pages.admin.users.users")}</PageTitle>
      <Users />
    </>
  );
}

function Users() {
  const { data: firestoreUsers } = useFirestoreUsers();
  const {
    users: { pageSize },
  } = useStore(({ users }) => ({ users }), shallow);

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
        pageSize,
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
