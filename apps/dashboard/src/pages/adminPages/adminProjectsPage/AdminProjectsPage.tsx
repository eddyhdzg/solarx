import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, AdminProjectsTemplate } from "atomic";
import { useTranslation } from "react-i18next";

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
