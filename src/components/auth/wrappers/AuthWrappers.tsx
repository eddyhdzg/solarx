import { useSigninCheck } from "reactfire";
import { CenterLoader, MessagePaper } from "components";
import { useTranslation } from "react-i18next";

export default function AuthWrapper({
  children,
  fallback,
}: React.PropsWithChildren<{ fallback?: JSX.Element }>): JSX.Element {
  const { t } = useTranslation();
  const { status, data: signInCheckResult } = useSigninCheck();

  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <CenterLoader />;
  } else if (signInCheckResult.signedIn === true) {
    return children as JSX.Element;
  }

  return fallback ? (
    fallback
  ) : (
    <MessagePaper message={t("auth.signIntoUseThisRoute")} />
  );
}
