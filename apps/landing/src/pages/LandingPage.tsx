import { Seo } from "components";
import { useTranslation } from "react-i18next";
import { LandingTemplate } from "templates";

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("pages.landing.title")}
        description={t("pages.landing.description")}
      />
      <LandingTemplate />
    </>
  );
}
