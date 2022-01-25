import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export interface ISeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: ISeoProps) {
  const { i18n } = useTranslation();

  return (
    <Helmet
      htmlAttributes={{ lang: i18n.language }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
      ]}
    />
  );
}
