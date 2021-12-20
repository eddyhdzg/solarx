import { useEffect } from "react";
import { Seo } from "components";
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
      <MoreHomeTemplate />
    </>
  );
}
