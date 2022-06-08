import { Container } from "@mui/material";
import { useBreakpoint } from "hooks";
import { PageTitle } from "components";
import { AuthWrapper } from "atomic";
import { useTranslation } from "react-i18next";
import WalletDesktopLayout from "./walletDesktopLayout/WalletDesktopLayout";
import WalletMobileLayout from "./walletMobileLayout/WalletMobileLayout";

export default function WalletTemplate() {
  const lg = useBreakpoint("lg");
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <PageTitle>{t("pages.wallet.title")}</PageTitle>
      <AuthWrapper>
        {lg ? <WalletDesktopLayout /> : <WalletMobileLayout />}
      </AuthWrapper>
    </Container>
  );
}
