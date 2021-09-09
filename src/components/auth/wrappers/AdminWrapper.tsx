import { CenterLoader, MessagePaper } from "components";
import { useIsAdmin } from "hooks";
import { useTranslation } from "react-i18next";

export default function AdminWrapper({
  children,
  fallback,
}: React.PropsWithChildren<{
  fallback?: JSX.Element;
}>): JSX.Element {
  const { t } = useTranslation();
  const { status, isAdmin } = useIsAdmin();

  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <CenterLoader />;
  } else if (isAdmin) {
    return children as JSX.Element;
  }

  return fallback ? (
    fallback
  ) : (
    <MessagePaper message={t("auth.youNeedToBeAnAdmin")} />
  );
}
