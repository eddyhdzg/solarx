import { useEffect } from "react";
import { Seo } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { HistoryTemplate } from "templates";

export default function HistoryPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.history.history")}
        description={t("pages.more.history.historyDescription")}
      />
      <HistoryTemplate />
    </>
  );
}
