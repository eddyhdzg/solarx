import { Container } from "@mui/material";
import { PageTitle } from "components";
import { AuthWrapper } from "atomic";
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
