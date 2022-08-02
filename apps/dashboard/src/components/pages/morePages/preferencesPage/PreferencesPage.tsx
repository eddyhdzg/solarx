import { useEffect } from "react";
import { Seo, PreferencesTemplate } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function PreferencesPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.preferences.title")}
        description={t("pages.more.preferences.description")}
      />
      <PreferencesTemplate />
    </>
  );
}
