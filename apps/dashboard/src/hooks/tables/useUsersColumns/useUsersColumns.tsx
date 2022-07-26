import { Avatar } from "@mui/material";
import { useMemo } from "react";
import { UserRoleForm } from "components";
import { FirestoreUser, UserRole } from "solarx-types";
import { useTranslation } from "react-i18next";
import { formatTimestampWithMinAndSec } from "utils";
import { Column } from "react-table";

interface Row {
  original: FirestoreUser;
}

const useUsersColumns = () => {
  const { t } = useTranslation();
  const columns: Column<object>[] = useMemo(() => {
    const adminUsers = [
      {
        id: "avatar",
        Header: t("pages.more.profile.avatar"),
        accessor: "avatar",
        Cell: ({ value }: { value: string }) => {
          return <Avatar alt="avatar" src={value || undefined} />;
        },
        disableSortBy: true,
        tabIndex: -1,
      },
      {
        id: "uid",
        Header: t("pages.more.profile.uid"),
        accessor: "uid",
      },
      {
        id: "email",
        Header: t("pages.more.profile.email"),
        accessor: "email",
      },
      {
        id: "displayName",
        Header: t("pages.more.profile.name"),
        accessor: "displayName",
      },
      {
        id: "created",
        Header: t("projects.created"),
        accessor: ({ created }: FirestoreUser) => {
          return created ? formatTimestampWithMinAndSec(created) : "";
        },
      },
      {
        id: "role",
        Header: t("pages.more.profile.role"),
        accessor: "role",
        Cell: ({ value, row }: { value: UserRole; row: Row }) => {
          return <UserRoleForm uid={row?.original?.uid} role={value} />;
        },
      },
    ];

    return adminUsers;
  }, [t]);

  return columns;
};

export default useUsersColumns;
