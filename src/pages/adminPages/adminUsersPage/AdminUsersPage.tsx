import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo } from "components";
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
      <AdminUsersTemplate />
    </>
  );
}
