import { Container } from "@mui/material";
import { PageTitle, AuthWrapper } from "components";
import { AccountInformationForm } from "forms";
import { useTranslation } from "react-i18next";

export default function AccountInformationTemplate() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <PageTitle>{t("pages.more.profile.profile")}</PageTitle>
      <AuthWrapper>
        <AccountInformationForm />
      </AuthWrapper>
    </Container>
  );
}
