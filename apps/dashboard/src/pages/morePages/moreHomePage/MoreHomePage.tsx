import { useEffect } from "react";
import { Seo, MoreHomeTemplate } from "atomic";
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
        title={t("pages.more.moreHome.more")}
        description={t("pages.more.moreHome.moreDescription")}
      />
      <MoreHomeTemplate />
    </>
  );
}
