import { useEffect } from "react";
import { Seo, HistoryTemplate } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function HistoryPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.history.title")}
        description={t("pages.more.history.description")}
      />
      <HistoryTemplate />
    </>
  );
}
