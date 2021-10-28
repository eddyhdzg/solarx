import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, PageTitle } from "components";
import { useTranslation } from "react-i18next";
import { AdminUsersTemplate } from "templates";

export default function AdminUsersPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.users.users", {
          postProcess: "capitalize",
        })}
        description={t("pages.admin.users.usersDescription")}
      />
      <PageTitle>{t("pages.admin.users.users")}</PageTitle>
      <AdminUsersTemplate />
    </>
  );
}
