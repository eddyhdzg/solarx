import UsersTable from "./usersTable/UsersTable";
import { GlobalFilter } from "components";
import { UsersTableLayoutRoot } from "./UsersTableLayout.styled";

interface IUsersTableLayoutProps {
  table: any;
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
