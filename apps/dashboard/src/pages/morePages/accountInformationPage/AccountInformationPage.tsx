import { useEffect } from "react";
import { useHeader } from "hooks";
import { AuthWrapper, PageTitle, Seo } from "components";
import { useTranslation } from "react-i18next";
import { AccountInformationTemplate } from "templates";

export default function AccountInformationPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.profile.profile")}
        description={t("pages.more.profile.accountInformationDescription")}
      />
      <PageTitle>{t("pages.more.profile.profile")}</PageTitle>
      <AuthWrapper>
        <AccountInformationTemplate />
      </AuthWrapper>
    </>
  );
}
