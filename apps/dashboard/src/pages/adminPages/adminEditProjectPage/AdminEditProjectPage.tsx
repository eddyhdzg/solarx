import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo } from "atomic";
import { useTranslation } from "react-i18next";
import { AdminEditProjectTemplate } from "templates";

export default function AdminEditProjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.editProject.editProject")}
        description={t("pages.admin.editProject.editProjectDescription")}
      />
      <AdminEditProjectTemplate />
    </>
  );
}
