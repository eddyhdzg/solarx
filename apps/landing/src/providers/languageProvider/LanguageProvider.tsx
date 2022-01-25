import { useEffect } from "react";
import { locale } from "dayjs";
import { useTranslation } from "react-i18next";

const LanguageProvider: React.FC = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    locale(i18n.language);
  }, [i18n.language]);
  return <>{children}</>;
};

export default LanguageProvider;
