import { useEffect } from "react";
import { Seo, AdminHomeTemplate } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function AdminHomePage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.admin.adminHome.title")}
        description={t("pages.admin.adminHome.description")}
      />
      <AdminHomeTemplate />
    </>
  );
}
