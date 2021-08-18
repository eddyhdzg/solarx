import { useMemo } from "react";
import { RoleSelect } from "components";
import { User, UserRole } from "types";

interface Row {
  original: User;
}

const useUsersColumns = () => {
  const columns = useMemo(() => {
    const adminUsers = [
      {
        id: "id",
        Header: "id",
        accessor: "id",
      },
      {
        id: "name",
        Header: "Name",
        accessor: "name",
      },
      {
        id: "role",
        Header: "Role",
        accessor: "role",
        Cell: ({ value, row }: { value: UserRole; row: Row }) => {
          return <RoleSelect id={row?.original?.id} role={value} />;
        },
      },
    ];

    return adminUsers;
  }, []);

  return columns;
};

export default useUsersColumns;
