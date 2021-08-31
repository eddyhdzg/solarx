import { Helmet } from "react-helmet";
import { useStore } from "hooks";
import shallow from "zustand/shallow";

interface ISeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: ISeoProps) {
  const { locale } = useStore(({ locale }) => ({ locale }), shallow);

  return (
    <Helmet
      htmlAttributes={{ lang: locale }}
      title={`SolarX - ${title}`}
      meta={[
        {
          name: "description",
          content: description,
        },
      ]}
    />
  );
}
