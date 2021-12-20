import { Container } from "@mui/material";
import { useBreakpoint } from "hooks";
import { PageTitle, AuthWrapper } from "components";
import { useTranslation } from "react-i18next";
import WalletDesktopLayout from "./walletDesktopLayout/WalletDesktopLayout";
import WalletMobileLayout from "./walletMobileLayout/WalletMobileLayout";

export default function WalletTemplate() {
  const lg = useBreakpoint("lg");
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl" disableGutters>
      <PageTitle>
        {t("pages.wallet.title", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      <AuthWrapper>
        {lg ? <WalletDesktopLayout /> : <WalletMobileLayout />}
      </AuthWrapper>
    </Container>
  );
}
