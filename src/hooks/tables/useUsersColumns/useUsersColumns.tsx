import { useMemo } from "react";
import { RoleSelect } from "components";
import { FirestoreUser, UserRole } from "types";
import useStyles from "../useProjectsColumns/useProjectsColumns.jss";
import { Avatar } from "@material-ui/core";
import { useTranslation } from "react-i18next";

interface Row {
  original: FirestoreUser;
}

const useUsersColumns = () => {
  const { t } = useTranslation();
  const classes = useStyles();
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
        id: "role",
        Header: t("pages.more.accountInformation.role"),
        accessor: "role",
        Cell: ({ value, row }: { value: UserRole; row: Row }) => {
          return <RoleSelect id={row?.original?.uid} role={value} />;
        },
        className: [
          classes.useProjectsColumns_noPadding,
          classes.useProjectsColumns_alignRight,
        ].join(" "),
      },
    ];

    return adminUsers;
  }, [
    classes.useProjectsColumns_alignRight,
    classes.useProjectsColumns_noPadding,
    t,
  ]);

  return columns;
};

export default useUsersColumns;
