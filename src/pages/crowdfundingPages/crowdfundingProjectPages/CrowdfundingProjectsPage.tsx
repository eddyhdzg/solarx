import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, PageTitle } from "components";
import { useTranslation } from "react-i18next";
import { CrowdfundingProjectsTemplate } from "templates";

export default function CrowdfundingProjectsPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.crowdfunding.projects.crowdfundingProjects")}
        description={t(
          "pages.crowdfunding.projects.crowdfundingProjectsDescription"
        )}
      />
      <PageTitle>
        {t("pages.crowdfunding.projects.crowdfundingProjects")}
      </PageTitle>
      <CrowdfundingProjectsTemplate />
    </>
  );
}
