import { GlobalFilter } from "components";
import { TableInstance } from "react-table";
import { FirestoreUser } from "solarx-types";
import { UsersTableLayoutRoot } from "./UsersTableLayout.styled";
import UsersTable from "./usersTable/UsersTable";

interface IUsersTableLayoutProps {
  table: TableInstance<FirestoreUser>;
}

export default function UsersTableLayout({ table }: IUsersTableLayoutProps) {
  return (
    <>
      <UsersTableLayoutRoot>
        <GlobalFilter />
      </UsersTableLayoutRoot>
      <UsersTable {...table} />
    </>
  );
}
