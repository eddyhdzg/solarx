import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, AdminEditProjectTemplate } from "components";
import { useTranslation } from "react-i18next";
import { FirebaseStorageProvider } from "providers";

export default function AdminEditProjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.editProject.title")}
        description={t("pages.admin.editProject.description")}
      />
      <FirebaseStorageProvider>
        <AdminEditProjectTemplate />
      </FirebaseStorageProvider>
    </>
  );
}
