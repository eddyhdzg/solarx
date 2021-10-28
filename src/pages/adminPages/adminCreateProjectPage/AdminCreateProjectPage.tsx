import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { AdminCreateProjectTemplate } from "templates";

export default function AdminCreateProjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);
  return (
    <>
      <Seo
        title={t("pages.admin.createProject.title")}
        description={t("pages.admin.createProject.description")}
      />
      <PageTitle>{t("pages.admin.createProject.title")}</PageTitle>
      <AdminCreateProjectTemplate />
    </>
  );
}
