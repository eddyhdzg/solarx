import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageTitle, UsersTableLayout } from "components";
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
