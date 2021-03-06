import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo } from "components";
import { useTranslation } from "react-i18next";
import { AdminLocalTemplate } from "templates";

export default function AdminLocalPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.local.local", {
          postProcess: "capitalize",
        })}
        description={t("pages.admin.local.localDescription")}
      />
      <AdminLocalTemplate />
    </>
  );
}
