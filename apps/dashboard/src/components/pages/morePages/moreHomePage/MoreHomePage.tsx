import { useEffect } from "react";
import { Seo, MoreHomeTemplate } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function MoreHomePage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.more.moreHome.title")}
        description={t("pages.more.moreHome.description")}
      />
      <MoreHomeTemplate />
    </>
  );
}
