import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageTitle, InvestorsTableLayout } from "components";
import { useInvestorsTable } from "hooks";

export default function AdminInvestorsTemplate() {
  const { t } = useTranslation();
  const investorsTable = useInvestorsTable();

  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.admin.investors.title")}</PageTitle>
      <InvestorsTableLayout table={investorsTable} />
    </Container>
  );
}
