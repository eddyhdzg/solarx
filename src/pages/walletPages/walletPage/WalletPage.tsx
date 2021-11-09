import { useEffect } from "react";
import { Seo, PageTitle, AuthWrapper } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { WalletTemplate } from "templates";

export default function WalletPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.wallet.title")}
        description={t("pages.wallet.description")}
      />
      <PageTitle>
        {t("pages.wallet.title", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      <AuthWrapper>
        <WalletTemplate />
      </AuthWrapper>
    </>
  );
}
