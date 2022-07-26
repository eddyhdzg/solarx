import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, AdminUsersTemplate } from "components";
import { useTranslation } from "react-i18next";

export default function AdminUsersPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.admin"), url: "/admin" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.users.users")}
        description={t("pages.admin.users.usersDescription")}
      />
      <AdminUsersTemplate />
    </>
  );
}
