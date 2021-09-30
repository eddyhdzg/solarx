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
import { useHeader, useUsersColumns, useStore, useUsersFilters } from "hooks";
import { Seo, PageTitle } from "components";
import shallow from "zustand/shallow";
import { useTranslation } from "react-i18next";
import { usersSearchFilters } from "constant";
import { fuzzyTextFilterFn } from "utils";

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
  const usersColumns: any = useUsersColumns();
  const globalFilter = useFuzzyGlobalFilter(usersSearchFilters);
  const {
    users: { pageSize },
  } = useStore(({ users }) => ({ users }), shallow);
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
    }),
    []
  );

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
      // @ts-ignore
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  useUsersFilters({
    setGlobalFilter,
    data: table?.data,
  });

  return <UsersTableLayout table={table} />;
}
