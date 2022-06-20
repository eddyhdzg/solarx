import { useSigninCheck } from "reactfire";
import { CenterLoader, MessagePaper } from "atomic";
import { useTranslation } from "react-i18next";

export default function AuthWrapper({
  children,
  fallback,
}: React.PropsWithChildren<{
  fallback?: React.ReactElement;
}>): React.ReactElement {
  const { t } = useTranslation();
  const { status, data: signInCheckResult } = useSigninCheck();

  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <CenterLoader />;
  } else if (signInCheckResult.signedIn === true) {
    return children as React.ReactElement;
  }

  return fallback ? (
    fallback
  ) : (
    <MessagePaper message={t("auth.signIntoUseThisRoute")} />
  );
}
