import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo } from "atomic";
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
      <CrowdfundingProjectsTemplate />
    </>
  );
}
