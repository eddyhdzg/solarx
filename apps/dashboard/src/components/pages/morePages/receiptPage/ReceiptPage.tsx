import { useEffect } from "react";
import { Seo, ReceiptTemplate } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function ReceiptPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.history"), url: "/more/history" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.receipt.title")}
        description={t("pages.more.receipt.description")}
      />
      <ReceiptTemplate />
    </>
  );
}
