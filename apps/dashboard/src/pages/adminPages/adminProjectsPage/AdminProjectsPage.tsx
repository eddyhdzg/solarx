import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo } from "atomic";
import { useTranslation } from "react-i18next";
import { AdminProjectsTemplate } from "templates";

export default function AdminProjectsPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.projects.administratorProjects")}
        description={t("pages.admin.projects.administratorProjectsDescription")}
      />
      <AdminProjectsTemplate />
    </>
  );
}
