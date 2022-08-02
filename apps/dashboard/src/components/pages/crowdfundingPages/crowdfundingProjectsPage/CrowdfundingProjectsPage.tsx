import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, CrowdfundingProjectsTemplate } from "components";
import { useTranslation } from "react-i18next";

export default function CrowdfundingProjectsPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.crowdfunding.projects.title")}
        description={t("pages.crowdfunding.projects.description")}
      />
      <CrowdfundingProjectsTemplate />
    </>
  );
}
