import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, AdminLocalTemplate } from "components";
import { useTranslation } from "react-i18next";

export default function AdminLocalPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.local.title")}
        description={t("pages.admin.local.description")}
      />
      <AdminLocalTemplate />
    </>
  );
}