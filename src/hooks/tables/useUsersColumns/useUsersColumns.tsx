import { useMemo } from "react";
import { RoleSelect } from "components";
import { FirestoreUser, UserRole } from "types";
import useStyles from "../useProjectsColumns/useProjectsColumns.jss";
import { Avatar } from "@material-ui/core";

interface Row {
  original: FirestoreUser;
}

const useUsersColumns = () => {
  const classes = useStyles();
  const columns = useMemo(() => {
    const adminUsers = [
      {
        id: "avatar",
        Header: "Avatar",
        accessor: "avatar",
        Cell: ({ value }: { value: string }) => {
          return <Avatar alt="avatar" src={value || undefined} />;
        },
      },
      {
        id: "uid",
        Header: "uid",
        accessor: "uid",
      },
      {
        id: "email",
        Header: "Email",
        accessor: "email",
      },
      {
        id: "displayName",
        Header: "Name",
        accessor: "displayName",
      },
      {
        id: "role",
        Header: "Role",
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
  ]);

  return columns;
};

export default useUsersColumns;
