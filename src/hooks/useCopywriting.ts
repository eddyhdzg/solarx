import { useStore } from "hooks";
import shallow from "zustand/shallow";
import { locales } from "locales";

const useCopywriting = () => {
  const { locale } = useStore(({ locale }) => ({ locale }), shallow);
  const copy = locale && locale in locales ? locales[locale] : locales["en"];
  return copy;
};

export default useCopywriting;
