import { Container } from "@mui/material";
import { UsersTableLayout } from "tables";
import { useTranslation } from "react-i18next";
import { PageTitle } from "atomic";
import { useUsersTable } from "hooks";

export default function AdminUsersTemplate() {
  const { t } = useTranslation();
  const usersTable = useUsersTable();

  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.admin.users.users")}</PageTitle>
      <UsersTableLayout table={usersTable} />
    </Container>
  );
}
