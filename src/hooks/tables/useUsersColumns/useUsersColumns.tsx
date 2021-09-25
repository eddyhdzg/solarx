import { useMemo } from "react";
import { RoleSelect } from "components";
import { FirestoreUser, UserRole } from "types";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { fomatTimeStampWithMinAndSec } from "utils";

interface Row {
  original: FirestoreUser;
}

const useUsersColumns = () => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const adminUsers = [
      {
        id: "avatar",
        Header: t("pages.more.accountInformation.avatar"),
        accessor: "avatar",
        Cell: ({ value }: { value: string }) => {
          return <Avatar alt="avatar" src={value || undefined} />;
        },
      },
      {
        id: "uid",
        Header: t("pages.more.accountInformation.uid"),
        accessor: "uid",
      },
      {
        id: "email",
        Header: t("pages.more.accountInformation.email"),
        accessor: "email",
      },
      {
        id: "displayName",
        Header: t("pages.more.accountInformation.name"),
        accessor: "displayName",
      },
      {
        id: "created",
        Header: t("projects.created"),
        accessor: ({ created }: FirestoreUser) => {
          return created ? fomatTimeStampWithMinAndSec(created) : "";
        },
      },
      {
        id: "role",
        Header: t("pages.more.accountInformation.role"),
        accessor: "role",
        Cell: ({ value, row }: { value: UserRole; row: Row }) => {
          return <RoleSelect id={row?.original?.uid} role={value} />;
        },
      },
    ];

    return adminUsers;
  }, [t]);

  return columns;
};

export default useUsersColumns;
