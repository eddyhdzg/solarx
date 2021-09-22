import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { useTheme, useMediaQuery } from "@material-ui/core";
import WalletDesktopLayout from "../walletDesktopLayout/WalletDesktopLayout";
import WalletMobileLayout from "../walletMobileLayout/WalletMobileLayout";

export default function WalletHome() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        // title={t("pages.wallet.title")}
        title={String(process.env?.REACT_APP_ENV)}
        description={t("pages.wallet.description")}
      />
      <PageTitle>
        {t("pages.wallet.title", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      {lg ? <WalletDesktopLayout /> : <WalletMobileLayout />}
    </>
  );
}
