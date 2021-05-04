// import { useRouter } from "next/router";
import { locales } from "locales";

const useCopywriting = () => {
  // const { locale } = useRouter();
  // const copy = locale && locale in locales ? locales[locale] : locales["es"];
  const copy = locales["en"];
  return copy;
};

export default useCopywriting;
