import { Container } from "@mui/material";
import { PageTitle, AuthWrapper, AccountInformationForm } from "components";
import { useTranslation } from "react-i18next";

export default function AccountInformationTemplate() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.more.profile.title")}</PageTitle>
      <AuthWrapper>
        <AccountInformationForm />
      </AuthWrapper>
    </Container>
  );
}
