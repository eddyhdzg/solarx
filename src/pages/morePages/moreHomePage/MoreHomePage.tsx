import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { MoreHomeTemplate } from "templates";

export default function MoreHomePage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.more.moreHome.more")}
        description={t("pages.more.moreHome.moreDescription")}
      />
      <PageTitle>{t("pages.more.moreHome.more")}</PageTitle>
      <MoreHomeTemplate />
    </>
  );
}
