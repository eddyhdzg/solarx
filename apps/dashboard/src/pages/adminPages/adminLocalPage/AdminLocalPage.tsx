import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, AdminLocalTemplate } from "atomic";
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
        title={t("pages.admin.local.local")}
        description={t("pages.admin.local.localDescription")}
      />
      <AdminLocalTemplate />
    </>
  );
}
