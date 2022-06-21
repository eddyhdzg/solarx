import { useEffect } from "react";
import { Seo } from "atomic";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { PreferencesTemplate } from "templates";

export default function PreferencesPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.preferences.preferences")}
        description={t("pages.more.preferences.preferencesDescription")}
      />
      <PreferencesTemplate />
    </>
  );
}
