import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { AdminHomeTemplate } from "templates";

export default function AdminHomePage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.admin.adminHome.admin", {
          postProcess: "capitalize",
        })}
        description={t("pages.admin.adminHome.adminDescription")}
      />
      <PageTitle>
        {t("pages.admin.adminHome.admin", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      <AdminHomeTemplate />
    </>
  );
}
