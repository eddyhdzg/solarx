import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProject, useHeader } from "hooks";
import { CenterLoader, Seo } from "components";
import { useTranslation } from "react-i18next";
import { CrowdfundingProjectTemplate } from "templates";
import { ProjectIDParams } from "types";

export default function CrowdfundingProjectPage() {
  const { t } = useTranslation();
  const { id } = useParams<ProjectIDParams>();
  const { status, data } = useProject(id || "");
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.crowdfunding"), url: "/crowdfunding" });
  }, [onChangeRoute, t]);

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <>
      <Seo
        title={
          data?.name ||
          t("router.project", {
            postProcess: "capitalize",
          })
        }
        description="Project information page."
      />
      <CrowdfundingProjectTemplate />
    </>
  );
}
