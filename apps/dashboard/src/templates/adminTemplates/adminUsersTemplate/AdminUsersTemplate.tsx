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
import { useUsersColumns, useStore, useUsersFilters } from "hooks";
import shallow from "zustand/shallow";
import { usersSearchFilters } from "constant";
import { fuzzyTextFilterFn } from "utils";
import { useTranslation } from "react-i18next";
import { PageTitle } from "components";
import { Container } from "@mui/material";

export default function AdminUsersTemplate() {
  const { t } = useTranslation();
  const { data: firestoreUsers } = useFirestoreUsers();
  const usersColumns = useUsersColumns();
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

  const table = useTable(
    {
      columns: usersColumns,
      data: firestoreUsers,
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

  useUsersFilters({
    setGlobalFilter: table?.setGlobalFilter,
    data: table?.data,
  });

  return (
    <Container maxWidth="xl">
      <PageTitle>{t("pages.admin.users.users")}</PageTitle>
      <UsersTableLayout table={table} />
    </Container>
  );
}
