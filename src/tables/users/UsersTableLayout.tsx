import { GlobalFilter, PageTitle } from "components";
import { UsersTableLayoutRoot } from "./UsersTableLayout.styled";
import { TableInstance } from "react-table";
import { FirestoreUser } from "types";
import { useTranslation } from "react-i18next";
import UsersTable from "./usersTable/UsersTable";

interface IUsersTableLayoutProps {
  table: TableInstance<FirestoreUser>;
}

export default function UsersTableLayout({ table }: IUsersTableLayoutProps) {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>
        {t("pages.admin.users.users", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      <UsersTableLayoutRoot>
        <GlobalFilter />
      </UsersTableLayoutRoot>
      <UsersTable {...table} />
    </>
  );
}
