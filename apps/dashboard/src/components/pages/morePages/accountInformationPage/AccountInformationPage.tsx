import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, AccountInformationTemplate } from "components";
import { useTranslation } from "react-i18next";

export default function AccountInformationPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.profile.title")}
        description={t("pages.more.profile.description")}
      />
      <AccountInformationTemplate />
    </>
  );
}
