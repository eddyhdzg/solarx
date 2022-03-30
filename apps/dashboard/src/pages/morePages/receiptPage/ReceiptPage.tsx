import { useEffect } from "react";
import { Seo } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { ReceiptTemplate } from "templates";

export default function ReceiptPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.history"), url: "/more/history" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.receipt.receipt")}
        description={t("pages.more.receipt.receiptDescription")}
      />
      <ReceiptTemplate />
    </>
  );
}
