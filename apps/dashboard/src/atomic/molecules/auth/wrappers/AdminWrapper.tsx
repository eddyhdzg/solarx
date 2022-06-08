import { useIsAdmin } from "hooks";
import { CenterLoader } from "components";
import { MessagePaper } from "atomic";
import { useTranslation } from "react-i18next";

export default function AdminWrapper({
  children,
  fallback,
}: React.PropsWithChildren<{
  fallback?: React.ReactElement;
}>): React.ReactElement {
  const { t } = useTranslation();
  const { status, isAdmin } = useIsAdmin();

  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <CenterLoader />;
  } else if (isAdmin) {
    return children as React.ReactElement;
  }

  return fallback ? (
    fallback
  ) : (
    <MessagePaper message={t("auth.youNeedToBeAnAdmin")} />
  );
}
