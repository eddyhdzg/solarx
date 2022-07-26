import { useEffect } from "react";
import { Seo, WalletTemplate } from "atomic";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

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
      <WalletTemplate />
    </>
  );
}
